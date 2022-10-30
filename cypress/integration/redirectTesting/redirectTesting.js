import {Given, Then , And, When} from "cypress-cucumber-preprocessor/steps"
const ISO6391 = require('iso-639-1');

let listOfSessionLanguages = []
let listOfDocumentCountries = []
let listOfDocumentTypes = []
let randomLanguage
let expectedRandomLanguageCode
let actualPageLanguageCode
let randomDocumentCountries
let randomDocumentType
let redirectDomain = 'magic.saas-3'


Given('Session Languages, Countries and Document Types are fetched', () => {
    cy.visit('/')
    cy.FetchAllSessionLanguages(listOfSessionLanguages)
    cy.FetchAllDocumentCountries(listOfDocumentCountries)
    cy.FetchAllDocumentTypes(listOfDocumentTypes)
})

Then('verify all languages, document countries and document types exist', () => {
    expect(listOfSessionLanguages.length).to.be.greaterThan(0)
    expect(listOfDocumentCountries.length).to.be.greaterThan(0)
    expect(listOfDocumentTypes.length).to.be.greaterThan(0)
})

When('A user selects the random language', () => {
    randomLanguage =listOfSessionLanguages[Math.floor(Math.random() * listOfSessionLanguages.length)];
    cy.log(randomLanguage)
    cy.contains('Select a language').click({force: true})
    cy.contains(randomLanguage).click({force: true})
})

Then('A user selects the random Document Country', () => {
    randomDocumentCountries = listOfDocumentCountries[Math.floor(Math.random() * listOfDocumentCountries.length)];
    cy.log(randomDocumentCountries)
    cy.get('input[name="documentCountry"]').click({force: true})
    cy.contains(randomDocumentCountries).click({force: true})
})

And('A user selects the random Document Type', () => {
    randomDocumentType = listOfDocumentTypes[Math.floor(Math.random() * listOfDocumentTypes.length)];
    cy.log(randomDocumentType)
    cy.contains('Select a document').click({force: true})
    cy.contains(randomDocumentType).click({force: true})
})

Then('User selects Redirect Testing',()=> {
    cy.contains('Redirect').click({force: true})
})

And('Click on Veriff Me',()=>{
    cy.contains('Veriff Me').click({force: true})  
})

Then('Verify that redirect link and page language are correct', () =>{
    cy.url().should('contain', redirectDomain)
    expectedRandomLanguageCode = ISO6391.getCode(randomLanguage)
    cy.get('html').invoke('attr','lang').should('contain',expectedRandomLanguageCode)
})