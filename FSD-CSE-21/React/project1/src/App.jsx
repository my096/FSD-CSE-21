// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div>
//       <div style={{display:"flex", gap:"5px"}}>
//         <Card  name="BMW" price="2000000" img="https://img.magnific.com/premium-vector/blue-car-emoticon-funny-car-face-character-smiles-icons-vector-illustration_1041562-1753.jpg?semt=ais_hybrid&w=740&q=80" />
//         <br />
//         <Card name="NANO" price="300000" img=""/>
//         <br />
//         <Card name="ALTO" price="200000" img=""/>
//       </div>
//     </div>
//   );
// }

// export default App

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
 
function Home() {
  return <h1>THIS IS MY HOME</h1>
}
function About() {
  return <h1>THIS IS MY ABOUT</h1>;
}
function Phone() {
  return <h1>THIS IS MY PHONE</h1>;
}

 
 const App = () => {
   return (
     <div>
       <BrowserRouter>
         <nav>
           <Link to="/">Home</Link>|{" "}
           <Link to="/about">About</Link>|{" "}
           <Link to="/phone"> Phone no.</Link>|{" "}
         </nav>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>} />
           <Route path="/phone" element={<Phone/>} />
         </Routes>
       </BrowserRouter>
     </div>
   );
 }
 
 export default App