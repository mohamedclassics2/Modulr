
Feature: User Verification

  @wip
  Scenario: verify valid credential login
    Given I am on Modulr homepage
    When I use valid username and password
    Then I should be able to login succesfully