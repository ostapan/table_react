/*
 * Generates initial data stub for application
 */

function getRandomId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0;
      let v = (c === 'x') ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
}

function getRandomColor() {    
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let initialCellsArray = Array(4);
for (let i = 0; i < 4; i++) {  
  initialCellsArray[i] = Array(4);
  let rowColor = getRandomColor();
  for (let j = 0; j < 4; j++) {    
    initialCellsArray[i][j] = {
      id: getRandomId(),
      color: rowColor
    };
  }
}

export { initialCellsArray as data };