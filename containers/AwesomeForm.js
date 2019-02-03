import React, { useState } from "react";
import PropTypes from "proptypes";

import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import CheckboxField from "../components/CheckboxField";

const AwesomeForm = ({ onSubmit }) => {
  const { handleSubmit, isValid, fields } = useFormState();
  const { email, password, colour, animal, tigerType } = fields;

  const handleFormSubmit = e => {
    const values = handleSubmit();
    console.log("handleFormSubmit", values);

    if (!isValid) {
      e.preventDefault();
      return;
    }

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form
      noValidate
      method="post"
      action="/api/awesome"
      onSubmit={handleFormSubmit}
    >
      <h1>Fill out this awesome form</h1>

      <fieldset>
        <h3>Your details</h3>

        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          {...email}
        />

        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          {...password}
        />
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>

        <SelectField
          id="colour"
          name="colour"
          label="Colour"
          options={[
            { value: "", label: "Choose colour" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "red", label: "Red" },
            { value: "black", label: "Black" },
            { value: "brown", label: "Brown" }
          ]}
          {...colour}
        />

        <CheckboxField
          id="animal"
          name="animal"
          label="Animal"
          options={[
            { value: "bear", label: "Bear" },
            { value: "tiger", label: "Tiger" },
            { value: "snake", label: "Snake" },
            { value: "donkey", label: "Donkey" }
          ]}
          {...animal}
        />

        <TextField
          id="tiger_type"
          type="text"
          name="tiger_type"
          label="Type of tiger"
          {...tigerType}
        />
      </fieldset>

      <fieldset>
        <p>
          <input type="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  );
};

AwesomeForm.propTypes = {
  onSubmit: PropTypes.func
};

AwesomeForm.defaultProps = {
  onSubmit: () => {}
};

export default AwesomeForm;

function useFormState() {
  const [submitted, setSubmitted] = useState(false);

  const email = useFormInput("", { validate: validateEmail, submitted });
  const password = useFormInput("", { validate: validatePassword, submitted });

  const colour = useFormInput("", { validate: validateRequired, submitted });
  const animal = useFormInput([], { validate: validateSelected(2), submitted });

  const tigerType = useFormInput("", {
    validate: validateTigerValue(animal.value),
    submitted
  });

  const fields = {
    email,
    password,
    colour,
    animal,
    tigerType
  };

  const isValid = Object.values(fields).reduce(
    (formValid, { valid }) => formValid && valid,
    true
  );

  const values = Object.keys(fields).reduce(
    (acc, fieldName) => ({ ...acc, [fieldName]: fields[fieldName].value }),
    {}
  );

  const onSubmit = () => {
    setSubmitted(true);
    return values;
  };

  return {
    submitted,
    handleSubmit: onSubmit,
    isValid,
    values,
    fields
  };
}

function useFormInput(initialValue, { validate, submitted } = {}) {
  const [value, setValue] = useState(initialValue);
  const valid = validate ? validate(value) : true;
  const error = submitted && !valid;

  return {
    value,
    valid,
    error,
    onChange: setValue
  };
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
  return !!value && value.length > 8;
}

function validateRequired(value) {
  return !!value;
}

function validateSelected(count = 1) {
  return value => validateRequired(value) && value.length >= count;
}

function validateTigerValue(animalValues) {
  return value =>
    (animalValues || []).indexOf("tiger") !== -1
      ? validateRequired(value)
      : true;
}
