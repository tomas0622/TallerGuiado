describe("Shopping Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("displays products and empty cart initially", () => {
    cy.contains("h1", "Shop");
    cy.get('[data-testid="product"]').should("have.length", 3);
    cy.get('[data-testid="cart"]').contains("Your cart is empty");
  });
  it("adds products to cart", () => {
    cy.get('[data-testid="product"] button').first().click();
    cy.get('[data-testid="cart-item"]').should("have.length", 1);
    cy.get('[data-testid="cart-item"]').first().contains("Laptop - $999");
    cy.get('[data-testid="product"] button').eq(1).click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
  });
  it("removes products from cart", () => {
    // Add two items
    cy.get('[data-testid="product"] button').first().click();
    cy.get('[data-testid="product"] button').eq(1).click();
    // Remove first item
    cy.get('[data-testid="cart-item"] button').first().click();
    cy.get('[data-testid="cart-item"]').should("have.length", 1);
    cy.get('[data-testid="cart-item"]').contains("Phone - $699");
  });
  it("calculates total correctly", () => {
    cy.get('[data-testid="product"] button').first().click();
    cy.get('[data-testid="product"] button').eq(1).click();
    cy.contains("Total: $1698");
  });
});
