*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
Shopping toyrnotus
    Open Browser    http://localhost:8081/web/      gc
    Wait Until Page Contains Element    id:ageSelect
    Select From List By Label    id:ageSelect    3_to_5
    Wait Until Page Contains Element    id:genderSelect
    Select From List By Label    id:genderSelect    Female
    Click Button    id:searchButton
    sleep    5s
    Page Should Contain    43 Piece dinner Set
Check product detail
    Click Element    id:toy-row-2
    #Close Browser