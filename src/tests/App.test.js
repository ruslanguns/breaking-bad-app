import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("Pruebas en App", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("Debe de mostrar <App /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar componentes asociados", () => {
    expect(wrapper.find("ApolloProvider").length).toBe(1);
    expect(wrapper.find("Layout").length).toBe(1);
  });

});
