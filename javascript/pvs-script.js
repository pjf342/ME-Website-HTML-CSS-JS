const button = document.getElementById('submit-btn').addEventListener('click', pressureVesselStresses);

function pressureVesselStresses() {
    surface = parseFloat(document.getElementById('surface-selection').value);
    capped = parseFloat(document.getElementById('capped-selection').value);
    pouter = parseFloat(document.getElementById('pouter-value').value);
    pinner = parseFloat(document.getElementById('pinner-value').value);
    douter = parseFloat(document.getElementById('douter-value').value) / 1000;
    dinner = parseFloat(document.getElementById('dinner-value').value) / 1000;

    thickness = (douter - dinner) / 2;
    router = douter / 2;
    rinner = dinner / 2;

    if (surface === 0) {
        radius = douter / 2;
        pressure = pouter;
    }
    if (surface === 1) {
        radius = dinner / 2;
        pressure = pinner;
    }

    thicknessratio = thickness / radius;

    if (thicknessratio >= .1) {
        thickwall = 0; //true
    }
    if (thicknessratio < .1) {
        thickwall = 1; //false
    }

    calculateTangentialStress();
    calculateRadialStress();
    calculateAxialStress();

    document.getElementById('tstress').innerHTML = tangentialstress;
    document.getElementById('rstress').innerHTML = radialstress;
    document.getElementById('astress').innerHTML = axialstress;

    function calculateTangentialStress() {
        if (thickwall === 0) {
            if (pouter != 0) {
                console.log('t - thickwalled, pouter is not 0')
                tangentialstress = ((pinner * Math.pow(rinner, 2)) - (pouter * Math.pow(router, 2)) - (Math.pow(rinner, 2) * Math.pow(router, 2) * (pouter - pinner)) / Math.pow(radius, 2)) / (Math.pow(router, 2) - Math.pow(rinner, 2));
            }
            if (pouter === 0) {
                console.log('t - thickwalled, pouter is 0')
                tangentialstress = ((Math.pow(rinner, 2) * pinner) / (Math.pow(router, 2) - Math.pow(rinner, 2))) * (1 + (Math.pow(router, 2) / Math.pow(radius, 2)));
            }
        }
        if (thickwall === 1) {
            console.log('t - thinwalled')
            tangentialstress = (pressure * (dinner * thickness)) / (2 * thickness);
        }
    }

    function calculateRadialStress() {
        if (thickwall === 0) {
            if (pouter != 0) {
                console.log('r - thickwalled, pouter is not 0')
                radialstress = ((pinner * Math.pow(rinner, 2)) - (pouter * (Math.pow(router, 2))) + (Math.pow(rinner, 2) * Math.pow(router, 2) * (pouter - pinner)) / Math.pow(radius, 2)) / (Math.pow(router, 2) - Math.pow(rinner, 2));
            }
            if (pouter === 0) {
                console.log('r - thickwalled, pouter is 0')
                radialstress = (Math.pow(rinner, 2) * pinner) / (Math.pow(router, 2) - Math.pow(rinner, 2)) * (1 - (Math.pow(router, 2) / Math.pow(radius, 2)));
            }
        }
        if (thickwall === 1) {
            console.log('r - thinwalled')
            radialstress = 0
        }
    }

    function calculateAxialStress() {
        if (capped === 0) {
            console.log('capped')
            if (thickwall === 0) {
                if (pouter != 0) {
                    console.log('a - thickwalled, pouter is not 0')
                    axialstress = ((pinner * Math.pow(rinner, 2)) - (pouter * Math.pow(router, 2))) / (Math.pow(router, 2) - Math.pow(rinner, 2));
                }
                if (pouter === 0) {
                    console.log('a - thickwalled, pouter is 0')
                    axialstress = (pinner * Math.pow(rinner, 2)) / (Math.pow(router, 2) - Math.pow(rinner, 2));
                }
            }
            if (thickwall === 1) {
                console.log('a - thinwalled')
                axialstress = (pressure * dinner) / (4 * thickness);
            }
        }
        if (capped === 1) {
            console.log('uncapped')
            axialstress = 0;
        }
    }
    console.log(tangentialstress, radialstress, axialstress);
    // console.log(router, rinner, thickness, radius)
}








