import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Footer from "../../core/Footer";
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  
}));
describe("Pruebas en Footer", () => {
  const wrapper = shallow(<Footer />);

  test("Debe de mostrar <Footer /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Comprobando el texto del Footer si es correcto", () => {
    const expectText = `Breaking Bad with React - Anartz Mugika Ledo -  ${new Date().getFullYear()}  /   label english spanish basque`;
    expect(wrapper.find("p").text()).toBe(expectText);
  });

  test("Comprobar que se aplica correctamente el estilo al div principal", () => {
    const expectClassName = "footer";
    expect(wrapper.find("div").props().className).toBe(expectClassName);
  });

  test("Cambiar de idioma", () => {
    // wrapper.find("button").at(1).simulate("click");
  })
});
