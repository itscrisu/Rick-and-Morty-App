import React from "react";
import Character from "./Character";
import { getCharacters, getCharactersBySearch } from "../services/characters";
import Title from "./Title";
import Search from "./Search";

// Componente tipo Class
// Todos los componentes tienen un clico de vida / pasan por varias etapas.

// Un estado es un valor interno que tiene un componente que va a estar cambiando.
// super es una manera en la que vamos a ejecutar al metodo constructor del componente madre (React.Component en este caso)

class CharacterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isFetch: true,
    };
  }

  async componentDidMount() {
    const responseJson = await getCharacters();
    this.setState({ characters: responseJson.results, isFetch: false });
  }

  handleSearch = async (search) => {
    const responseJson = await getCharactersBySearch(search);
    this.setState({ characters: responseJson.results });
  };

  render() {
    const { isFetch, characters } = this.state; // destructuracion === const isFetch = this.state.isFetch && const characters = this.state.characters

    if (isFetch) {
      return "Loading..";
    }
    // const name = this.state.characters[0].name
    return (
      <>
        <Title> Rick and Morty App! </Title>
        <Search handleSearch={this.handleSearch} />
        <section className="characters-container">
          {characters.map((character) => (
            <Character
              image={character.image}
              name={character.name}
              origin={character.origin.name}
              location={character.location.name}
              status={character.status}
              species={character.species}
              key={character.id}
            />
          ))}
        </section>
      </>
    );
  }
}

export default CharacterContainer;
