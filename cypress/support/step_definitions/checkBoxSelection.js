import { Given, When, Then} from"@badeball/cypress-cucumber-preprocessor/lib/methods";

const url = "https://demoqa.com/elements";

Given('User is navigated to check box',()=>{
    cy.visit(url)
    cy.get('#item-1').filter(':visible').click()
    cy.url().should('include', '/checkbox')
});

When('user clicks the checkbox', ()=>{
    cy.get('.rct-node-icon').click()
});

Then('verify output message',()=>{
    cy.get('#result').should('be.visible')
});

Then('verify output message disappears',()=>{
    cy.get('#result').should('not.exist')
});