Feature: Perform actions on check box

    Background: Navigate to checkbox page and select checkbox
        Given User is navigated to check box
        When user clicks the checkbox

    Scenario: Navigate to Checkbox page and select the check box
        Then verify output message

    Scenario: Unselect the check box and verify message disappears
        When user clicks the checkbox
        Then verify output message disappears