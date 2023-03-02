const button = document.getElementById('submit-btn').addEventListener('click', principalStresses);

function principalStresses() {
    var sX, sY, tXY, sAvg, s1, s2, phi1, phi2, ccw, theta1, theta2, sXprime, tMax, shearPhi1, shearPhi2;

    sX = Math.floor(document.getElementById('sigmaX').value); //stress in x axis (horizontal right is positive)
    sY = Math.floor(document.getElementById('sigmaY').value); //stress in y axis (vertical up is positive)
    tXY = Math.floor(document.getElementById('tauXY').value); //shear

    sAvg = (sX + sY) / 2;
    s1 = sAvg + Math.sqrt(Math.pow(((sX - sY) / 2), 2) + (Math.pow(tXY,2))); //first principal stress
    s2 = sAvg - Math.sqrt(Math.pow(((sX - sY) / 2), 2) + (Math.pow(tXY,2))); //second principal stress
    
    phi1 = radiansToDegrees(Math.atan(tXY / ((sX - sY) / 2))) / 2; //angle to reach principal stress 1
    phi2 = phi1 + 90; //angle to reach principal stress 2
    theta1 = phi1 * 2;
    theta2 = phi2 * 2;
    ccw = rotation(phi1);
    sXprime = (sX + sY / 2) + (((sX - sY) / 2) + Math.cos(2 * degreesToRadians(phi1)))
    + (tXY * Math.sin(2 * degreesToRadians(phi1)));

    tMax = Math.sqrt(Math.pow(((sX - sY) / 2), 2) + (Math.pow(tXY,2))); //in-plane shear stress
    shearPhi1 = radiansToDegrees(Math.atan(-(((sX - sY) / 2) / tXY))) / 2; //angle to reach max shear stress 1
    shearPhi2 = shearPhi1 + 90; //angle to reach max shear stress 1
    console.log(shearPhi1, shearPhi2);
} 

function radiansToDegrees(radians){
    return radians / (Math.PI / 180);
}
function degreesToRadians(degrees){
    return degrees * (Math.PI / 180);
}
function rotation(angle){
    return angle > 0;
}

// Query the submit button
// const btn = document.querySelector('#submit-btn');

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