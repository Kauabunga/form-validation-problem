import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const TextField = ({ label, id, type, name, value, onChange, error }) => (
  <p className={classNames(null, { error })}>
    <label className={classNames("label")} htmlFor={id}>
      <span>{label}</span>

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        id={id}
        name={name}
      />
    </label>
  </p>
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default TextField;
