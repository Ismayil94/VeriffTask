Feature: API Verifications

    Scenario: Positive case with random parameters
        When Random values are posted to the API endpoint
        Then request is sent successfully

    Scenario: Negative case with incorrect URL
        When Negative case with incorrect URL
        Then not found error is returned

    Scenario: Positive case with empty parameters
        When Positive case with empty parameters
        Then this request is sent successfully
