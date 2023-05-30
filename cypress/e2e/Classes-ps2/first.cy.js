/// <reference types="cypress" />
import searchfraz from './../../fixtures/frazy.json'
beforeEach('Setup', () => {
    cy.visit('/')
    cy.url().should('contain', 'google')
    //cy.url().should('equal', 'https://www.google')
})
describe('Test of Cookie pop-up google', () => {
    it('Confirm pop-up', () => {
        cy.get('#L2AGLb > .QS5gu').should('be.visible')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#L2AGLb > .QS5gu').should('not.be.visible')
    })

    it('Decline pop-up', () => {

        cy.get('#W0wltc > .QS5gu').should('be.visible')
        cy.get('#W0wltc > .QS5gu').click()
        cy.get('#W0wltc > .QS5gu').should('not.be.visible')
    })

    it('More information', () => {
        cy.get('.eOjPIe').click()
        cy.url().should('contain', 'https://consent.google.com/')
    })
})
describe.only('Searches', () => {
    it.skip('Search in google with {enter}', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza).type('{enter}')
        cy.url().should('contain', '?q='+searchfraz[0].fraza)
    })
    it('Search in google with click on search in google', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza)
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.url().should('contain', '?q='+searchfraz[0].fraza)
    })
    it('Search in google with click on sugestion unique selector', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza)
        cy.get(':nth-child(1) > .eIPGRd > .pcTkSc').click()
        cy.url().should('contain', '?q='+searchfraz[0].fraza)
    })

    it('Search in google with click on sugestion programability eq', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza).wait(1000)
        cy.get('.wM6W7d').eq(0).click()
        cy.url().should('contain','?q='+searchfraz[0].fraza);
    })

    it('Search in google with click on sugestion programability children', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza).wait(1000)
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain','?q='+searchfraz[0].fraza)
    })

    it.only('Search in google and go to Wikipedia page', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type(searchfraz[0].fraza).wait(1000)
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain','?q='+searchfraz[0].querylower)
        cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click()
        cy.origin('https://www.wikipedia.org', ()=>{
            cy.fixture('frazy').then(frazy=>{
                cy.url().should('contain',frazy[0].urllower)
            })
            
        })
        //cy.url().should('contain','wikipedia.org')
        cy.log();
    })
})



