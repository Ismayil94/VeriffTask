Feature: Direct Verifications

    Background:
        Given Session Languages, Countries and Document Types are fetched
        Then verify all languages, document countries and document types exist

    Scenario: Sucessful Verifications with all documents
        When A user selects the random language 
        Then A user selects the random Document Country
        And A user selects the random Document Type
        Then User selects Redirect Testing
        And Click on Veriff Me
        Then Verify that redirect link and page language are correct