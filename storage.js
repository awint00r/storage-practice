function getStates() {
    return fetch('states.json')
        .then(response => response.json())
}
getStates().then(data => {
    const states = data.states
    console.log(typeof states);
    const halfStates = Math.ceil(states.length / 2);
    console.log(typeof halfStates)
    const firstHalf = states.slice(0, halfStates)
    console.log(typeof firstHalf)
    const secondHalf = states.slice(halfStates);
    console.log(secondHalf) 
    for (let i = 0; i < firstHalf.length; i++) {
        const state = firstHalf[i];
        console.log(state)
        const stateName = state.name;
        console.log(stateName)
        delete state.name;
        const uppercaseStateName = stateName.toUpperCase();
        console.log(uppercaseStateName)
        const upperCaseValues = JSON.stringify(state).toUpperCase();
        console.log(upperCaseValues)
        localStorage.setItem(uppercaseStateName, upperCaseValues)
    }
    for (let i=0; i < secondHalf.length; i++) {
        const state = secondHalf[i]
        console.log(state)
        const capitalName = state.capital;
        console.log(typeof capitalName);
        delete state.capital;
        const lowerCaseCapital = capitalName.toLowerCase();
        console.log(lowerCaseCapital)
        const lowerCaseValues = JSON.stringify(state).toLowerCase();
        console.log(lowerCaseValues)

        sessionStorage.setItem(lowerCaseCapital, lowerCaseValues)
    }
});
