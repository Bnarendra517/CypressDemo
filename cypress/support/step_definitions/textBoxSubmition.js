import { Given, When, Then} from"@badeball/cypress-cucumber-preprocessor/lib/methods";

const url = "https://demoqa.com/elements";

beforeEach(() => {
    cy.visit(url)
});

Given('User navigated to Textbox', () => {
    cy.get('#item-0').filter(':visible').click();
    cy.url().should('include', '/text-box')
});

When('User enters the details in the text box',()=>{
    cy.get('#userName').type('Deepika');
    cy.get('#userEmail').type('test@gmail.com');
    cy.get('#currentAddress').type('TestAddress')
});

When('Click on Submit button',()=>{
    cy.get('#submit').click()
});

Then('Verify the output',()=>{
    cy.get('#output > div > .mb-1').should(($lis) => {
        expect($lis).to.have.length(3)
        expect($lis.eq(0)).to.contain('Deepika')
        expect($lis.eq(1)).to.contain('test@gmail.com')
        expect($lis.eq(2)).to.contain('TestAddress')
      })
})

When('User enters details with invalid email id',()=>{
    cy.get('#userName').type('Deepika');
    cy.get('#userEmail').type('invalid');
    cy.get('#currentAddress').type('TestAddress')
});

Then('Verify invalid email error message',()=>{
    cy.get('.field-error').should('be.visible');
});

When('User enters name {word}, email {string} and message {string}',(name, email, message) =>{
    cy.get('#userName').type(name);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(message)
})

Then('Verify the submition message',()=>{
   // cy.xpath('//*[contains(@class, "field-error")] | (//*[@id="name"] & //*[@id="email"] & //*[@id="currentAddress"])').should('be.visible');

   cy.get('#output > div > .mb-1 , .field-error').should('be.visible');
})