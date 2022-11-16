#Author: your.email@your.domain.com
@tv
Feature: Tv

  Background: 
    Given user to login

  Scenario: Tv Purchase
    When user tv search
    And user select the tv
    And user select add to card
    
    
