describe('Scanner View', function() {

  it('opens scanner page', function() {
    cy.visit('/#/scanner')
  })

  it('contains info button', function() {
    cy.get('[data-cy=scanner-info-button]')
  })

  it('contains info overlay', function() {
    cy.get('[data-cy=scanner-overlay]')
  })

  it('contains info banner', function() {
    cy.contains('Point you camera at a barcode')
  })
})
