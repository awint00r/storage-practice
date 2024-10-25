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
    for (let i = 0; i < firstHalf.length; i++) {
        const state = firstHalf[i];
        console.log(state)
        const stateName = state.name;
        console.log(stateName)
        delete state.name;
        localStorage.setItem(stateName, JSON.stringify(state))
    }
});