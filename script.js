const username = document.getElementById(`username`);
const usertxt = document.getElementById(`usernametxt`);
const password = document.getElementById(`password`);
const passtxt = document.getElementById(`passwordtxt`);
const checkbox = document.getElementById(`checkbox`);
const btn = document.getElementById(`submit`);

// Pass - Contain Special Char
// Pass- Contain Capital
// Username - cannot contain spaces

// Show/Hide Password
checkbox.onclick = function() {
    if(checkbox.checked){
        password.type = `text`;
    }
    else{
        password.type = `password`;
    }
}

function submit(){
    let containCapital = false;
    let capital = [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`, `P`, `A`, `S`, `D`, `F`, `G`, `H`, `J`,`K`, `L`, `Z`, `X`, `C`, `V`, `B`, `N`, `M`]
    
    for (let i = 0; i < capital.length; i++) {
        if(password.value.includes(capital[i])){
            containCapital = true;
            break;
        }
    }

    let specialChar = [`!`, `"`,`#`,`$`,`%`,`&`,`'`,`(`,`)`,`*`,`+`,`,`, `<`, `>`, `:`, `;`, `"`,`.`, `,`,`}`, `{`, `[`, `]`, `=`, `-`, `_`, `?`, `/`, `|`]
    let ContainSpecialChar = false
        for (let i = 0; i < specialChar.length; i++)
            if(password.value.includes(specialChar[i])){
            ContainSpecialChar = true;
            break;
        }

    usertxt.textContent = ``;
    username.style.boxShadow = `0 0 5px aqua`;
    username.style.border = `2px solid aqua`;

    passtxt.textContent = ``;
    password.style.boxShadow = `0 0 5px aqua`;
    password.style.border = `2px solid aqua`;

    if (username.value === ``) {
            usertxt.textContent = `Enter your username`;
            username.style.boxShadow = `0 0 5px red`;
            username.style.border = `2px solid red`;
    } else {
        if (password.value === ``) {
            passtxt.textContent = `Enter your password`;
            password.style.border = `2px solid red`;
            password.style.boxShadow = `0 0 5px red`;
        }
        else if(password.value.length < 8) {
            passtxt.textContent = `Password must not be lesser than 8 characters`;
            password.style.border = `2px solid red`;
            password.style.boxShadow = `0 0 5px red`;
        }
        else if (username.value.includes(` `)){
            usertxt.textContent = `Must not contain any spaces`;
            username.style.boxShadow = `0 0 5px red`;
            username.style.border = `2px solid red`;
        }
        else if(!containCapital){
            passtxt.textContent = `Must contain atleast Capital`;
            password.style.border = `2px solid red`;
            password.style.boxShadow = `0 0 5px red`;
        }
        else if (!ContainSpecialChar){
            passtxt.textContent = `Must contain a Special Characters`;
            password.style.border = `2px solid red`;
            password.style.boxShadow = `0 0 5px red`;
            }
            }
        }