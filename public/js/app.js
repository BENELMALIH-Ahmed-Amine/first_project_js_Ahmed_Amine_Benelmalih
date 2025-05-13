// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
let enter = prompt(`
    - Signing 's'
    - Logging 'l'
    - Changing the password 'p'
    - Exit 'e'`)

class Client {
    constructor(name, age, email, password, solde) {
        this.name = name
        this.age = age
        this.email = email
        this.password = password
        this.solde = solde
    }
}


let client1 = new Client("", Number(""), "", "", 400)
//^ let client2 = new Client("222", Number(''), "azerty@uiop", "", 450)

do {
    if (enter === 'e' || enter === null || enter === '') {
        //     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
        alert("See you later..")
        break
    } else if (enter === 's') {
        //         * If the user chooses to sign up, here are the details they must enter:
        //             # Name (Full):
        let client_Uname = prompt("Your name is:").trim()
        while (client_Uname !== null) {
            if (client_Uname.length > 5) {
                //             - Check for leading or trailing spaces.
                //             - The first letter should be capitalized.
                //             - After each space, the first letter should remain capitalized.
                //             - Check that all other characters are in lowercase.
                client_Uname = client_Uname.split(' ').map(e => e[0].toUpperCase() + e.split(1)).join(' ')
                client1.name = client_Uname
                break
            } else if (client_Uname.length < 5) {
                //             - Do not save the Name if it has less than 5 characters (excluding spaces).
                client_Uname = prompt("Your name should be more than 5 characters").trim()
            } else if (!(client_Uname >= 65 && client_Uname <= 90) && !(client_Uname >= 97 && client_Uname <= 122) || (client_Uname >= 48 && client_Uname <= 57)) {
                //todo             - Do not save the Name if it contains numbers, "@", or similar special characters.
                client_Uname = prompt("Your name shouldn't have an '@'").trim()
            }
        }
        console.log(client1);


        //             # Email:
        //             - Check for leading or trailing spaces.
        //             - Convert all letters to lowercase.
        let sign_email = prompt("Your email is:").trim().toLowerCase()
        while (sign_email !== null) {
            //             - Do not save the Email if it has spaces in the middle.
            if (sign_email.includes(" ")) {
                sign_email = prompt("Your email shouldn't have spaces:").trim().toLowerCase()
                //             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
            } else if (sign_email.length < 10) {
                sign_email = prompt("Your email should have more than 10 characters:").trim().toLowerCase()
                //             - Do not save the Email if it does not contain exactly one "@" symbol.
            } else if ([...sign_email].filter(e => e === '@').length !== 1) {
                sign_email = prompt("Your email should have one '@'.").trim().toLowerCase()
                //             - Ensure the email is unique.
            } else if (this.email === sign_email) {
                sign_email = prompt("This email is allready exist, creat an other is:").trim().toLowerCase()
            } else {
                client1.email = sign_email
                break
            }
        }

        console.log(client1);


        //             # Age:
        //             - Check for leading, trailing, or middle spaces.
        //             - Verify that only digits are entered.
        let client_age = prompt("How old are you?").replaceAll(" ", "")
        //             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.
        while (client_age !== null) {
            if (client_age.length === 0 || client_age.length > 2 || isNaN(client_age) == true) {
                client_age = prompt("Please write your correct age:").replaceAll(" ", "")
            } else {
                client1.age = client_age
                break
            }
        }
        console.log(client1);


        //             # Password:
        //             - Check for leading or trailing spaces.
        //             - Do not save the Password if it has spaces in the middle.
        let sign_password = prompt("Chouse a password:")
        while (sign_password !== null) {
            //             - Require at least 7 characters to confirm the password.
            if (/\s/.test(sign_password) === true) {
                sign_password = prompt("The password must not have spaces:")
            }
            if (sign_password.length < 7) {
                sign_password = prompt("Your password should have more than 7 characters:")
                //             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
            } else if (/[@#-+*/]/.test(sign_password) === false) {
                sign_password = prompt("You must use at least one special character: ['@' '#' '-' '+' '*' '/'].")
            } else {
                client1.password = sign_password
                break
            }
        }
        console.log(client1);


        //             # Password_confirmed:
        let confirme_password = prompt("Confirme your password:")
        //             - The user must re-enter their exact password; otherwise, they are blocked.
        if (confirme_password !== sign_password) {
            alert("You're sign up was successful.")
        } else if (confirme_password !== sign_password) {
            alert("you didn't match the email. See you later.")
            break
        }

        let log = confirm("Do you want to log in? 'l'")
        if (log) {
            enter = 'l'
        } else {
            break
        }

    } else if (enter === 'l') {
        //         * If the user chooses to log in, here are the details they must enter:
        //             # Email:
        let log_email = prompt("Your email acount:")
        //             - Check if the email exists in our Database.
        if (log_email !== client1.email) {
            log_email = prompt("The email is wrong, try again:")
        } else if (log_email === client1.email) {
            //             # Password:
            let log_password = prompt("Your password acount:")
            if ((log_password !== client1.password)) {
                //             - Check if the entered password is associated with the previously entered email.
                log_password = prompt("The password is wrong, try again:")
            } else if (log_password === client1.password) {
                alert("Your loged in..")
                //      * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
                alert("Hi mister " + client1.name + ".\nWelcome to our bank!")
                let services = prompt(`
                        What do you need today?
                            - Your solde 'a'
                            - Withdraw Money 'w'
                            - Deposit Money 'd'
                            - Take a Loan 't'
                            - Invest 'i'
                            - Transaction history 'h'
                            - Logout 'out'
                    `)

                //          # Logout:
                //              - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
                if (services === 'out') {
                    enter = prompt(`
                        - Signing ('s')
                        - Logging ('l')
                        - Changing the password ('p')
                        - Exit ('out')
                    `)

                    //          # Withdraw Money:
                    //              - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
                } else if (services === ) {

                    //          # Deposit Money:
                    //              - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
                } else if (services === ) {

                    //          # Take a Loan:
                    //              - If the user chooses this option, they can take a loan up to 20% of what they already have.
                    //              - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
                } else if (services === ) {

                    //          # Invest:
                    //              - If the user chooses this option, they can invest any amount in the bank.
                    //              - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
                }  else if (services === ) {

                    //          # History:
                    //              - Ability to view the entire transaction history.
                } else {
                    services = prompt(`
                        Please choose from the options:
                            - Your solde 'a'
                            - Withdraw Money 'w'
                            - Deposit Money 'd'
                            - Take a Loan 't'
                            - Invest 'i'
                            - Transaction history 'h'
                            - Logout 'out'
                    `)
                }
            }

            let change_P = confirm("Do you want to change your password? 'p'")
            if (change_P) {
                enter = 'p'
            } else {
                break
            }
        } else {
            break
        }


    } else if (enter === 'p') {
        //         * If the user chooses to change the password:
        //             - They must enter their existing Email in the Database.
        let check_id_email = prompt("Write your email to confirm your identity:")
        if (check_id_email !== client1.email) {
            check_id_email = prompt("The email is wrong, try again:")
        } else if (check_id_email === client1.email) {
            //             # Password:
            let new_password = prompt("Ceate a new password acount:")
            client1.password = new_password
        }


    } else {
        enter = prompt(`
            Please choose from the options:
                - Signing ('s')
                - Logging ('l')
                - Changing the password ('p')
                - Exit ('e')
        `)
    }
} while (enter !== null);

