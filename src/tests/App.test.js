import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import App from "../App";
import { ApolloProvider } from "@apollo/client";

describe("Pruebas en App", () => {
  let wrapper;
  const clientConfig = jest.fn();
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

  test("Comprobar que se añade correctamente la inicializacion de ApolloProvider", () => {
    const apolloWrapper = mount(<ApolloProvider client={clientConfig} />);
    expect(apolloWrapper).toEqual({});
  });
});
