import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Header from "../../core/Header";

describe("Pruebas en Header", () => {
  const wrapper = shallow(<Header />);

  test("Debe de mostrar <Header /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de comprobar que tenemos 4 'NavLinks'", () => {
    expect(wrapper.find("NavLink").length).toBe(4);
  });

  test("Comprobando los textos de los 'NavLink'", () => {
    const labels = ["Breaking Bad", "Home", "Episodes", "Votes"];
    labels.map((element, index) =>
      expect(wrapper.find("NavLink").at(index).text()).toBe(element)
    );
  });

  test("Comprobar que se aplica correctamente el estilo implementado", () => {
    const expectClassName =
      "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";
    expect(wrapper.find("nav").props().className).toBe(expectClassName);
  });

  test("Comprobar si los elementos que dan acceso a las páginas son correctos", () => {
    const expectUlClassName = "navbar-nav me-auto mb-2 mb-lg-0";
    expect(wrapper.find("ul").props().className).toBe(expectUlClassName);
    const expectLiClassName = "nav-item";
    expect(wrapper.find("li").at(0).props().className).toBe(expectLiClassName);
    expect(wrapper.find("li").at(1).props().className).toBe(expectLiClassName);
    expect(wrapper.find("li").at(2).props().className).toBe(expectLiClassName);
  });
});
