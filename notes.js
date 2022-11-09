// Given an array of objects (people), return a different statement if the individual is a teacher vs a student.
// EXTRA: Return another DIFFERENT statement when the person isn't cool.

// let web29 = [
//     {
//       name: "Brady",
//       position: 'Tech Lead',
//       isCool: true
//     },
//     {
//       name: "Greg",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Jessica",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Peyton",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Quinten",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Tiara",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Holly",
//       position: 'Student',
//       isCool: true
//     },
//     {
//       name: "Scott",
//       position: 'Tech Lead',
//       isCool: false
//     },
//   ]
  
//   function logStuff() {
//     for(let i = 0; i < web29.length; i++) {
//       if(web29[i].position === 'Tech Lead') {
//         console.log("Heyyyyy, its a person.")
//       } else {
//         console.log("Hey, I'm pretty neat.")
//       }
//     }
//   }
  
//   for(let taco of web29) {
//       if(taco.position === 'Tech Lead') {
//         console.log("Heyyyyy, its a person.")
//       } else {
//         console.log("Hey, I'm pretty neat.")
//       }
//     }
//   if(person.position === 'Tech Lead') {
//     console.log("Heyyyyy, its a person.")
//   } else {
//     console.log("Hey, I'm pretty neat.")
//   }
//   web29.forEach((person, index) => person.position === "Tech Lead" ? console.log("Lead") : console.log('Stu'))
  
  
//     let results = web29.map((person, index) => person.position === "Tech Lead" ? "Lead" : "Stu")
  
//   console.log(results)




// import './App.css'
// import Hotel from './Hotel'

// export default function App() {
//   let bravo = 'This is the phonetic letter...'
  
//   let web29 = [
//     {
//       name: "Brady",
//       postiion: "Lead"
//     },
//     {
//       name: "Greg",
//       postiion: "Student"
//     },
//     {
//       name: "Holly",
//       postiion: "Student"
//     },
//     {
//       name: "Jess",
//       postiion: "Student"
//     },
//   ]

//   let results = web29.map((person) => {
//     return
//   })

//   return (
//     <main>
//       <h2>Hello</h2>
//       {results}
//       <Hotel mySecret={bravo}/>
//     </main>
//   )
// }

// import React from 'react'

// function Hotel(props) {
//   return (
//     <div>
//       <h1>This is Hotel</h1>
//       <h2>{props.mySecret}</h2>
//     </div>)
// }

// export default Hotel