it("my first test", () => {
    cy.visit(`/`)

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#username');
    cy.get('[name=password]');
    cy.get('#username').clear();
    cy.get('#username').type('success+blank@simulator.amazonses.com');
    cy.get('#sign-in-password').clear();
    cy.get('#sign-in-password').type('hidden!');
    cy.get('[data-testid="btn-sign-in"]').click();
    cy.get('[data-testid="page-header-title"]').contains('My Projects (131)');
    cy.get('#Row0Button > [data-testid="ColumnnumberCell0"]').click();
    

   
   /* cy.contains('success+janaqasc@simulator.amazonses.com')*/
   /* cy.visit('/projects')

     /* ==== End Cypress Studio ==== */
})
