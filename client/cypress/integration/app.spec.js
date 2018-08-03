const localUrl = 'http://localhost:3000';
describe('App', () => {
    it('renders properly', function() {
        cy.visit(localUrl);
        cy.contains('1');
        cy.contains('3');
        cy.contains('9');
        cy.contains('0');
        cy.get('button#submit-button');
        cy.get('button#delete-button');
        cy.get('input.number-input');
    });

    it('updates input value after clicking on buttons', function() {
        cy.visit(localUrl);
        cy.contains('2').click();
        cy.contains('4').click();
        cy.contains('6').click();
        cy.get('input.number-input').should('have.value', '246');
    });

    it('checks if delete button is working properly', function() {
        cy.visit(localUrl);
        cy.contains('7').click();
        cy.contains('8').click();
        cy.get('button#delete-button').click();
        cy.get('input.number-input').should('have.value', '7');
    });

    it('checks if submit button is working properly', function() {
        cy.visit(localUrl);
        cy.contains('2').click();
        cy.get('button#submit-button').click();
        cy.get('span.word').contains('a');
        cy.get('span.word').contains('c');

        cy.contains('8').click();
        cy.get('button#submit-button').click();
        cy.get('span.word').contains('at');
        cy.get('span.word').contains('cv');
    });

    it('checks if clear button is working properly', function() {
        cy.visit(localUrl);
        cy.contains('5').click();
        cy.contains('6').click();
        cy.contains('2').click();
        cy
            .get('button#submit-button')
            .click()
            .then(() => {
                cy.get('span.word').contains('job');
                cy.get('button.clear-button').click();
                cy.get('span.word').should('not.exist');
            });
    });

    it('checks if real words filter is working properly', function() {
        cy.visit(localUrl);
        cy.contains('5').click();
        cy.contains('4').click();
        cy.contains('9').click();
        cy.contains('4').click();
        cy
            .get('button#submit-button')
            .click()
            .then(() => {
                cy.get('input[type="checkbox"]').click();
                cy.get('span.word').contains('kiwi');
            });
    });
});
