const button = document.getElementById('submit-btn').addEventListener('click', strengthAndColdWork);
// col0 | Material Number
// col1 | 0=steel, 1=stainless steel, 2=aluminum alloy
// col2 | 0=annealed, 1=HR, 2=Q&T 600F, 3=T6, 4=T4,
// col3 | Yield (MPa)
// col4 | Ultimate (MPa)
// col5 | Fracture (MPa)
// col6 | Coefficient (MPa)
// col7 | Strain Strength (Exponent)
// col8 | Fracture Strain

tableA22 = [
    [1018, 1144, 1212, 1045, 4142, 303, 304, 2011, 2024, 7075],
    [0, 0, 1, 2, 2, 0, 0, 3, 4, 3],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2],
    [220, 358, 193, 1520, 1720, 241, 276, 169, 296, 542],
    [341, 646, 424, 1580, 1930, 601, 568, 324, 446, 593],
    [628, 898, 729, 2380, 2340, 1520, 1600, 325, 533, 706],
    [620, 992, 758, 1880, 1760, 1410, 1270, 620, 689, 882],
    [.25, .14, .24, .041, .048, .51, .45, .28, .15, .13],
    [1.05, .49, .85, .81, .43, 1.16, 1.67, .1, .18, .18]
];

function strengthAndColdWork() {
    materialNumber = parseInt(document.getElementById('material-number-selection').value);
    coldWorkPercent = parseFloat(document.getElementById('coldworkpercent-value').value) / 100;

    yieldStrength = tableA22[3][materialNumber]; //MPa
    ultimateStrength = tableA22[4][materialNumber]; //MPa
    fracture = tableA22[5][materialNumber]; //MPa
    coefficient = tableA22[6][materialNumber]; //MPa
    strainStrength = tableA22[7][materialNumber]; //exponent m
    fractureStrain = tableA22[8][materialNumber];

    trueStrain = Math.log(1 / (1 - coldWorkPercent));
    newYieldStrength = coefficient * Math.pow(trueStrain, strainStrength);
    newUltimateStrength = ultimateStrength / (1 - coldWorkPercent);

    document.getElementById('true-strain').innerHTML = trueStrain.toFixed(3);
    document.getElementById('new-yield-strength').innerHTML = newYieldStrength.toFixed(3);
    document.getElementById('new-ultimate-strength').innerHTML = newUltimateStrength.toFixed(3);

}