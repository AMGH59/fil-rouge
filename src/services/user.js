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

export const idVerifier = (userToChecked) => users.filter(user => (user.email===userToChecked.email && user.password === userToChecked.password))
