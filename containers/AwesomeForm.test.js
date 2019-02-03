import React from "react";
import { render, mount } from "enzyme";

import AwesomeForm from "./AwesomeForm";

describe("AwesomeForm", () => {
  it("It should render the initial view of the form", () => {
    const component = render(<AwesomeForm />);
    expect(component).toMatchSnapshot();
  });
});

describe("AwesomeForm validation", () => {
  let handleSubmit;
  let component;

  const getTextField = name => () =>
    component.find(`fieldset > [name="${name}"]`);
  const getInput = name => () => component.find(`input[name="${name}"]`);

  const getSelectField = name => () =>
    component.find(`fieldset > [name="${name}"]`);
  const getSelect = name => () => component.find(`select[name="${name}"]`);

  const getCheckboxField = value => () =>
    component.find(`fieldset > [name="${value}"]`);
  const getCheckbox = value => () => component.find(`input[name="${value}"]`);

  const getEmailTextField = getTextField("email");
  const getEmailInput = getInput("email");
  const getPasswordTextField = getTextField("password");
  const getPasswordInput = getInput("password");
  const getColourSelectField = getSelectField("colour");
  const getColourSelect = getSelect("colour");
  const getAnimalCheckboxField = getCheckboxField("animal");
  const getAnimalCheckbox = animalValue => getCheckbox(animalValue)();
  const getTigerTypeTextField = getTextField("tiger_type");
  const getTigerTypeInput = getInput("tiger_type");

  const getSubmitButton = () => component.find('input[type="submit"]');

  const inputTypeText = (input, value) =>
    input.simulate("change", {
      target: { value }
    });
  const selectCheckbox = input =>
    input.simulate("change", {
      target: { value: "bear" }
    });
  const selectOption = (input, value) =>
    input.simulate("change", {
      target: { value }
    });

  beforeEach(() => {
    handleSubmit = jest.fn();
    component = mount(<AwesomeForm onSubmit={handleSubmit} />);
  });

  afterEach(() => {
    component.unmount();
  });

  it("should not submit an empty/invalid form", () => {
    getSubmitButton().simulate("submit");

    expect(handleSubmit).toBeCalledTimes(0);
  });

  it("should submit a valid form", () => {
    expect(getEmailTextField(component).props().valid).toBeFalsy();

    inputTypeText(getEmailInput(), "hello@carson.kiwi");
    inputTypeText(getPasswordInput(), "VALID_PASSWORD_WITH_8_CHARACTERS");
    selectOption(getColourSelect(), "Blue");
    selectCheckbox(getAnimalCheckbox("bear"));
    selectCheckbox(getAnimalCheckbox("tiger"));
    selectCheckbox(getAnimalCheckbox("snake"));
    selectCheckbox(getAnimalCheckbox("donkey"));
    inputTypeText(getTigerTypeInput(), "MY_TIGER_TYPE");

    getSubmitButton().simulate("submit");

    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith({
      animal: ["bear", "tiger", "snake", "donkey"],
      colour: "Blue",
      email: "hello@carson.kiwi",
      password: "VALID_PASSWORD_WITH_8_CHARACTERS",
      tigerType: "MY_TIGER_TYPE"
    });
  });

  it("should validate the email field", () => {
    expect(getEmailTextField(component).props().valid).toBeFalsy();

    inputTypeText(getEmailInput(), "INVALID_EMAIL_ADDRESS");
    expect(getEmailTextField(component).props().valid).toBeFalsy();

    inputTypeText(getEmailInput(), "hello@carson.kiwi");
    expect(getEmailTextField(component).props().valid).toBeTruthy();
  });

  it("should validate the password field", () => {
    expect(getPasswordTextField(component).props().valid).toBeFalsy();

    inputTypeText(getPasswordInput(), "INVALID");
    expect(getPasswordTextField(component).props().valid).toBeFalsy();

    inputTypeText(getPasswordInput(), "VALID_PASSWORD_WITH_8_CHARACTERS");
    expect(getPasswordTextField(component).props().valid).toBeTruthy();
  });

  it("should validate the colour field", () => {
    expect(getColourSelectField(component).props().valid).toBeFalsy();

    selectOption(getColourSelect(), "Blue");
    expect(getColourSelectField(component).props().valid).toBeTruthy();
  });

  it("should validate the animal field", () => {
    expect(getAnimalCheckboxField(component).props().valid).toBeFalsy();
    expect(getAnimalCheckboxField(component).props().value).toEqual([]);

    selectCheckbox(getAnimalCheckbox("tiger"));
    expect(getAnimalCheckboxField(component).props().valid).toBeFalsy();
    expect(getAnimalCheckboxField(component).props().value).toEqual(["tiger"]);

    selectCheckbox(getAnimalCheckbox("snake"));
    expect(getAnimalCheckboxField(component).props().valid).toBeTruthy();
    expect(getAnimalCheckboxField(component).props().value).toEqual([
      "tiger",
      "snake"
    ]);

    selectCheckbox(getAnimalCheckbox("tiger"));
    expect(getAnimalCheckboxField(component).props().valid).toBeFalsy();
    expect(getAnimalCheckboxField(component).props().value).toEqual(["snake"]);
  });

  it("should validate the tiger type field", () => {
    expect(getTigerTypeTextField(component).props().valid).toBeTruthy();

    selectCheckbox(getAnimalCheckbox("tiger"));
    expect(getTigerTypeTextField(component).props().valid).toBeFalsy();

    inputTypeText(getTigerTypeInput(), "TIGER TYPE");
    expect(getTigerTypeTextField(component).props().valid).toBeTruthy();

    selectCheckbox(getAnimalCheckbox("tiger"));
    expect(getTigerTypeTextField(component).props().valid).toBeTruthy();
  });
});
