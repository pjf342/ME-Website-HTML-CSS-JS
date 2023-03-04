document.getElementById('geometry-selection').addEventListener('change',parameters);

const button = document.getElementById('submit-btn').addEventListener('click', columnFailure);

function parameters(){
    var geometry;

    geometry = Math.floor(document.getElementById('geometry-selection').value);

    if (geometry === 0){
        document.getElementById('inputlabel1').innerHTML = 'Base (mm)';
        document.getElementById('inputlabel2').innerHTML = 'Height (mm)';
        document.getElementById('inputlabel3').innerHTML = 'Thickness (mm)';
        document.getElementById('inputlabel4').innerHTML = 'Length of Column(m)';
        document.getElementById('inputlabel5').innerHTML = 'Yield Strength (MPa)';
        document.getElementById('inputlabel6').innerHTML = 'Modulus of Elasticity (GPa)';
        document.getElementById('inputlabel7').innerHTML = '';

        document.getElementById('input1').style.display = 'flex';
        document.getElementById('input2').style.display = 'flex';
        document.getElementById('input3').style.display = 'flex';
        document.getElementById('input4').style.display = 'flex';
        document.getElementById('input5').style.display = 'flex';
        document.getElementById('input6').style.display = 'flex';
        document.getElementById('input7').style.display = 'none';
    }
    if (geometry === 1){
        document.getElementById('inputlabel1').innerHTML = 'Base (mm)';
        document.getElementById('inputlabel2').innerHTML = 'Height (mm)';
        document.getElementById('inputlabel3').innerHTML = 'Length of Column (m)';
        document.getElementById('inputlabel4').innerHTML = 'Yield Strength (MPa)';
        document.getElementById('inputlabel5').innerHTML = 'Modulus of Elasticity (GPa)';
        document.getElementById('inputlabel6').innerHTML = '';
        document.getElementById('inputlabel7').innerHTML = '';

        document.getElementById('input1').style.display = 'flex';
        document.getElementById('input2').style.display = 'flex';
        document.getElementById('input3').style.display = 'flex';
        document.getElementById('input4').style.display = 'flex';
        document.getElementById('input5').style.display = 'flex';
        document.getElementById('input6').style.display = 'none';
        document.getElementById('input7').style.display = 'none';
    }
    if (geometry === 2){
        document.getElementById('inputlabel1').innerHTML = 'Diameter (mm)';
        document.getElementById('inputlabel2').innerHTML = 'Thickness (mm)';
        document.getElementById('inputlabel3').innerHTML = 'Length of Column (m)';
        document.getElementById('inputlabel4').innerHTML = 'Yield Strength (MPa)';
        document.getElementById('inputlabel5').innerHTML = 'Modulus of Elasticity (GPa)';
        document.getElementById('inputlabel6').innerHTML = '';
        document.getElementById('inputlabel7').innerHTML = '';
 

        document.getElementById('input1').style.display = 'flex';
        document.getElementById('input2').style.display = 'flex';
        document.getElementById('input3').style.display = 'flex';
        document.getElementById('input4').style.display = 'flex';
        document.getElementById('input5').style.display = 'flex';
        document.getElementById('input6').style.display = 'none';
        document.getElementById('input7').style.display = 'none';
    }
    if (geometry === 3){
        document.getElementById('inputlabel1').innerHTML = 'Diameter (mm)';
        document.getElementById('inputlabel2').innerHTML = 'Length of Column (m)';
        document.getElementById('inputlabel3').innerHTML = 'Yield Strength (MPa)';
        document.getElementById('inputlabel4').innerHTML = 'Modulus of Elasticity (GPa)';
        document.getElementById('inputlabel5').innerHTML = '';
        document.getElementById('inputlabel6').innerHTML = '';
        document.getElementById('inputlabel7').innerHTML = '';
 

        document.getElementById('input1').style.display = 'flex';
        document.getElementById('input2').style.display = 'flex';
        document.getElementById('input3').style.display = 'flex';
        document.getElementById('input4').style.display = 'flex';
        document.getElementById('input5').style.display = 'none';
        document.getElementById('input6').style.display = 'none';
        document.getElementById('input7').style.display = 'none';
    }
    if (geometry === 4){
        document.getElementById('inputlabel1').innerHTML = 'Height (mm)';
        document.getElementById('inputlabel2').innerHTML = 'Flange-flange Inner Face Height (mm)';
        document.getElementById('inputlabel3').innerHTML = 'Width of I-beam (mm)';
        document.getElementById('inputlabel4').innerHTML = 'Base (mm)';
        document.getElementById('inputlabel5').innerHTML = 'Length of Column (m)';
        document.getElementById('inputlabel6').innerHTML = 'Yield Strength (MPa)';
        document.getElementById('inputlabel7').innerHTML = 'Modulus of Elasticity (GPa)';
 

        document.getElementById('input1').style.display = 'flex';
        document.getElementById('input2').style.display = 'flex';
        document.getElementById('input3').style.display = 'flex';
        document.getElementById('input4').style.display = 'flex';
        document.getElementById('input5').style.display = 'flex';
        document.getElementById('input6').style.display = 'flex';
        document.getElementById('input7').style.display = 'flex';
    }
    
}
function columnFailure() {
    var geometry;

    geometry = Math.floor(document.getElementById('geometry-selection').value);

    if (geometry === 0) {
        console.log('Hollow Rectangle');
        hollowRectangleColumnFailure();
    }
    if (geometry === 1) {
        console.log('Solid Rectangle');
        solidRectangleColumnFailure();
    }
    if (geometry === 2) {
        console.log('Hollow Circle');
        hollowCircleColumnFailure()
    }
    if (geometry === 3) {
        console.log('Solid Circle');
        solidCircleColumnFailure()
    }
    if (geometry === 4) {
        console.log('Symmetrical I-Beam');
        symmetricalIBeamColumnFailure()
    }
}

function hollowRectangleColumnFailure(){
    var base, height, thickness, length, yieldstrength, elasticity, boundarycondition, endcondition, innerbase,
    innerheight, cvalue;

    boundarycondition = Math.floor(document.getElementById('boundarycondition-selection').value);
    endcondition = Math.floor(document.getElementById('endcondition-selection').value);
    base = Math.floor(document.getElementById('input1').value) / 1000;
    height = Math.floor(document.getElementById('input2').value) / 1000;
    thickness = Math.floor(document.getElementById('input3').value) / 1000;
    length = Math.floor(document.getElementById('input4').value);
    yieldstrength = Math.floor(document.getElementById('input5').value) * 1000000;
    elasticity = Math.floor(document.getElementById('input6').value) * 1000000000;


    innerbase = base - (thickness * 2);
    innerheight = height - (thickness * 2);

    cvalue = conditionTable(boundarycondition, endcondition);
}

function solidRectangleColumnFailure(){}
function hollowCircleColumnFailure(){}
function solidCircleColumnFailure(){}
function symmetricalIBeamColumnFailure(){}

function conditionTable(boundarycondition, endcondition){
    var value;
    if (boundarycondition === 0){
        value = [.25, .25, .25];
    }
    if (boundarycondition === 1){
        value = [1, 1, 1];
    }
    if (boundarycondition === 2){
        value = [2, 1, 1.2];
    }
    if (boundarycondition === 3){
        value = [4, 1, 1.2];
    }
    return value[endcondition];
}