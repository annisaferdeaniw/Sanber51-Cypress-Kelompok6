describe('create account', () => {
    it('visit register page', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
  
      cy.contains('Create an Account').click()
      cy.get('.base').should('have.text', 'Create New Customer Account')
    })
    it('create account with all fields blank', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    
        cy.get('div.primary > .action > span').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
        cy.get('#email_address-error').should('have.text', 'This is a required field.')
        cy.get('#password-error').should('have.text', 'This is a required field.')
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
      })
      it('create account with invalid email format', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type('marley@bob')
        cy.get('#password').type('Password12345')
        cy.get('#password-confirmation').type('Password12345')
        cy.get('div.primary > .action > span').click()
        cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
      })
})