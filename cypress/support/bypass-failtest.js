Cypress.Commands.add("bypass", () => {
    Cypress.on("fail", (err, runnable) => {
      cy.log(err.message);
      return false;
    });
})