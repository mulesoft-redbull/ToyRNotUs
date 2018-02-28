*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
Shopping toyrnotus
    Open Browser    http://188.166.213.123:8081/web/      gc
    Wait Until Page Contains Element    id:ageSelect
    Select From List By Label    id:ageSelect    3_to_5
    Wait Until Page Contains Element    id:genderSelect
    Select From List By Label    id:genderSelect    Female
    Click Button    id:searchButton
    sleep    5s
    Page Should Contain    43 Piece dinner Set
    Click Element    id:toy-row-2
Check product detail
    sleep    5s
    Page Should Contain    43 Piece dinner Set
    Page Should Contain    12.95
    Page Should Contain    CoolKidz
    Page Should Contain    Female
    Click Button    id:addToCart
Change quantity
    sleep    5s
    Select From List By Label    id:cart-row-1-quantity    2
    sleep    5s
    Page Should Contain    75.90
    click Button    id:checkout
Test add shipping address
    sleep    5s
    Input Text    id=fullName    Tanet Gamchaitavonrattana
    Input Text    id=address1    54 North Sathorn
    Input Text    id=city    Bangkok
    Input Text    id=province    Bangkok
    Input Text    id=postcode    10500
    Input Text    id=tel    +66851209334
    click Button    id:deliverToThisAddress
Test Thank you page
    sleep    5s
    Page Should Contain    Thank you
    Page Should Contain    Tanet
    Page Should Contain    75.90
    Close Browser