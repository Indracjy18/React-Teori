import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";

function App() {
  const initialState = {
    nama: "",
    hobby: "",
    agama: "",
  };
  const [data, setData] = useState(initialState);
  const { nama, hobby, agama } = data;
  const handleSubmit = (e) => {
    {
      /* sebelum logic / initiate script di onsSubmit harus e.preventDefault */
    }
    e.preventDefault();
    console.log(data);
    setData(initialState);
  };
  const handleChange = (e) => {
    //set nama dari event,value dari apa yg mau kita ketik

    //menggunakan spread operator
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">nama</label>
          {/*nilai value harus nama state yang kita buat */}
          <input type="text" onChange={handleChange} value={nama} name="nama" />
          <label htmlFor="">Hobby</label>
          <input
            type="text"
            onChange={handleChange}
            value={hobby}
            name="hobby"
          />
          <label htmlFor="">Agama</label>
          <input
            type="text"
            onChange={handleChange}
            value={agama}
            name="agama"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
