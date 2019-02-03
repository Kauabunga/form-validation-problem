import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const SelectField = ({ label, id, name, options, value, onChange, error }) => (
  <p className={classNames(null, { error })}>
    {/* https://github.com/evcohen/eslint-plugin-jsx-a11y/pull/503 */}
    {/* eslint-disable-next-line jsx-a11y/label-has-for */}
    <label className={classNames("label")} htmlFor={id}>
      <span>{label}</span>

      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        name={name}
        id={id}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </p>
);

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.bool.isRequired
};

export default SelectField;
