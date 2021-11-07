export const users = [{
    name: "a",
    email: "a@a.a",
    password: "1"
},
{
    name: "b",
    email: "b@b.b",
    password: "2"
},
{
    name: "c",
    email: "c@c.c",
    password: "3"
}]

export function idVerifier(userToChecked){
    let filteredTab=users.filter(user => (user.email===userToChecked.email && user.password === userToChecked.password))
    if(filteredTab.length===1){
        localStorage.setItem('currentUser',JSON.stringify(filteredTab[0]))
    }
    return filteredTab
}

export function deleteCurrentUser(){
    localStorage.removeItem("currentUser")
}