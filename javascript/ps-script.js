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
    
    document.getElementById('sAvg').innerText = sAvg.toFixed(3);
    document.getElementById('s1').innerText = s1.toFixed(3);
    document.getElementById('s2').innerText = s2.toFixed(3);
    document.getElementById('phi1').innerText = phi1.toFixed(3);
    document.getElementById('phi2').innerText = phi2.toFixed(3);
    document.getElementById('tMax').innerText = tMax.toFixed(3);
    document.getElementById('shearPhi1').innerText = shearPhi1.toFixed(3);
    document.getElementById('shearPhi2').innerText = shearPhi2.toFixed(3);
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
