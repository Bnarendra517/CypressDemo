Feature: Perform actions on check box

    Scenario: Navigate to Checkbox page and select the check box
    Given User is navigated to check box
    When user clicks the checkbox
    Then verify output message

    Scenario: Unselect the check box and verify message disappears
     Given User is navigated to check box
    When user clicks the checkbox
    When user clicks the checkbox
    Then verify output message disappears