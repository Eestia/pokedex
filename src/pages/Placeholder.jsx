import './Placeholder.css';
// import ball from '../assets/simple_pokeball.gif'
function Placeholder() {

  return (
    <div className="Layout">
      <div id='ecran'>
        <div id='ecran3'>
            <img src="/pokedex/simple_pokeball.gif" alt="" />
            <h3>please wait</h3>
        </div>
      </div>
      <div id='pokeball'>
        <div className="line-horizontal"></div>
        <div className="centered-div">
          <div className="centered-div2"></div>
        </div>
      </div>
    </div>
  );
}

 export default Placeholder;