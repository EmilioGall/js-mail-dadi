# MailChecker

## Text of the exercise
Mail :email:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Solution

### DATA COLLECTION

- [x] Define constant for submit button.

- [x] Define constant for cancel button.

- [x] Define array of validEmails.

### LOGICAL EXECUTION

- **EVENT - Click** - Submit button

    - [x] Define constant for value of userEmail.

    - [x] Define flag variable false for the cycle.

    - **FOR** - all the elements in the validEmails Array.
    
        - [x] Define const for value of single element.

        - **IF** value of inputEmail is identical to value of validEmails element.

        - [x] Define flag variable true.

        ##### OUTPUT

        - **IF** flag variable is false.

            - [x] Print a message of error.

        - **ELSE IF** flag variable is true.

            - [x] Print a message of validation.   

        - [x] Remove class "hidden" from the alert window.

_
- **EVENT - Click** - Cancel button

    - [x] Set content of input text to empty.

    - [x] Define flag variable false for the cycle.

    - [x] Add class "hidden" from the alert window.
