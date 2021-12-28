import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Layout from "../../core/Layout";


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
});
