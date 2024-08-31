const { LocalStorage } = require('node-localstorage');

// Initialize LocalStorage with a directory
const localStorage = new LocalStorage('/scratch');

function createItem(props) {
   if (props === null) {
      localStorage.setItem('theFirstKey', 'theFirstValue');
      return localStorage.getItem('theFirstKey');
   }
}

console.log(createItem(null));
