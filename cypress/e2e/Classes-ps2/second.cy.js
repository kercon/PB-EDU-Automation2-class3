/// <reference types="cypress" />

it('second test', function () {
    cy.visit('https://www.wp.pl')
    cy.url().should('contain', 'wp')
    cy.url().should('equal', 'https://www.wp.pl/')

})

it('tres test', function () {
    cy.visit('https://www.yahoo.com')
    cy.url().should('contain', 'yahoo')
    cy.url().should('contain', 'https://consent.yahoo.com/')
})

it('quad test', function () {
    cy.visit('https://www.cypress.io')
    cy.url().should('contain', 'cypress')
})