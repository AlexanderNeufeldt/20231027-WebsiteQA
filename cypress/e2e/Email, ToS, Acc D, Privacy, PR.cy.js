describe('EMAIL SIGN UP FORM', () => {

  it('VISIT HOMEPAGE', () => {
    cy.visit('https://www.drawntogetherapp.com/')
    cy.url().should('eq', 'https://www.drawntogetherapp.com/')
  })


   it("EMAIL t1", () => {    //submit incorrect email in sign up form
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="newsletter-form-field-element field-element"]')   //find email sign up field
      .type("Test123")  //type test text in field
    cy.get('*[class^="newsletter-form-button"]').eq(0)   //find email sign up field
      .click()      

    cy.get('*[class^="newsletter-form-field-element field-element"]')   //find email sign up field
      .type("@")  //type test text in field
    cy.get('*[class^="newsletter-form-button"]').eq(0)   //find email sign up field
      .click()  

    cy.get('*[class^="newsletter-form-field-element field-element"]')   //find email sign up field
      .type(".com")  //type test text in field
    cy.get('*[class^="newsletter-form-button"]').eq(0)   //find email sign up field
      .click()  

    cy.get('*[class^="field-error"]').should('contain', 'Email addresses should follow the format user@domain.com')  
        //checks error msg is correct

   })


   it("Terms Of Service", () => {   
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('.sqs-html-content > :nth-child(1) > a')  // finds TOS btn
    .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
    .click()

    cy.url().should('contain', '/terms-of-use')  // check btn takes to right page
    cy.get(':nth-child(4) > strong').should('contain', 'Acceptance of Terms of Use') //checks first header is correct
  })

  it("Privacy Policy", () => {   
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('.sqs-html-content > :nth-child(2) > a') //finds the privacy policy button
    .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
    .click()

    cy.url().should('contain', 'https://www.drawntogetherapp.com/privacy-policy')  // check btn takes to right page
    cy.get(':nth-child(5) > strong').should('contain', 'WHAT PERSONAL INFORMATION DO WE COLLECT?') //check 2nd header has right text
  })

  it("Account Deletion", () => {   
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('.sqs-html-content > :nth-child(3) > a') //finds the account deletion button
    .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
    .click()

    cy.url().should('contain', 'https://www.drawntogetherapp.com/account-deletion')  // check btn takes to right page   
    cy.get('h2').should('contain', 'How to delete your DrawnTogether account') // checks header text is correct
    cy.get('#email-yui_3_17_2_1_1698263788797_8559-field').should('exist')  //check email field exists
    cy.get('.button').should('exist') // check submit btn exists
  })

/*  it.only("Press Release", () => {   
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('.sqs-html-content > :nth-child(4) > a') //finds the Press Release button
    .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
    .click()

    cy.url().should('contain', 'https://static1.squarespace.com/static/628f6cb0ed0a82429ccb9f53/t/6597103123406a0a8df52884/1704398897459/DT+Press+Release.pdf')  // check btn takes to right page   
  })  
*/












})