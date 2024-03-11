import "./App.css";
import Intro from "./components/Intro";

function App() {
  const datas = [
    {
      name: "Indra",
      hobby: "ngoding",
      umur: "26tahun",
    },

    {
      name: "Dita",
      obby: "Tiktok",
      umur: "25tahun",
    },
    {
      name: "Jiran",
      hobby: "Bermain",
      umur: "2tahun",
    },
  ];
  return (
    <>
      {/*  <Intro nama=" MAS INDRA" umur="26" hobby="ngoding" />
  <Intro nama=" KAK DITA" umur="25" hobby="maen tikto}k" />*/}

      <div>
        {datas.map((data, index) => {
          return (
            <Intro
              key={index}
              nama={data.name}
              hobby={data.hobby}
              umur={data.umur}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
