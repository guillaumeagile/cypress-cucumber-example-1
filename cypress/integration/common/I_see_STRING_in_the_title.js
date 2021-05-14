import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then("the page contains an element with this text {string}", (text) => {
  cy.contains(text);
});
Then("the page contains a button with this text {string}", (text) => {
  //  .v-btn__content.contains(text);
  cy.get('.justify-start > .v-btn > .v-btn__content').contains(text)
});

Given(`I open Rugby page`, () => {
  cy.visit("https://rugbeready.fr/");
});
