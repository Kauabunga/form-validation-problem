import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const CheckboxField = ({ id, label, value, onChange, options, error }) => {
  const isSelected = targetValue => (value || []).indexOf(targetValue) !== -1;
  const onSelect = selectValue =>
    isSelected(selectValue)
      ? onChange(
          (value || []).filter(currentValue => currentValue !== selectValue)
        )
      : onChange([...(value || []), selectValue]);

  return (
    <p id={id} className={classNames(null, { error })}>
      <span className={classNames("label")}>
        <span>{label}</span>
      </span>

      {options.map(option => (
        <label key={option.value} htmlFor={option.value}>
          <input
            onChange={() => onSelect(option.value)}
            type="checkbox"
            name={option.value}
            value={option.value}
            id={option.value}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </p>
  );
};

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.bool.isRequired
};

export default CheckboxField;
