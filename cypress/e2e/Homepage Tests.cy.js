describe('TESTS', ()=> {

  it('VISIT HOMEPAGE', () => {
    cy.visit('https://www.drawntogetherapp.com/')
    cy.url().should('eq', 'https://www.drawntogetherapp.com/')

    cy.wait(1000)
      
    cy.EmailTest1() //see commands, runs email sign up test

  })

  it("CLICK FEATURED ARTISTS BTN", () => {   //click Featured Artists btn
    cy.visit('https://www.drawntogetherapp.com/')


    cy.get('*[class^="header-nav"]').eq(0)  //find Featured Artists btn
      .click()  
    cy.url().should('eq', 'https://www.drawntogetherapp.com/featured-artists')  // check btn takes to right page
    cy.get('h2').should('contain', 'Featured Artists')  // this is checking the text at the top of the page

    cy.wait(1000)
          
    cy.EmailTest1() //see commands, runs email sign up test
   })


  it("CLICK APL STORE BTN", () => {   //click apple store btn
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="fluidImageOverlay"]').eq(0)  //find apple store btn
      .click()  
      cy.origin("https://apps.apple.com/ca/app/drawntogether/id1616768845", () => {  //need to use origin to access different websites
        cy.url().should('eq', 'https://apps.apple.com/ca/app/drawntogether/id1616768845')  // check btn takes to right page
          })
          
   })

  it("CLICK GOOGLE STORE BTN", () => {   //click google store btn
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="fluidImageOverlay"]').eq(1)  //find google store btn
      .click()  
      cy.origin("https://play.google.com/store/apps", () => {  //need to use origin to access different websites
        cy.url().should('eq', 'https://play.google.com/store/apps/details?id=com.popsandbox.drawntogether')  // check btn takes to right page
          })
   })




  it("VISIT FAQS BTN", () => {   //click FAQs btn//
    cy.visit('https://www.drawntogetherapp.com/')

    cy.wait(1000)

    cy.get('*[class^="header-nav"]').eq(5)  //find FAQs btn, should be similar to featured artists
      .click()  
    cy.url().should('eq', 'https://www.drawntogetherapp.com/faqs')  // check btn takes to right page
    cy.get('h1').should('contain', 'Frequently Asked Questions')  // checks text is correct

    cy.get('*[class^="accordion-icon-container"]').eq(0)  //find first drop down button
    .click()  
    cy.get('#dropdown-block-yui_3_17_2_1_1668455988599_19723-0 > .accordion-item__description > p') // finds thedropdown text
      .should('contain', 'App Store: https://apps.apple.com/ca/app/drawntogether/id1616768845')  // checks text is correct   
          
    cy.get('*[class^="accordion-icon-container"]').eq(1).click()  //find second drop down button
    cy.get('#dropdown-block-yui_3_17_2_1_1668455988599_19723-1 > .accordion-item__description > p') // finds thedropdown text
      .should('contain', 'got a playlist of tutorial videos available')  // checks text is correct   

    cy.get('*[class^="accordion-icon-container"]').eq(9).click()  //find ninth drop down button. 1st point of Terms of Use
    cy.get('#dropdown-block-1564f67ff20f6db3516f-0 > .accordion-item__description > p') // finds thedrown down text
      .should('contain', 'please read our Terms of Use.')  // checks text is correct   

    cy.get('*[class^="accordion-icon-container"]').eq(12).click()  //find ninth drop down button. 1st point of Terms of Use
    cy.get('#dropdown-block-2d0a4f6e6f4f2f5155b3-0 > .accordion-item__description > p') // finds the dropdown text
      .should('contain', 'DrawnTogether is made by Pop Sandbox Productions and supported by the Canada Media Fund. ')  // checks text is correct   
    
    cy.EmailTest1() //see commands, runs email sign up test

       })
    

       
  it("VISIT CONTACT US", () => {   //click FAQs btn//
    cy.visit('https://www.drawntogetherapp.com/')

    cy.wait(1000)

    cy.get('*[class^="header-nav"]').eq(6)  //find ContactUs btn, should be similar to featured artists
      .click()  
    cy.url().should('eq', 'https://www.drawntogetherapp.com/contact-us')  // check btn takes to right page
    cy.get('h2').should('contain', 'Contact us.')  // checks text is correct

    cy.get('*[class^="newsletter-form-field-element field-element"]')   //find email sign up field
      .type("Test123")  //type test text in field

    cy.get('*[class^="newsletter-form-button"]').eq(0)   //find email sign up field
      .click()     
  

  })

  it("CLICK PopSandboxProductions BTN", () => {   //click PopSandboxProductions btn
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="fluidImageOverlay"]').eq(2)  //find PopSandboxProductions btn
      .click()  
      cy.origin("https://www.popsandbox.com/", () => {  //need to use origin to access different websites
        cy.url().should('eq', 'https://www.popsandbox.com/')  // check btn takes to right page
          })
          
   })

   it("CLICK CanadaMediaFund BTN", () => {   //click CanadaMediaFund btn
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="fluidImageOverlay"]').eq(4)  //find CanadaMediaFund  btn
      .click()  
      cy.origin("https://cmf-fmc.ca/", () => {  //need to use origin to access different websites
        cy.url().should('eq', 'https://cmf-fmc.ca/')  // check btn takes to right page
          })
          
   })









   })  
