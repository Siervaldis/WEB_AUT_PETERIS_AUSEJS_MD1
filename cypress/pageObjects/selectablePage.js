class SelectablePage {

    visit() {
        cy.visit('https://demoqa.com/selectable');
    }

    clickGrid() {
        cy.contains('Grid').click();
    }

    clickItem(text) {
        cy.contains(text).click();
    }

    validateSelected(text) {
        cy.contains(text).should('have.class', 'active');
    }

    validateNotSelected(text) {
        cy.contains(text).should('not.have.class', 'active');
    }
}

export default new SelectablePage();