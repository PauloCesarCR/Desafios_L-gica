
function inverter (array){

const inverterArray= []

  for (let i = array.length -1; i >= 0; i--){
    inverterArray.push(array[i])
  }
  console.log(inverterArray)
}

inverter([10,10,20,20,30])
inverter([10,10,20,20,40])
inverter(["a","b", "d", "e"])