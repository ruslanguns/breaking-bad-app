import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Layout from "../../core/Layout";
import Home from './../../pages/Home';
import PrincipalCharsVotes from './../../pages/PrincipalCharsVotes';
import Episodes from './../../pages/Episodes';

describe("Pruebas en Layout", () => {
  const wrapper = shallow(<Layout />);

  test("Debe de mostrar <Layout /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Comprobar que Header y Footer son añadidos correctamente", () => {
    expect(wrapper.find('Header').exists()).toBe(true);
    expect(wrapper.find('Footer').exists()).toBe(true)
  });

  test("Comprobar que elemento Routes y sus Route inidividuales están OK", () => {
    expect(wrapper.find('Routes').exists()).toBe(true);
    expect(wrapper.find('Route').length).toBe(3);
  });

  test("Comprobando paths de los 'Route'", () => {
    const labels = ["", "/episodes", "/votes"];
    labels.map((element, index) =>
      expect(wrapper.find("Route").at(index).prop('path')).toBe(`/breaking-bad-app${element}`)
    );
  });

  test("Comprobando elements (Componentes que se cargan) en los 'Route'", () => {
      // TODO Pendiente de implementarlo
    const labels = [<Home />, <Episodes />, <PrincipalCharsVotes />];
    labels.map((element, index) =>
    console.log(wrapper.find("Route").at(index).prop('element')['type'])
      // expect(wrapper.find("Route").at(index).prop('element')).toBe(element)
    );
  });


});
