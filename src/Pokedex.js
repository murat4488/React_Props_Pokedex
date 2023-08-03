import Pokecard from "./Pokecard";

const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokedex = ({ list }) => {
  return (
    <div>
      {list.map((p) => (
        <Pokecard
          key={p.id}
          name={p.name}
          image={url + p.id + ".png"}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
