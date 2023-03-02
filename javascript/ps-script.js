// Query the submit button
const btn = document.querySelector('#submit-btn');

const button = document.getElementById('submit-btn')
                        .addEventListener('click', testfn);


function testfn() {
    var sigmaX, sigmaY, tauXY;
    sigmaX = Math.floor(document.getElementById('sigmaX').value);
    sigmaY = Math.floor(document.getElementById('sigmaY').value);
    multiple = sigmaX * sigmaY;
    console.log(multiple);
}


// Query all boxes
// const boxes = document.querySelectorAll('.box');

// For every input box add a listener when a value is changed.
// boxes.forEach(box => {
//     box.addEventListener('input', event => {
//         // console.log(event.target.value);
//         event
//     })

    
// })

// Add lister to calculate button on click.
// btn.addEventListener('click', () => {
//     // console.log(boxes[0].value);
//     // let sigX = Math.floor(boxes[0].value);  // String to Number type
//     // let sigY = Math.floor(boxes[1].value);  
//     // addSigmas(sigX, sigY);
// });


// Dummy Function to test listeners.
// function addSigmas(sigX, sigY)
// {
//     // console.log(sigX + sigY);
//     let tau = boxes[2];
//     tau.value = (sigX + sigY);
//     return tau.value;
// }