import React, { useState, useEffect } from 'react';
import './App.css';
import './Background.css';
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";
import Body from "./components/Body/Body";
import Judul from "./components/Title/Judul";
import Prpil from "./components/Prfl/Prpil";
import Desc from "./components/Desc/Descc";
import RealtimeData from "./components/Firebase/RealtimeData";
import axios from 'axios';
import Data from "./components/Pengguna/Data";

function App() {
  const [penggunas, setPengguna] = useState(null);

  useEffect(function(){
    axios.get("http://localhost:8000/api/pengguna")
    .then(function(response){
      const penggunas = response.data.data;
      setPengguna(penggunas);
      console.log(penggunas);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="App">
        <div>
        </div>
        <div className="content-wrap">
          <Body />
          <Judul />
          <hr className="divider" />
          <Prpil />
          <hr className="divider" />
          <Desc />
          <hr className="divider" />
          <RealtimeData />
          <hr className="divider" />
          {penggunas && <Data penggunas={penggunas} />}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
