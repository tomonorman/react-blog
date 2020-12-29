const Home = () => {
  
  const handleClick = (event) => {
    console.log("Hi everyone!");
  }

  const handleClickAgain = (name, event) => {
    console.log(`Hi ${name}!`, event.target);
  }
  
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      {/* Cannot use paraenthesis otherwise the function is automatically invoked without a click. So use an anoymous function */}
      <button onClick={(event) => handleClickAgain("Tomo", event)}>Click Me Again!</button>
    </div>
   );
}

export default Home;