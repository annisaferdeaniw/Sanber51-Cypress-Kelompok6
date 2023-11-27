describe('create account', () => {
    it('visit register page', () => {
      cy.visit('')
  
      cy.contains('Create an Account').click()
      cy.get('.base').should('have.text', 'Create New Customer Account')
      })

    it('create account with all fields blank', () => {
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('div.primary > .action > span').click({ multiple: true, force:true })
        cy.get('div#firstname-error.mage-error').contains('This is a required field.').should('be.visible')
      })

    it('create account with invalid email format', () => {
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type('marley@bob')
        cy.get('#password').type('Password12345')
        cy.get('#password-confirmation').type('Password12345')
        cy.get('div.primary > .action > span').click({ multiple: true, force:true })
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
      })

      it('register with a password input of less than 8 characters', () => {
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type('test@gmail.com')
        cy.get('#password').type('1234567')
        cy.get('#password-confirmation').type('1234567')
        cy.get('div.primary > .action > span').click({ multiple: true, force:true })
        cy.contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored').should('be.visible')
      })

      it('register with a password input of more than 8 numeric characters, all without the alphabet', () => {
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type('test@gmail.com')
        cy.get('#password').type('12345678910')
        cy.get('#password-confirmation').type('12345678910')
        cy.get('div.primary > .action > span').click({ multiple: true, force:true })
        cy.contains('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters').should('be.visible')
      })

      it('Verify that you have entered the account profile page', () => {
        function randomEmail(){
          const randomString = Math.random().toString(36).substring(2, 10)
          const email = randomString+"@gmail.com"
          return email
        }
      
        let useremail = randomEmail()
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type(useremail)
        cy.get('#password').type('Sanber123456')
        cy.get('#password-confirmation').type('Sanber123456')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.block-dashboard-info > .block-title > strong').contains('Account Information').should('be.visible')
      })

      it('register with a password input of more than 8 alphabet characters, all without numbers', () => {
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type('test@gmail.com')
        cy.get('#password').type('alfabetpasword')
        cy.get('#password-confirmation').type('alfabetpasword')
        cy.get('div.primary > .action > span').click({ multiple: true, force:true })
        cy.contains('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters').should('be.visible')
      })

      it('Register with valid email and password', () => {
        function randomEmail(){
          const randomString = Math.random().toString(36).substring(2, 10)
          const email = randomString+"@gmail.com"
          return email
        }
      
        let useremail = randomEmail()
        cy.bypass()
        cy.visit('/customer/account/create/')
    
        cy.get('#firstname').type('bob')
        cy.get('#lastname').type('marley')
        cy.get('#email_address').type(useremail)
        cy.get('#password').type('Sanber123456')
        cy.get('#password-confirmation').type('Sanber123456')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div').contains('Thank you for registering with Main Website Store.').should('be.visible')
      })
})