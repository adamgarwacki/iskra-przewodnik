// new-char.js

// let strInput = document.getElementById('char-str');

// if(strInput) {
//     console.log(strInput.value);
// }

// ponieważ jest jeden plik js (bundle.js), 
// muszę sprawdzać czy odnosi się do konkretnej 
// strony


// tu będą przechowywane informacje o postaci
let charData = {
    charName: '',
    charSpecies: '',
    charConcept: '',
    charAttributes: '',
    charAbilities: {},
    charEquipment: {},
    charHealth: '',
    charFocus: '',
    charNotes: ''
};
console.log(charData);


let changeAbilityScore = (targets) => {
    let sum = -3;
    for (const e of targets) {
        sum -= parseInt(e.value);
    };

    let pointsLeft = document.getElementById('attr-points');
    if (sum < 0) {
        pointsLeft.classList.add('glow-red');
    } else {
        pointsLeft.classList.remove('glow-red');
    }
    pointsLeft.innerText = sum;
}


// ability add / remove

let removeAbility = (key) => {
    document.getElementById(key).remove();
}

let addAbility = () => {
    let abilityName = document.getElementById('ability-name').value;
    let abilityDesc = document.getElementById('ability-desc').value;

    let key = Date.now();
    charData.charAbilities[key] = {
        abilityName: abilityName,
        abilityDesc: abilityDesc
    }

    let abilityList = document.getElementById('ability-list');

    let abilityContainer = document.createElement('div');
    let abilityContainerName = document.createElement('h3');
    let abilityContainerDesc = document.createElement('p');
    let abilityContainerRemove = document.createElement('button'); 

    abilityContainerName.innerText = abilityName;
    abilityContainerDesc.innerText = abilityDesc;
    abilityContainerRemove.innerText = 'Usuń';
    abilityContainerRemove.classList.add('btn');
    abilityContainerRemove.addEventListener('click', () => {
        removeAbility(key);
    });

    abilityContainer.appendChild(abilityContainerName);
    abilityContainer.appendChild(abilityContainerDesc);
    abilityContainer.appendChild(abilityContainerRemove);

    abilityContainer.id = key;
    abilityContainer.classList.add('ability-container');
    abilityList.appendChild(abilityContainer);

    console.log(charData);
}




let newCharForm = document.getElementById('new-char-form');
if (newCharForm != undefined) {
    
    // attributes

    let attrInputs = document.getElementsByClassName('attr-input');
    for (const e of attrInputs) {
        e.addEventListener('change', () => changeAbilityScore(attrInputs));
    };
    changeAbilityScore(attrInputs);


    // abilities

    document.getElementById('add-ability').addEventListener('click', () => {
        addAbility();
    });
}