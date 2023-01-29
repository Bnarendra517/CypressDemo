class textBox{
    enterDetailsInToTextBoxes(){
        cy.get('#userName').type('Deepika')
        cy.get('#userEmail').type('test@gmail.com')
        cy.get('#currentAddress').type('TestAddress')
    } 
  
    clickOnSubmitButton(){
        cy.get('#submit').click()
    }

    verifyTextBoxSubmitionOutput(){
        cy.get('#output > div > .mb-1').should(($lis) => {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Deepika')
            expect($lis.eq(1)).to.contain('test@gmail.com')
            expect($lis.eq(2)).to.contain('TestAddress')
          })
    }

  }
  module.exports = new textBox();