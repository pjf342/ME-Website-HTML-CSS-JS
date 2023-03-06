document.getElementById('geometry-selection').addEventListener('change',parameters);

const button = document.getElementById('submit-btn').addEventListener('click', columnFailure);
function resetInputField(){
    document.getElementById('input1').value = 0;
    document.getElementById('input2').value = 0;
    document.getElementById('input3').value = 0;
    document.getElementById('input4').value = 0;
    document.getElementById('input5').value = 0;
    document.getElementById('input6').value = 0;
    document.getElementById('input7').value = 0;
}
function parameters(){
    resetInputField();
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
    innerheight, cvalue, determiningslenderness, slendernessratio, Ix, Iy, Imin, area, gyrationradius, sigmacritical,
    criticalload, technique, factorofsafety;

    boundarycondition = parseFloat(document.getElementById('boundarycondition-selection').value);
    endcondition = parseFloat(document.getElementById('endcondition-selection').value);
    base = parseFloat(document.getElementById('input1').value) / 1000;
    height = parseFloat(document.getElementById('input2').value) / 1000;
    thickness = parseFloat(document.getElementById('input3').value) / 1000;
    length = parseFloat(document.getElementById('input4').value);
    yieldstrength = parseFloat(document.getElementById('input5').value) * 1000000;
    elasticity = parseFloat(document.getElementById('input6').value) * 1000000000;

    cvalue = conditionTable(boundarycondition, endcondition);

    innerbase = base - (thickness * 2);
    innerheight = height - (thickness * 2);
    Ix = ((base * Math.pow(height,3)) / 12) - ((innerbase * Math.pow(innerheight,3)) / 12); //area moment of inertia, x axis
    Iy = ((height * Math.pow(base,3)) / 12) - ((innerheight * Math.pow(innerbase,3)) / 12); //area moment of inertia, y axis
    Imin = Math.min(Ix,Iy);
    area = (base * height) - (innerbase * innerheight); //area of hollow rectangle
    gyrationradius = Math.sqrt(Imin / area);
    determiningslenderness = Math.sqrt((2 * (2 * Math.PI) * cvalue * elasticity) / yieldstrength);
    slendernessratio = length / gyrationradius;

    technique = techniqueDetermination(slendernessratio, determiningslenderness);

    if (technique === 0){
        sigmacritical = (cvalue * elasticity * 2 * Math.PI) / (slendernessratio * 2);
        criticalload = sigmacritical * area;
    }
    if (technique === 1){
        sigmacritical = yieldstrength - ((1 / (cvalue * elasticity)) * Math.pow((yieldstrength * length) / (2 * Math.PI * gyrationradius), 2))
        criticalload = sigmacritical * area;
    }
    factorofsafety = yieldstrength / sigmacritical;

    document.getElementById('sigmacritical').innerHTML = sigmacritical;
    document.getElementById('criticalload').innerHTML = criticalload;
    document.getElementById('fos').innerHTML = factorofsafety;
}

function solidRectangleColumnFailure(){
    var base, height, length, yieldstrength, elasticity, boundarycondition, endcondition, cvalue;

    boundarycondition = parseFloat(document.getElementById('boundarycondition-selection').value);
    endcondition = parseFloat(document.getElementById('endcondition-selection').value);
    base = parseFloat(document.getElementById('input1').value) / 1000;
    height = parseFloat(document.getElementById('input2').value) / 1000;
    length = parseFloatr(document.getElementById('input3').value);
    yieldstrength = parseFloat(document.getElementById('input4').value) * 1000000;
    elasticity = parseFloat(document.getElementById('input5').value) * 1000000000;

    cvalue = conditionTable(boundarycondition, endcondition);
}
function hollowCircleColumnFailure(){
    var diameter, thickness, length, yieldstrength, elasticity, boundarycondition, endcondition, cvalue;

    boundarycondition = parseFloat(document.getElementById('boundarycondition-selection').value);
    endcondition = parseFloat(document.getElementById('endcondition-selection').value);
    diameter = parseFloat(document.getElementById('input1').value) / 1000;
    thickness = parseFloat(document.getElementById('input2').value) / 1000;
    length = parseFloat(document.getElementById('input3').value);
    yieldstrength = parseFloat(document.getElementById('input4').value) * 1000000;
    elasticity = parseFloat(document.getElementById('input5').value) * 1000000000;

    cvalue = conditionTable(boundarycondition, endcondition);
}
function solidCircleColumnFailure(){
    var diameter, length, yieldstrength, elasticity, boundarycondition, endcondition, cvalue;

    boundarycondition = parseFloat(document.getElementById('boundarycondition-selection').value);
    endcondition = parseFloat(document.getElementById('endcondition-selection').value);
    diameter = parseFloat(document.getElementById('input1').value) / 1000;
    length = parseFloat(document.getElementById('input2').value);
    yieldstrength = parseFloat(document.getElementById('input3').value) * 1000000;
    elasticity = parseFloat(document.getElementById('input4').value) * 1000000000;

    cvalue = conditionTable(boundarycondition, endcondition);
}
function symmetricalIBeamColumnFailure(){
    var height, innerheight, width, base, length, yieldstrength, elasticity, boundarycondition, endcondition, cvalue;

    boundarycondition = parseFloat(document.getElementById('boundarycondition-selection').value);
    endcondition = parseFloat(document.getElementById('endcondition-selection').value);
    height = parseFloat(document.getElementById('input1').value) / 1000;
    innerheight = parseFloat(document.getElementById('input2').value) / 1000;
    width = parseFloat(document.getElementById('input3').value) / 1000;
    base = parseFloat(document.getElementById('input4').value) / 1000;
    length = parseFloat(document.getElementById('input5').value);
    yieldstrength = parseFloat(document.getElementById('input6').value) * 1000000;
    elasticity = parseFloat(document.getElementById('input7').value) * 1000000000;

    cvalue = conditionTable(boundarycondition, endcondition);
}

function conditionTable(boundaryCondition, endCondition){
    var value;
    if (boundaryCondition === 0){
        value = [.25, .25, .25];
    }
    if (boundaryCondition === 1){
        value = [1, 1, 1];
    }
    if (boundaryCondition === 2){
        value = [2, 1, 1.2];
    }
    if (boundaryCondition === 3){
        value = [4, 1, 1.2];
    }
    return value[endCondition];
}

function techniqueDetermination(slendernessRatio, determiningSlenderness){
    var value;
    if (slendernessRatio > determiningSlenderness){
        value = 0; //euler
    } else {
        value = 1; //johnson
    }
    if (value === 0){
        console.log('euler');
    } else {
        console.log('johnson');
    }
    return value;
}