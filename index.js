/*#Exercise 1
Add a user to the https://reqres.in/api api.
    Test it by console.logging the response/response data.
    The response will have a status: 201 or 200 and something.
    The data will have an id and a createdAt field.*/
/*
fetch("https://reqres.in/api/user/101", {
    method: 'POST',
    body:JSON.stringify({
        name: "Boris",
        job: "PM"
    }),
    headers:{
        'Content-Type': 'application/json'
    }
}).then(response => {
    console.log("Response Status Code: " + response.status)
    return response.json()
}).then((res)=>{
    console.log(res)
}).catch(e =>{
    console.log(e)
})
*/

/*
# Exercise 2
**Part 1:**
Make a form with at least two fields and a submit button.
When the form is submitted, send the data to create a new user in the reqres api.
When the submission is complete, display a success message.
*//*
const submitClicked = document.querySelector("#submit")

submitClicked.addEventListener("click", ()=>{
    const nameField = document.querySelector("#name")
    const jobField = document.querySelector("#job")
    const responseField = document.querySelector("#response-box")

    responseField.innerText = ""

    fetch("https://reqres.in/api/user/101", {
        method: 'POST',
        body: JSON.stringify({
            name: nameField.value,
            job: jobField.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log("Response Code: " + response.status + ". Status: " + response.statusText)
        return response.json()
    }).then((res)=>{
        console.log("The user "+res.name+" with the job of "+res.job+" was created with id "+res.id+" at "+res.createdAt)
        responseField.innerText = "Success"
    }).catch(e =>{
        console.log(e)
        responseField.innerText = "Failure"
    })
    nameField.value = ""
    jobField.value = ""
})*/
/*
**Part 2:**
Add an if statement. If the user id is higher than 500, throw an error.
    Display the error message to the user, and do not display a success message.
*//*
const submitClicked = document.querySelector("#submit")

submitClicked.addEventListener("click", ()=>{
    const nameField = document.querySelector("#name")
    const jobField = document.querySelector("#job")
    const responseField = document.querySelector("#response-box")

    responseField.innerText = ""

    fetch("https://reqres.in/api/user/101", {
        method: 'POST',
        body: JSON.stringify({
            name: nameField.value,
            job: jobField.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log("Response Code: " + response.status + ". Status: " + response.statusText)
        return response.json()
    }).then((res)=>{
        if(res.id>500){
            throw new Error("username "+res.name+" with the job "+res.job+" was not added at id "+res.id)
        }else {
            console.log("The user " + res.name + " with the job of " + res.job + " was created with id " + res.id + " at " + res.createdAt)
            responseField.innerText = "Successfully added username "+res.name
        }
    }).catch(e =>{
        console.log((e).message)
        responseField.innerText = "Failure: "+(e).message
    })
    nameField.value = ""
    jobField.value = ""
})*/
/*
# Exercise 3:
**Part 1:**
Display all the users below your form.*/
const submitClicked = document.querySelector("#submit")

submitClicked.addEventListener("click", ()=>{
    const nameField = document.querySelector("#name")
    const jobField = document.querySelector("#job")
    const responseField = document.querySelector("#response-box")
    const userListField = document.querySelector("#user-list")
    responseField.innerText = ""

    fetch("https://reqres.in/api/user/101", {
        method: 'POST',
        body: JSON.stringify({
            name: nameField.value,
            job: jobField.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log("Response Code: " + response.status + ". Status: " + response.statusText)
        return response.json()
    }).then((res)=>{
        if(res.id>500){
            throw new Error("username "+res.name+" with the job "+res.job+" was not added at id "+res.id)
        }else {
            console.log("The user " + res.name + " with the job of " + res.job + " was created with id " + res.id + " at " + res.createdAt)
            responseField.innerText = "Successfully added username "+res.name
            const userList = "Successfully added username "+res.name
            nameField.value = ""
            jobField.value = ""
            console.log(userList)
        }
    }).catch(e =>{
        console.log((e).message)
        responseField.innerText = "Failure: "+(e).message
    })

})