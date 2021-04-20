//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    let final_arr = []
    let new_arr = arr.map(arr => arr.toLowerCase())
    let new_str = str.toLowerCase()
    let x = new_arr.map( i => { 
        if(new_str.includes(i)){
            final_arr.push('Matched dog name')
        } else{
            final_arr.push('Not a Match')
        }
    })
    return final_arr 
}
  
console.log(findWords(dog_string, dog_names))
// OUTPUT FROM CONSOLE:
// main.js:23 (4) ["Matched dog name", "Not a Match", "Matched dog name", "Matched dog name"]

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if( i % 2 == 0 ){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

console.log(replaceEvens(array))

// OUTPUT FROM CONSOLE:
// main.js:42 (6) ["even index", "Baseball", "even index", "Goku", "even index", "Rodger"]


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]