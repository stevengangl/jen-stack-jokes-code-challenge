// LEGEND
// ⚪️ comments for instructor
// 🔵 for myself
// 🔴 problem areas
// 🟡 confused area im trying to talk thru but not sure if its correct

// const { response } = require("express");

//🔴⚪️ idk how but this (see below) keeps getting onto my client side
// const { response } = require("express");
//⚪️🔴 idk how but this (see above) keeps getting onto my client side


//when the app is loaded, all jokes should be displayed on the DOM below the inputs
//the user should be able to add jokes using the input form
//after a joke is added, the jokes displayed on the DOM should reflect the new data

//TODO CLIENT SIDE

// 1. add listeners to the add joke button✅
// 2. get the input info into a object ✅
// 3. send that object to the server✅
// 4. receive taht object on the server side✅
// TEST object on server side to make sure its still correct✅
//ADD more steps once above it completed
// 5. need to get new info from server side✅
//      need to check new info from server came back correctly✅
// 6. need to append new information to the DOM✅
//      -target area where I want the new info to append✅
//      -WILL NEED TO EMPTY EACH TIME (for loop needed to append)✅
// 7. need to re format so the client side is more readable
//8. double check to make sure everything is done correctly via the instructions

$( document ).ready( onReady );

let jokes = {
    whoseJoke: '',
    jokeQuestion: '',
    punchLine: ''
}


function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke)

    getJokes()
}

function render(object){

    $('#outputDiv').empty()

    for (let i = 0; i < object.sillyJokes.length; i++){
   
        $('#outputDiv').append(`
        <li>
     ${object.sillyJokes[i].whoseJoke}
     ${object.sillyJokes[i].jokeQuestion}
     ${object.sillyJokes[i].punchLine}

        </li>
        `)
    }
}

function getJokes(){//🔵the get request is to get the jokes from the server side
    $.ajax({
        method: 'GET',
        url: '/getJokes'//🟡 need to continue get request on server side than come back to the .then part
    })
    .then((response) => {
        console.log('in GET looking for a global objet array', response);
        render(response)
    })
}







//🔵this function will grab the input info from th eclient and add it to a global object
//🔵we want to send that object over to the sever via a post method 
function addJoke(){
    console.log('in addJoke()')
    jokes.whoseJoke = ($('#whoseJokeIn').val());
    jokes.jokeQuestion = ($('#questionIn').val());
    jokes.punchLine = ($('#punchlineIn').val());
    console.log('this should display an object of jokes',jokes);//🔵this shows my info is going into the global object

    $.ajax({
        method: 'POST',
        url: '/addJokes',//⚪️I got this to send over to the server, im a little confused on why i need the .then part...at least as of right now
        data: jokes
    })
    .then((response) => {
        console.log('in Post looking at what i sent back', response)//⚪️ im confused on this part
        // ⚪️i thought id do my post, send the info to the server than post it server side to get it back..
    // ⚪️I will need to use GET to get the info back from the server side 
    // ⚪️So i guess im confused on what this . then is doing and what the response part is
        getJokes()
    })
}
