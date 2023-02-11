const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },

    {
      "artist" : "Teuku",
      "title" : "Doremi",
      "release_year" : 2088,
      
      "formats" : [
        "CD",
        "Album",
        "Cloud Driver"
      ]
    }
  ];
  
  console.log(myMusic);

//-----------------------------------------------------------------------------------------------------------------------

// Accessing Nested Object

// const ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

const myStorage = {
  "car" : {
    "inside" : {
      "glove box" : "maps",
      "pasengger seat" : "crumbs",
    },
    "outside" : {

    }
  }
}
'use strict';
const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);