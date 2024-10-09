// const { text } = require("express")

const addSets = () => {
    const container = document.getElementById('exerciseCont')
    const set = document.getElementById('exerciseInfo')
    const button = document.getElementById('addSet')



    const clonedSet = set.cloneNode(true)
    container.appendChild(clonedSet)

}


const addCard = () => {
    const card = document.getElementById('exerciseCard')
    const sets = document.getElementById('sets')
    const reps = document.getElementById('reps')
    const load = document.getElementById('load')


    const clonedCard = card.cloneNode(true)

    card.append(clonedCard)

}




const newExercise = () => {
    // Get references to the button and form container
    const formContainer = document.getElementById('exerciseInfo');




    // Create a new form element
    const newForm = document.createElement('form');
    const div = document.getElementById('exerciseCont')

    newForm.action = '/user/training-log'
    newForm.method = 'POST'
    newForm.classList.add('exercise')
    
    // Create an input field with a unique ID
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Exercise Name';
    inputName.name = `name`;
    inputName.classList.add('exerciseName')


    const inputSets = document.createElement('input');
    inputSets.type = 'Number';
    inputSets.name = `sets`;
    inputSets.placeholder = 'sets';
    inputSets.classList.add('SRL')

    const inputReps = document.createElement('input');
    inputReps.type = 'Number';
    inputReps.name = `reps`;
    inputReps.placeholder = 'reps';
    inputReps.classList.add('SRL')

    const inputLoad = document.createElement('input');
    inputLoad.type = 'Number';
    inputLoad.placeholder = 'load';
    inputLoad.name = `load`;
    inputLoad.classList.add('SRL')



    // Append the input and submit button to the form
    newForm.appendChild(inputName);
    newForm.appendChild(inputSets);
    newForm.appendChild(inputReps);
    newForm.appendChild(inputLoad);



    // Append the new form to the form container
    div.append(newForm);
}


const submitAll = () => {

    const forms = document.querySelectorAll('form')

    forms.forEach((form) => {
        form.submit
    })
    }
