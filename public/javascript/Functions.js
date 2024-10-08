// const { text } = require("express")

const addSets = () => {
    // const container = document.getElementById('exerciseCont')
    // const set = document.getElementById('exerciseInfo')
    // const button = document.getElementById('addSet')
    console.log('working')


    // const clonedSet = set.cloneNode(true)
    // container.appendChild(clonedSet)

    // const setAttribute = (el, op) => {
    //     for (let key in attributes) {
    //         Element.setAttribute(key, attributes[key])
    //     }
    // }
    const addExerciseButton = document.getElementById('addExercise')
    const exForm = document.getElementById('exerciseInfo')
    const exerciseCard = document.createElement('div')
    const exerciseCont = document.createElement('div')

    const form = document.createElement('form')
    // setAttribute(form, { action: '', method: 'POST', id: 'exerciseInfo' })

    const name = document.createElement('input')
    // setAttribute(name, {type: text, placeholder: 'Exercise Name', name: 'exercise', id:'exercise'})

    const sets = document.createElement('input')
    // setAttribute(sets, {type: Number, placeholder: 'sets', name: 'sets', id:'sets'})

    const reps = document.createElement('input')
    // setAttribute(reps, {type: Number, placeholder: 'reps', name: 'reps', id:'reps'})

    const load = document.createElement('input')
    // setAttribute(load, {type: Number, placeholder: 'load', name: 'load', id:'load'})


    addSet.(exerciseCard)
    exerciseCard.append(exerciseCont)
    exerciseCard.appendChild(form)
    exerciseCard.appendChild(name)
    exerciseCard.appendChild(sets)
    exerciseCard.appendChild(reps)
    exerciseCard.appendChild(load)
}


const addCard = () => {
    const card = document.getElementById('exerciseCard')
    const sets = document.getElementById('sets')
    const reps = document.getElementById('reps')
    const load = document.getElementById('load')


    const clonedCard = card.cloneNode(true)

    card.append(clonedCard)

}
