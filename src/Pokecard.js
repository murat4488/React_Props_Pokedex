import "./Pokedex.css";

const Pokecard = ({ name, image, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h5 className="Pokecard-name">{name}</h5>
      <img className="Pokecard-img" src={image} />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
