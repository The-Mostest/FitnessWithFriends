const addSets = () => {
    const container = document.getElementById('exerciseCont')
    const set = document.getElementById('exerciseInfo')
    const addSet = document.getElementById('addSet')

    let setPlus = document.getElementById('sets')
    setPlus++
    const clonedSet = set.cloneNode(true)
    container.appendChild(clonedSet)
}



