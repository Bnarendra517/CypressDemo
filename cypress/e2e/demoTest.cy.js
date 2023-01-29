describe('My first test', () => {
    it('Launch the demo application', () => {
      
      //Launch the application
      cy.visit('https://demoqa.com/elements')

       //Navigate to elements text box
      cy.get('#item-0').filter(':visible').click()
      cy.url().should('include', '/text-box')

      //Enter details in te text box
      cy.get('#userName').type('Deepika')
      cy.get('#userEmail').type('test@gmail.com')
      cy.get('#currentAddress').type('TestAddress')

      //Submit the details
      cy.get('#submit').click()

      //Verify output details
      cy.get('#output > div > .mb-1').should(($lis) => {
        expect($lis).to.have.length(3)
        expect($lis.eq(0)).to.contain('Deepika')
        expect($lis.eq(1)).to.contain('test@gmail.com')
        expect($lis.eq(2)).to.contain('TestAddress')
      })
      
    })

    it('Launch the demo application', () => {
      
      //Launch the application
      cy.visit('https://demoqa.com/elements')

       //Navigate to elements checkbox box
      cy.get('#item-1').filter(':visible').click()
      cy.url().should('include', '/checkbox')

      //Check the checkbox
      cy.get('.rct-node-icon').click()

      //Verify the output
      cy.get('#result').should('be.visible')
      
    })
  })