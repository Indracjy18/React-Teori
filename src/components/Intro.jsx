const Intro = (props) => {
  const handleClick = (nama) => {
    console.log("click" + nama);
  };

  return (
    <div>
      <p>nama saya {props.nama}</p>
      <p>hobby saya {props.hobby}</p>
      <p>umur saya {props.umur}</p>
      {/* cara ngeparse value ke handle click*/}
      <button onClick={() => handleClick(props.nama)}>CLICK ME</button>
    </div>
  );
};

export default Intro;
