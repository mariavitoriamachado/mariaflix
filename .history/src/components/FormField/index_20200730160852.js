import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
        <label>
        htmlFor={fieldId}
        >
        {label} 
        :
        <input
            id={fieldId}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
        />
    </label>
    </div>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default FormField;
