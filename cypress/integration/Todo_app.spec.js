describe('Todo App', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('page opens', function() {
    cy.contains('ToDo App')
  })

  it('clicking incomplete button works', function() {
    cy.contains('Incomplete').click()
    cy.contains('Complete')
  })

  it('clicking remove button works', function(){
    cy.contains('Remove from list').click()
    cy.get('html').should('not.contain', 'Go to the supermarket')
  })

  it('new todo can be added', function(){
    cy.get('input').type('Write beautiful code')
    cy.contains('Submit').click()
    cy.contains('Write beautiful code')
  })
})