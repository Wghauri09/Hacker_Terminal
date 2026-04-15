/*
Create a hacking simulator which has green background and it shows
these messages with random delay of 1 to 7 seconds

Initializing Hacking...
Reading your Files...
Password files Detected...
Sending all passwords and personal files to server...
Cleaning up...

The three dots must blink so that it looks like a real terminal
*/

/* 
                    Process 
. first you have to make an empty container on html page and 
  gave that empty container an id or class 
. target that container from Id using DOM 
. inject data in that container 

*/

// -------------code---------------

function getData(dataId) {
    return new Promise((resolve, reject) => {

        let dots = "";

        // ✅ add a new empty line first
        document.getElementById('Container').innerHTML += "<p></p>";

        let interval = setInterval(() => {
            if (dots.length >= 5) dots = "";
            else dots += ".";

            // ✅ update ONLY the last line with dots
            document.getElementById('Container').lastElementChild.innerHTML = dataId + dots;
        }, 400);

        setTimeout(() => {
            clearInterval(interval);  // ✅ stop dots
            // ✅ fix final text without dots
            document.getElementById('Container').lastElementChild.innerHTML = dataId;
            resolve(dataId);
        }, 2000);

    })
}
// getData("Initializing Hacking")
//     .then((res1) => {
//         document.getElementById('Container').innerHTML += res1 + "<br>"; 
//         return getData("Reading your Files"
// ); 
//     })
//     .then((res2) => {
//         document.getElementById('Container').innerHTML += res2+ "<br>";
//         return getData("Password files Detected");
//     })
//     .then((res3) => {
//         document.getElementById('Container').innerHTML += res3+ "<br>";
//         return getData("Sending all passwords and personal files to server..."
// );
//     })
//     .then((res4) => {
//         document.getElementById('Container').innerHTML += res4+ "<br>";
//         return getData("Cleaning up");
//     }).then((res4) => {
//         document.getElementById('Container').innerHTML += res4+ "<br>";
//         return getData("");
//     })

getData("Initializing Hacking...")
    .then(() => getData("Reading your Files..."))
    .then(() => getData("Password files Detected..."))
    .then(() => getData("Sending all passwords and personal files to server..."))
    .then(() => getData("Cleaning up..."))


// -------------------code-------------


// let dots = "";

// setInterval(() => {
//     if (dots.length >= 5) {
//         dots = "";           // reset when limit reached
//     } else {
//         dots += ".";         // keep adding dot
//     }
//     document.querySelector("#text").innerHTML = "Initializing the task " + dots;
// }, 400); // every 400ms
