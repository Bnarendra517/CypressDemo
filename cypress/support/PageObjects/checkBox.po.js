class checkBox{
    selectCheckBox(){
        cy.get('.rct-node-icon').click()
    } 

    verifyCheckBoxSelectionOutput(){
        cy.get('#result').should('be.visible')
    }

  }
  module.exports = new checkBox();