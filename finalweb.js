
// function showflight() {
//     let typeofjourney = document.getElementById("typeof").value;
//     let searchflight = document.getElementById("search").value;
//     let origincity = document.getElementById("input").value;
//     let Destinationcity = document.getElementById("Input").value

//     if (!origincity) {
//         alert("please see once again")
// return;
//     }
// }
// // document.getElementById("type of journey").innerHTML=typeofjourney;
// document.getElementById("searchflight").innerHTML=searchflight;
// document.getElementById("origincity").innerHTMorigincity;
// document.getElementById("destinationcity").innerHTML=destinationcity;

document.getElementById("btn").addEventListener("click", showf);
function showf() {
    document.getElementById("btn").innerHTML
    alert("Flight searching ")

}

document.getElementById("Input").addEventListener("click", origin);
function origin(ujjain) {
    document.getElementById("Input").innerHTML
    alert("origin city must be filled")
}

fetch('./flight.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        console.log(data);
    })
    .catch(function (error) {
        console.log("error: " + error);

    });
function appendData(data) {
    let main_container=document.getElementById("main_container");
    
    // for(let i=0;i<data.length;i++){

    }
    
    console.log("ravi");