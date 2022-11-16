#Author: your.email@your.domain.com
Feature: Mobile

  Background: 
    Given user to login

  Scenario: Mobile Purchase
    When user mobile search
    And user select the mobile
    And user select add to card
    And user checks the card
    Then user verify that selected mobile is correct
   
   
    
    @smoke
     Scenario: Mobile Purchase
    When user mobile search by using one d list
    |samsung mobiles|redmi mobiles|vivo mobiles|
    And user select the mobile by using one d list
    |SAMSUNG|REDMI|VIVO|
    And user select add to card
    And user checks the card
    Then user verify that selected mobile is correct
    
    
    Scenario: Mobile Purchase
    When user mobile search by using one d map
    |phone1|samsung mobiles|
    |phone2|redmi mobiles|
    |phone3|vivo mobiles|
    And user select the mobile by using one d map
    |PHONE1|SAMSUNG|
    |PHONE2|REDMI|
    |PHONE3|vivo|
    And user select add to card
    And user checks the card
    Then user verify that selected mobile is correct
    
    @smoke
    Scenario Outline: Mobile Purchase
    When user mobile search "<phone>"
    And user select the mobile "<phone name>"
    And user select add to card
    And user checks the card
    Then user verify that selected mobile is correct
    
    Examples:
    |    phone      |phone name|
    |samsung mobiles|  SAMSUNG |
    | redmi mobiles |  REDMI   |
    | vivo mobiles  |  vivo   |
    