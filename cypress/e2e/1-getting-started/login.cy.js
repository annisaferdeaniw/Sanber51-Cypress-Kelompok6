describe('Verify login magentosoftwaretesting', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://magento.softwaretestingboard.com/')
    })
})

describe('Verify login page', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    })
  
    it('displays login prompt', () => {
      cy.get('.base').first().should('have.text', 'Customer Login')
      cy.get('#email').type('muhammad.alfiannur@gmail.com')
      cy.get('#pass').type('wrongpass')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        
      // Add assertions for failed login
    cy.get('.message-error > div').should('be.visible')
    cy.get('.message-error > div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
})