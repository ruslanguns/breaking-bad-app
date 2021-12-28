import Card from "../../components/Card";
import { shallow } from "enzyme";

describe("Pruebas de <Card />", () => {
  const character = {
    char_id: 3,
    name: "Skyler White",
    birthday: "08-11-1970",
    occupation: [
      "House wife",
      "Book Keeper",
      "Car Wash Manager",
      "Taxi Dispatcher",
    ],
    img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    status: "Alive",
    nickname: "Sky",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Anna Gunn",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  };
  const wrapper = shallow(<Card character={character} />);

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

  test("Comprobar que las ocupaciones se renderizan bien en el formato deseado", () => {
    expect(wrapper.find("p").at(0).text()).toBe(
      character.occupation.join(", ")
    );
  });

  test("Comprobar que las temporadas en que aparece se renderizan bien en el formato deseado", () => {
    expect(wrapper.find("p").at(1).text()).toBe(
      `Appearance Seasons: ${character.appearance.join(", ")}`
    );
  });
});
