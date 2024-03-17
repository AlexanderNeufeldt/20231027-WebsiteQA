/*
describe('SOCIAL MEDIA TESTS' , () => {

    it("CLICK INSTAGRAM BTN", () => {   //click instagram store btn
        cy.visit('https://www.drawntogetherapp.com/')
    
        cy.get('*[class^="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"]').eq(0) //find insta btn
           .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
          .click()        
        //const currentUrl = window.location.href; console.log(currentUrl)  // prints URL to console. got from interwebs
    
        cy.origin("https://www.instagram.com/drawntogetherapp/", () => {  //need to use origin to access different websites
        cy.url().should('contain', 'https://www.instagram.com/drawntogetherapp/')  // check btn takes to right page
          })
        })

    it("CLICK X AKA TWITTER BTN", () => {   //click X  btn
        cy.visit('https://www.drawntogetherapp.com/')
    
        cy.get('*[class^="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"]').eq(1)   //find X btn
            .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
            .click()        
    
            cy.origin("twitter.com", () => {  //need to use origin to access different websites
            cy.url().should('contain', 'twitter.com/drawn2getherapp')  // check btn takes to right page
            }) 
    
        })	

    it("CLICK FACEBOOK BTN", () => {   //click FB btn
        cy.visit('https://www.drawntogetherapp.com/')
    
        cy.get('*[class^="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"]').eq(2)   //find FB btn
            .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
            .click()        
    
        cy.origin("https://www.facebook.com/DrawnTogetherApp", () => {  //need to use origin to access different websites
            cy.url().should('contain', 'facebook.com/DrawnTogetherApp')  // check btn takes to right page
            }) 
    
        })

    it("CLICK TIKTOK BTN", () => {   //click TT btn
    cy.visit('https://www.drawntogetherapp.com/')

    cy.get('*[class^="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"]').eq(3)   //find TT btn
      .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
      .click()        

    cy.origin("https://www.tiktok.com/@drawntogetherapp", () => {  //need to use origin to access different websites
        cy.url().should('contain', 'https://www.tiktok.com/@drawntogetherapp')  // check btn takes to right page
        }) 

    })

/*  it.only("CLICK YOUTUBE BTN", () => {   //click TT btn
      cy.visit('https://www.drawntogetherapp.com/')
  
      cy.get('*[class^="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"]').eq(4)   //find TT btn
        .invoke("removeAttr", "target")  //removes the target part of the link so it's opened in the same window
        .click()        
  
      cy.origin("youtube.com", () => {  //need to use origin to access different websites
          cy.url().should('contain', 'youtube.com/playlist?list=PL7QzKcatyMvVrfsU6njnLif5h-4K2ueQq')  // check btn takes to right page
          }) 
  
      })      */    








}) */