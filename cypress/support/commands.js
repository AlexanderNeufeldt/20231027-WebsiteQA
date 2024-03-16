/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('EmailTest1' , () => {

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

//cy.get('*[class^="field-error"]').should('contain', 'Email addresses should follow the format user@domain.com')  
      /*checks error msg is correct. currently found a bug that the pop up error doesn't come up if you try again on multiple pages multiple
      times in a session */

cy.get('form-submission-text').should('not.exist') //tries to find sign up message, SHOULD NOT have thank you message

})















// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }