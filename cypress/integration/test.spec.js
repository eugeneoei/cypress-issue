describe('Cypress API call throws URI encoding error', () => {

	it('Should successfully make API call with "%" as part of query string', () => {
		cy.visit('localhost:8080')
		cy.get('#button').click()
	})

})