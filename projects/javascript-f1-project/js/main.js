const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/${season.value}/${round.value}/driverStandings.json`)
    console.log(response.data)
    return response.data
}

const form = document.querySelector('#f1_data')

const DOM_ELEMENTS = {
    driver_list: '.driver-list'
}

const create_list = (position, familyName, name, nationality, points) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-dark">${position}    ${familyName}   ${name}    ${nationality}      ${points}</a>`;
    console.log(html)
    document.querySelector(DOM_ELEMENTS.driver_list).insertAdjacentHTML('beforeend', html)
}

const load_data = async () => {
    let drivers = await getData(season, round);
    let id = drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId
    console.log(id)
    console.log(drivers)
    drivers.forEach( element => create_list( element.id, element.familyName, element.name, element.nationality, element.points))
    // drivers.forEach(element => create_list( element.id, element.familyName, element.name, element.nationality, element.points))
    
}

const clear_data = () => {
    document.querySelector(DOM_ELEMENTS.driver_list).innerHTML = '';
}

// Add event listener for submit event(s)
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value

    f1_data(season, round)

    
//     load_data(season, round)
})

function f1_data(season, round){

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(function (response) {
        return response.json();
})
    .then(function (data) {
        console.log(data)
        let new_json = {}
        for (let i = 0; i<7; i++){
        let position = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
        let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
        let name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        // array.push(position,familyName,name,nationality,points)
        new_json[i] = {'position':position,'familyName':familyName,'name':name,'nationality':nationality,'points':points}
}
        console.log(Object.values(new_json))
        
        Object.values(new_json).forEach( element => create_list( element.position, element.familyName, element.name, element.nationality, element.points));
})
}

// function appendData(data) {
//     var mainContainer = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
//     for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("div");
//       div.innerHTML = 'Name: ' + data[i].id;
//       mainContainer.appendChild(div);
//     }
//   }