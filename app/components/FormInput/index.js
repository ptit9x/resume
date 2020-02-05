import React from 'react';
import { FormattedMessage } from 'react-intl';

function FormInput({
  className,
  name,
  data,
  formatMessage,
  onUpdateState,
  textarea,
}) {
  const handleFocus = event => {
    const { name } = event.target;
    const clone = Object.assign({}, data);
    clone.used = true;
    onUpdateState(name, clone);
  };

  const handleInput = event => {
    const { name, value } = event.target;
    const clone = Object.assign({}, data);
    clone.value = value;
    onUpdateState(name, clone);
  };

  const handleInputValidation = event => {
    const { name, value } = event.target;
    const clone = Object.assign({}, data);
    clone.used = !!value;
    const errors = data.validates.map(validate => validate(value));
    clone.errorMessage = errors && errors.length > 0 ? errors.join(', ') : '';
    onUpdateState(name, clone);
  };

  return (
    <div
      className={`input-field ${data.errorMessage.length <= 0 ? '' : 'error'}${
        data.used ? ' used' : ''
      }`}
    >
      {textarea ? (
        <textarea
          className={className}
          rows={4}
          name={name}
          value={data.value}
          onFocus={handleFocus}
          onChange={handleInput}
          onBlur={handleInputValidation}
        />
      ) : (
        <input
          className={className}
          type="text"
          name={name}
          value={data.value}
          onFocus={handleFocus}
          onChange={handleInput}
          onBlur={handleInputValidation}
        />
      )}
      <span className="line" />
      <label>
        <FormattedMessage {...formatMessage}>{txt => txt}</FormattedMessage>{' '}
      </label>
    </div>
  );
}

export default FormInput;
