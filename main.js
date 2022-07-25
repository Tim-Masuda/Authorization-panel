let regNode = document.querySelector("#reg__container-id")
let logNode = document.querySelector("#log__container-id")

let users = []
let currentUsers = { authorized: false }



let nowPage = 0
// 0 - reg ;  1 - log

if(localStorage.getItem("usersK")){

    users = JSON.parse(localStorage.getItem("usersK"))

}else{
    users = []
}


function setCurrentPage(page) {
    nowPage = page;
    let footerBtn = document.querySelector("#footer-btn")
    if (nowPage == 1) {
        logNode.style.display = "flex";
        regNode.style.display = "none";
        footerBtn.innerHTML = "Sign in"
    } else {
        logNode.style.display = "none";
        regNode.style.display = "flex";
        footerBtn.innerHTML = "Sign up"
    }
}

function register() {
    let RegLogValue = document.querySelector("#reg-input")
    let RegPassValue = document.querySelector("#reg-pass-input")

    if (!RegLogValue.value || !RegPassValue.value) {
        alert("no valid")
    } else {
        users.push({ login: RegLogValue.value, password: RegPassValue.value })
        alert(`Hi ${RegLogValue.value}`)

        localStorage.setItem("usersK", JSON.stringify(users))

    }


    RegLogValue.value = ""
    RegPassValue.value = ""
    setCurrentPage(1)
}

function login() {
    let LogLogValue = document.querySelector("#log-input")
    let LogPassValue = document.querySelector("#log-pass-input")
    const candidate = users.find(user => user.login === LogLogValue.value && user.password === LogPassValue.value)
    
    if (candidate) {
        currentUsers = { ...candidate, authorized: true }
        alert("authorized")
        LogLogValue.value = ""
        LogPassValue.value = ""
    } else {
        alert("invalid password or login")
    }
    console.log(currentUsers)
    console.log(candidate)
}

console.log(users)


function otherPage() {
    setCurrentPage(nowPage === 0 ? 1 : 0)

}
