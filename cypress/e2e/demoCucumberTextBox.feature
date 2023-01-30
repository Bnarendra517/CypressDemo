Feature: Perform actions on textbox

    Scenario: Enter details in the text box and submit them
        Given User navigated to Textbox
        When User enters the details in the text box
        And Click on Submit button
        Then Verify the output

    Scenario: Enter invalid email id and verify error
        Given User navigated to Textbox
        When User enters details with invalid email id
        And Click on Submit button
        Then Verify invalid email error message

    Scenario Outline: Enter valid and invalid details in textboxes and verify output
        Given User navigated to Textbox
        When User enters name <name>, email '<email>' and message '<message>'
        And Click on Submit button
        Then Verify the submition message

        Examples:
            | name | email          | message |
            | Isha | test@gmail.com | Hello   |
            | Test | invalid        | World   |