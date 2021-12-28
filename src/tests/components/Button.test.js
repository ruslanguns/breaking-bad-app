import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Button from "../../components/Button";

describe("Pruebas en Button", () => {
  const label = "Anartz";
  const wrapper = shallow(<Button label={label} />);

  test("Debe de mostrar <Button /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Comprobar que texto del label es correcto", () => {
    expect(wrapper.text()).toBe(label);
  });

  test("Comprobar que las clases añadidas coinciden con lo establecido", () => {
    const className = "btn btn-info btn-lg btn-block custom-button";
    expect(wrapper.find("button").props().className).toBe(className);
  });
});
