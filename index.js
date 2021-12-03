/*#Exercise 1
Add a user to the https://reqres.in/api api.
    Test it by console.logging the response/response data.
    The response will have a status: 201 or 200 and something.
    The data will have an id and a createdAt field.*/

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

/*
# Exercise 2
**Part 1:**
Make a form with at least two fields and a submit button.
When the form is submitted, send the data to create a new user in the reqres api.
 When the submission is complete, display a success message.
*/