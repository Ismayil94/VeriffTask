import {Given, Then , And, When} from "cypress-cucumber-preprocessor/steps"
// import {FetchAllDocumentCountries, FetchAllSessionLanguages} from "../utils/fetchScripts"
var fetchScripts = require('../utils/fetchScripts')

let listOfSessionLanguages = []
let listOfDocumentCountries = []

function FetchAllSessionLanguages() {
    cy.contains('Select a language').click()
    cy.get('li > span').each( item => {
        listOfSessionLanguages.push(item.text())
    })
}
function FetchAllDocumentCountries() {
    cy.get('input[name="documentCountry"]').click()
    cy.get('li > span').each( item => {
        listOfDocumentCountries.push(item.text())  
    })
}

before(() => {
    cy.visit('/')
    fetchScripts.FetchAllSessionLanguages()
    fetchScripts.FetchAllDocumentCountries()
})


Given('A user opens login page', () => {
    cy.visit('/')
})

Then('A user will get website', () => {
    cy.log(listOfSessionLanguages)
    cy.log(listOfDocumentCountries)
    expect(false).to.equal(false)
})

Then('A user selects the random language', () => {
    randomLanguage =listOfSessionLanguages[Math.floor(Math.random() * listOfSessionLanguages.length)];
    cy.log(randomLanguage);

    randomDocumentCountries = listOfDocumentCountries[Math.floor(Math.random() * listOfDocumentCountries.length)];
    cy.log(randomDocumentCountries);

    randomDocumentType = listOfDocumentTypes[listOfDocumentTypes[Math.floor(Math.random() * listOfDocumentCountries.length)]];
    cy.log(randomDocumentType);

})