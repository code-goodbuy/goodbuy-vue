describe('Intro View', function() {

  it('opens intro page', function() {
    cy.visit('/#/')
  })

  it('contains headbar', function() {
    cy.get('[data-cy=intro-header-bar]').contains('goodbuy')
  })

  it('contains intro paragraphs', function() {
    cy.get('[data-cy=intro-content]').contains('Who are we?')
    cy.get('[data-cy=intro-content]').contains('Our mission')
  })

  it('toggles text block on click', function() {
    cy.get('[data-cy=intro-content]')
      .get('[data-cy=intro-content-text-1]')
      .click()

    cy.get('[data-cy=intro-content]')
      .get('[data-cy=intro-content-text-2]')
      .click()

    cy.get('[data-cy=intro-content]')
      .get('.content-container--toggle')
      .should('not.exist')
  })

  it('contains scan button', function() {
    cy.get('[data-cy=intro-button-scan]').contains('Scan an item')
  })

  it('redirects to scanner', function() {
    cy.get('[data-cy=intro-button-scan]')
      .contains('Scan an item')
      .click()
  })
})
