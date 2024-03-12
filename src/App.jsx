import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import CreateForm from "./components/CreateForm";

function App() {
  const [nama, setNama] = useState("");
  //kirim function dari parent componentnya
  const onCreate = (data) => {
    console.log("console dari parent component", data);
    //update state dari parent
    setNama(data.nama);
  };
  return (
    //onCreate 1 sebagai props

    <>
      <CreateForm onCreate={onCreate} />
      {nama}
    </>
  );
}

export default App;
