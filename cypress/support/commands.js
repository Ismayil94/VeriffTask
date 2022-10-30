Cypress.Commands.add(
    'FetchAllSessionLanguages', (listOfSessionLanguages) => {
        cy.visit('/')
        cy.contains('Select a language').click()
        cy.get('li > span').each( item => {
        if (typeof item.text() === 'string'){
        listOfSessionLanguages.push(item.text())
    }})
})


Cypress.Commands.add('FetchAllDocumentCountries', (listOfDocumentCountries) => {
    cy.visit('/')
    cy.get('input[name="documentCountry"]').click()
    cy.get('li > span').each( item => {
        listOfDocumentCountries.push(item.text())
    })
})

Cypress.Commands.add('FetchAllDocumentTypes', (listOfDocumentTypes) => {
    cy.visit('/')
    cy.contains('Select a document').click()
    cy.get('li > span').each( item => {
        listOfDocumentTypes.push(item.text())
    })
})