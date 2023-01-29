class commomObjects{
   selectAndNavigateToTextBox(){
      cy.get('#item-0').filter(':visible').click()
      cy.url().should('include', '/text-box')
   } 

   selectAndNavigateToCheckBox(){
      cy.get('#item-1').filter(':visible').click()
      cy.url().should('include', '/checkbox')
   }
}
module.exports = new commomObjects();