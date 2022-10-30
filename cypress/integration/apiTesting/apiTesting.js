import {Given, Then , And, When} from "cypress-cucumber-preprocessor/steps"
const ISO6391 = require('iso-639-1')

var listOfSessionLanguages = [];
var listOfDocumentCountries = [];
var listOfDocumentTypes = [];
var randomLanguage;
var expectedRandomLanguageCode;
var actualPageLanguageCode
var randomDocumentCountries;
var randomDocumentType;

before(() => {
  cy.visit('/')
  cy.FetchAllSessionLanguages(listOfSessionLanguages)
  cy.FetchAllDocumentCountries(listOfDocumentCountries)
  // console.log(randomLanguage)
  // 
  
})


When('Random values are posted to the API endpoint', () => {
  randomDocumentCountries = listOfDocumentCountries[Math.floor(Math.random() * listOfDocumentCountries.length)];
  randomDocumentType = listOfDocumentTypes[Math.floor(Math.random() * listOfDocumentTypes.length)];
  randomLanguage = listOfSessionLanguages[Math.floor(Math.random() * listOfSessionLanguages.length)];
  console.log(randomLanguage)
  expectedRandomLanguageCode = ISO6391.getCode(randomLanguage);
  console.log(expectedRandomLanguageCode)

    cy.request({
        method: 'POST', 
        url: 'https://demo.saas-3.veriff.me/',
        failOnStatusCode: false, 
        body: {
            full_name: " ",
            additionalData: {isTest: false},
            document_country: randomDocumentCountries,
            document_type: randomDocumentType,
            lang:expectedRandomLanguageCode
        }
      }).as('random_positive_case')
})

Then('request is sent successfully',() => {
    cy.get('@random_positive_case').should((response)=> {
      expect(response.status).to.eq(200);
    })
  });

When('Negative case with incorrect URL', () => {
    cy.request({
        method: 'POST', 
        url: 'https://demo.saas-3.veriff.me/566123adasdzadsadsad',
        failOnStatusCode: false, 
        body: {
            full_name: " ",
            additionalData: {isTest: false},
            document_country: randomDocumentCountries,
            document_type: randomDocumentType,
            lang:expectedRandomLanguageCode
        }
      }).as('invalid_url_case')
})

Then('not found error is returned',() => {
    cy.get('@invalid_url_case').should((response)=> {
      expect(response.status).to.eq(404);
    })
  });

When('Positive case with empty parameters', () => {
    cy.request({
        method: 'POST', 
        url: 'https://demo.saas-3.veriff.me/',
        failOnStatusCode: false, 
        body: {
            full_name: " ",
            additionalData: {isTest: false},
            document_country: "",
            document_type: "",
            lang:""
        }
      }).as('positive_with_empty_parameters')
})

Then('this request is sent successfully',() => {
    cy.get('@positive_with_empty_parameters').should((response)=> {
      expect(response.status).to.eq(200);
    })
  });