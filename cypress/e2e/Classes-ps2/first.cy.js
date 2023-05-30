/// <reference types="cypress" />
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
        cy.get('#APjFqb').clear().type('Wikipedia').type('{enter}')
        cy.url().should('contain', '?q=Wikipedia')
    })
    it('Search in google with click on search in google', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type('Wikipedia')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.url().should('contain', '?q=Wikipedia')
    })
    it('Search in google with click on sugestion unique selector', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type('Wikipedia')
        cy.get(':nth-child(1) > .eIPGRd > .pcTkSc').click()
        cy.url().should('contain', '?q=wikipedia')
    })

    it('Search in google with click on sugestion programability eq', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type('Wikipedia').wait(1000)
        cy.get('.wM6W7d').eq(0).click()
        cy.url().should('contain','?q=wikipedia');
    })

    it('Search in google with click on sugestion programability children', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type('Wikipedia').wait(1000)
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain','?q=wikipedia')
    })

    it.only('Search in google and go to Wikipedia page', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').clear().type('Wikipedia').wait(1000)
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain','?q=wikipedia')
        cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click()
        cy.origin('https://www.wikipedia.org', ()=>{
            cy.url().should('contain','wikipedia.org')
        })
        //cy.url().should('contain','wikipedia.org')
        cy.log();
    })
})



