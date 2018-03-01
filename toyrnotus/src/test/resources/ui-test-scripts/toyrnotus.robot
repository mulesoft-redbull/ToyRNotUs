*** Settings ***

Library     SeleniumLibrary

*** Variables ***
${URL}    http://188.166.213.123:8081/web/

*** Test Cases ***
Case 01 Search Product with Age 3_to_5 and gender Female
    [Tags]  done
    Open Browser    ${URL}     gc
    sleep    1s
    Search Product    3_to_5    Female
    Page Should Contain    43 Piece dinner Set
    Close Browser

Case 02 Check product detail where ID = 2
    [Tags]  done
    Open Browser    about:blank      gc
    Check product detail    2
    Page Should Contain    43 Piece dinner Set
    Page Should Contain    12.95
    Page Should Contain    CoolKidz
    Page Should Contain    Female
    Close Browser

Case 03 Add product ID = 2 to cart
    [Tags]  done
    Open Browser    about:blank      gc
    Check product detail    2
    Add Product to cart    1
    Page Should Contain    Delete
    Page Should Contain    Check out
    Close Browser

Case 04 Delete product from cart
    [Tags]  done
    Open Browser    about:blank      gc
    Check product detail    2
    Add Product to cart    1
    Click Button    id:deleteItemButton2
    Page Should Not Contain    Delete
    Close Browser

Case 05 Check total cost
    [Tags]  done
    Open Browser    about:blank      gc
    Check product detail    2
    Add Product to cart    1
    Change product quantity in cart    2    2
    Page Should Contain    Total 75.90
    Close Browser

Case 06 Submit order
    [Tags]  done
    Open Browser    about:blank      gc
    Check product detail    2
    Add Product to cart    1
    click Button    id:check-out
    sleep    1s
    Input Text    id=fullName    Tanet Gamchaitavonrattana
    Input Text    id=address1    54 North Sathorn
    Input Text    id=city    Bangkok
    Input Text    id=province    Bangkok
    Input Text    id=postcode    10500
    Input Text    id=tel    +66851209334
    click Button    id:deliverToThisAddress
    sleep    1s
    Page Should Contain    Thank you
    Page Should Contain    Tanet
    Close Browser

*** Keywords ***
Search Product
    [Arguments]  ${age}  ${gender} 
    Select From List By Label    id:ageSelect    3_to_5
    Select From List By Label    id:genderSelect    Female
    Click Button    id:searchButton
    sleep    1s

Add Product to cart
    [Arguments]  ${quantity}
    Select From List By Label    id:quantitySelect    ${quantity}
    Click Button    id:addToCart
    sleep    1s

Check product detail
    [Arguments]    ${productId}
    goto    ${URL}#/toys-detail/${productId}
    sleep    1s

Change product quantity in cart
    [Arguments]    ${productId}    ${quantity}
    Select From List By Label    id:toyQuantity${productId}    ${quantity}
    sleep    1s