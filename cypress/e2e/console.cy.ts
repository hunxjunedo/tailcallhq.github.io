describe("console checker", () => {
  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("should not have console errors and warnings", () => {
    cy.window().then(() => {
      const consoleErrors = Cypress.env("consoleErrors") || []
      expect(consoleErrors).to.be.empty // Ensure no console errors were logged
    })
  })
})
