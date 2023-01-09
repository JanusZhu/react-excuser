import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [excuse, setExcuse] = useState("");
  const generateExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => setExcuse(res.data[0].excuse)
    );
  };

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button
        onClick={() => {
          generateExcuse("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          generateExcuse("office");
        }}
      >
        Office
      </button>
      <button
        onClick={() => {
          generateExcuse("college");
        }}
      >
        College
      </button>
      <h2>{excuse}</h2>
    </div>
  );
}

export default App;
