
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
let oneName = ["name", "level"]

function orderByProps(obj, oneName ) {

let arrSort = [];
let resultSorttwo = []


 for (const key in obj) {
   if (oneName .includes(key)) {
     arrSort.push({key, value: obj[key]})
   } else {
      resultSorttwo.push({key, value: obj[key]})
   }
 }

let sort = resultSorttwo.sort((x, y) => x.key.localeCompare(y.key))

let result = [...arrSort, ...sort]

return result
  
}