import Card from "../../components/Card";
import { shallow } from "enzyme";

describe("Pruebas de <Card /> en 'Principal Characters'", () => {
  const character = {
    id: "1",
    name: "Walter White",
    description:
      'Walter "Walt" Hartwell White, también conocido por su seudónimo clandestino "Heisenberg", es un químico y profesor de química de Albuquerque, Nuevo México que, tras ser diagnosticado con cáncer de pulmón inoperable, decide empezar a fabricar metanfetamina para poder mantener a su familia provista de cara al futuro"',
    portrayed: "Bryan Cranston",
    total_episodes: 62,
    votes: 3797,
    url: "https://es.wikipedia.org/wiki/Walter_White",
    img: "https://raw.githubusercontent.com/graphql-course/5-breaking-bad-graphql-voting/master/photos/BB-S5B-Walt-590.jpg",
    __typename: "Character",
  };
  const wrapper = shallow(
    <Card character={character} useLabel={"More info"} />
  );

  test("Debe de mostrar <Button /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Comprobar que las propiedades de imagen correctas", () => {
    const imageProps = wrapper.find("img").props();
    expect(imageProps.src).toBe(character.img);
    expect(imageProps.alt).toBe(character.name);
    expect(imageProps.className).toBe("card-img-top");
  });

  test("Comprobar que texto del nombre de personaje es correcto", () => {
    expect(wrapper.find("h5").text()).toBe(character.name);
  });

  test("Comprobar que la descripción es la correcta", () => {
    expect(wrapper.find(".truncate").at(0).text()).toBe(character.description);
  });
  /*
  test("Comprobar que las temporadas en que aparece se renderizan bien en el formato deseado", () => {
    expect(wrapper.find("p").at(1).text()).toBe(
      `Appearance Seasons: ${character.appearance.join(", ")}`
    );
  });*/
});
