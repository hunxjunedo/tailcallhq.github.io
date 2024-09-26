import "./commands"

Cypress.on("window:before:load", (win) => {
  const pushArgs = (...args) => {
    Cypress.env("consoleErrors", [...(Cypress.env("consoleErrors") || []), args])
  }
  win.console.error = pushArgs
  win.console.warn = pushArgs
})
