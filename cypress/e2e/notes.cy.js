/// <reference types="cypress" />


context('Notes validations', () => {

    before(() => {
        cy.visit('/')
    });

    it('App renders without error', () => {
        cy.get('h2').should('be.visible').and('have.text', 'QA Automation Cypress Test')
        cy.get('#text-input').should('be.visible')
        cy.get('button').contains('Submit').should('be.visible')
    });

    it('Empty notes list', () => {
        cy.get('.list-container').its('length').should('eq', 1)  
    });

    it('Add note', () => {
        cy.get('#text-input').type('Testing note')
        cy.get('button').contains('Submit').click()
        cy.get('.note-container').should('exist')
        cy.get('li').should('be.visible').and('contain', 'Testing note')
    });

    it('Delete note', () => {
        cy.get('button').contains('Delete').should('be.visible').click()
        cy.get('.note-container').should('not.exist')
        cy.get('li').should('not.exist')
    });

});