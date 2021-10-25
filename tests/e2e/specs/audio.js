describe('Audio Player', () => {
  it('plays audio', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.get('.composition-name:first').click();
    cy.get('#play-button').click();
    cy.wait(5000);
    cy.get('#player-play-button').click();
  });
});
