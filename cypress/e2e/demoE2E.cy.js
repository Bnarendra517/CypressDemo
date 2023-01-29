import sideNavigationBarPO from "../support/PageObjects/sideNavigationBar.po"
import textBoxPO from "../support/PageObjects/textBox.po"
import checkBoxPO from "../support/PageObjects/checkBox.po"

describe('End to End tests to verify different actions under elements', () => {
    beforeEach(() => {
        //Launch the application
      cy.visit('https://demoqa.com/elements');
    })

    describe('Actions on TextBox ', () => {
        it('Navigate to textbox and perform actions on it', () => {
      
        sideNavigationBarPO.selectAndNavigateToTextBox(); 
        textBoxPO.enterDetailsInToTextBoxes();
        textBoxPO.clickOnSubmitButton();
        textBoxPO.verifyTextBoxSubmitionOutput();
        
        });
    });

    describe('Actions on Chechbox', () => {
        it('Navigate to checkbox and perform actions on it', () => {
      
        sideNavigationBarPO.selectAndNavigateToCheckBox();
        checkBoxPO.selectCheckBox()
        checkBoxPO.verifyCheckBoxSelectionOutput();
        
        });
    });
})
