import React from 'react';

function FormField({
  label, type, name, value, onChange,
}) {
  const fielId = `${name}`;
  return (
    <div>
      <label
        htmlFor={fielId}
      >
        {label}
        :
        <input
          id={fielId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
