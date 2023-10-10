//Twister Instructions
//ex outputs: right hand green, left foot yellow
//three sets of data for 1.Left or right 2. hand or foot 3. red, blue, green , yellow

const spin = document.getElementById('picture');
const answer = document.getElementById('results');

//Start with my arrays of data
// Left or Right
arrayLR = ['Left', 'Right'];
// Hand or Foot
arrayHF = ['Hand', 'Foot'];
//Color
arrayC = ['Red', 'Blue', 'Green', 'Yellow'];

//Create the function to run


const twister = () => {
    let lrRan = Math.floor(Math.random() * 2);
    let hfRan = Math.floor(Math.random() * 2);
    let cRan = Math.floor(Math.random() * 4);
    let firstW = arrayLR[lrRan];
    let secondW = arrayHF[hfRan];
    let thirdW = arrayC[cRan];
    answer.innerHTML = `${firstW} ${secondW} ${thirdW}`;
}

spin.addEventListener("click", twister);
