describe('Product View', function() {

  it('opens scanner page', function() {
    cy.visit('/#/scanner/3068320115245')
  })

  it('contains bad item feedback', function() {
    cy.get('[data-cy=negative-item]')

    cy.get('[data-cy=feedback-content]')
      .contains('Nah...')
  })

  it('contains more info button', function() {
    cy.get('[data-cy=feedback-more-info-button]')
  })

  it('contains scan again button', function() {
    cy.get('[data-cy=feedback-scan-again-button]')
  })

  it('opens more info view', function() {
    cy.get('[data-cy=feedback-more-info-button]')
      .click()

    cy.contains('Evian Wasser')
    cy.contains('Brand:')
    cy.contains('Evian')
  })

  it('closes more info view', function() {
    cy.get('[data-cy=info-close-button]')
      .click()
  })

  it('clicks on scan again', function() {
    cy.get('[data-cy=feedback-scan-again-button]')
      .click()
  })

  it('clicks on info scan again', function() {
    cy.visit('/#/scanner/3068320115245')

    cy.get('[data-cy=feedback-more-info-button]')
      .click()

    cy.get('[data-cy=info-scan-again-button]')
      .click()
  })
})
