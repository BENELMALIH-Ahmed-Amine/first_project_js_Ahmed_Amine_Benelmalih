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
        let client_Uname = prompt("Your name please:").trim()
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
            } else if (!(client_Uname >= 65 && client_Uname <= 90) && !(client_Uname >= 97 && client_Uname <= 122) || (client_Uname >= 48 && client_Uname <= 57) ) {
                //todo             - Do not save the Name if it contains numbers, "@", or similar special characters.
                client_Uname = prompt("Your name shouldn't have an '@'").trim()
            }
        }
        console.log(client1);
        
    
        //             # Email:
        //             - Check for leading or trailing spaces.
        //             - Convert all letters to lowercase.
        let client_email = prompt("Your email please:").trim().toLowerCase()
        while (client_email !== null) {
            //             - Do not save the Email if it has spaces in the middle.
            if (client_email.includes(" ")) {
                client_email = prompt("Your email shouldn't have spaces:").trim().toLowerCase()
                //             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
            } else if (client_email.length < 10) {
                client_email = prompt("Your email should have more than 10 characters:").trim().toLowerCase()
                //             - Do not save the Email if it does not contain exactly one "@" symbol.
            } else if ([...client_email].filter(e => e === '@').length !== 1) {
                client_email = prompt("Your email should have one '@'.").trim().toLowerCase()
                //             - Ensure the email is unique.
            } else if (this.email === client_email) {
                client_email = prompt("This email is allready exist, creat an other please:").trim().toLowerCase()
            } else {
                client1.email = client_email
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
        let client_password = prompt("Chouse a password:")
        while (client_password !== null) {
            //             - Require at least 7 characters to confirm the password.
            if (/\s/.test(client_password) === true) {
                client_password = prompt("The password must not have spaces:")   
            }
            if (client_password.length < 7) {
                client_password = prompt("Your password should have more than 7 characters:")
                //             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
            } else if (/[@#-+*/]/.test(client_password) === false) {
                client_password = prompt("You must use at least one special character: ['@' '#' '-' '+' '*' '/'].")
            } else {
                client1.password = client_password
                break
            }
        }
        console.log(client1);
        
    
        //             # Password_confirmed:
        let confirme_password = prompt("Confirme your password:")
        //             - The user must re-enter their exact password; otherwise, they are blocked.
        if (confirme_password !== client_password) {
            alert("You're sign up was successful.")
        } else if (confirme_password !== client_password) {
            alert("you didn't match the email. See you later.")
            break
        }
    
    } else if (enter === 'l') {
        //         * If the user chooses to log in, here are the details they must enter:
        //             # Email:
        //             - Check if the email exists in our Database.
                    
        //             # Password:
        //             - Check if the entered password is associated with the previously entered email.
    
    } else if (enter === 'p') {
        //         * If the user chooses to change the password:
        //             - They must enter their existing Email in the Database.
    
    } else {
        alert("Please choose from options")
        enter = prompt(`
            - Signing ('s')
            - Logging ('l')
            - Changing the password ('p')
            - Exit ('e')`)
    }
} while (enter !== null);

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:

//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.


// let Unamename = 44
// class na {
//     constructor(name) {
//         this.Unamename = name
//     }
// }

// let p  = new na(Unamename)
// console.log(p);
