function getStates() {
    return fetch('states.json')
        .then(response => response.json())
}
getStates().then(states => {
    console.log(states); 
});

