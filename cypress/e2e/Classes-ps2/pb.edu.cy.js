/// <reference types="cypress" />
import searchfraz from './../../fixtures/frazy.json'

describe('Searches', () => {
    beforeEach('Setup', () => {
        cy.visit('/')
        cy.url().should('contain', 'google')
        cy.closePopUpB()
        cy.get('#APjFqb').as('input')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').as('searchbutton')
        cy.fixture('frazy').as('frazy')
        cy.lazy()
    })
    it.only('Search 1 politechnika bialostocka', function () {
        //cy.checkVisible()
        cy.get('@input').clear().type(this.frazy[2].fraza)
        cy.get('@searchbutton').checkVisible().click()
        cy.url().should('contain', this.frazy[2].query)

    })
    it('Search 2 politechnika bialostocka', () => {
        cy.get('@frazy').then((frazy) => {
            cy.get('@input').clear().type(frazy[2].fraza)

        })
        cy.get('@searchbutton').click()
        cy.get('@frazy').then((frazy) => {
            cy.url().should('contain', frazy[2].query)
        })
    })
    it('Search 3 politechnika bialostocka', function () {
        cy.get('@input').clear().type(searchfraz[2].fraza)
        cy.get('@searchbutton').click()
        cy.url().should('contain', searchfraz[2].query)
    })
})