Feature: The Google

  I want to open RugbeReady page

  Scenario: Opening the RugbeReady landing page
    Given I open Rugby page
    #Then I see "Rugby" in the title  (not implemented)
    #Then the page contains an element with this text 'Ajouter une équipe'
    Then the page contains a button with this text 'Ajouter une équipe'