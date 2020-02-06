import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormInput({
  className,
  formName,
  formValue,
  formatMessage,
  onUpdateState,
  isTextarea,
}) {
  const handleFocus = event => {
    const { name } = event.target;
    const clone = Object.assign({}, formValue);
    clone.used = true;
    onUpdateState(name, clone);
  };

  const handleInput = event => {
    const { name, value } = event.target;
    const clone = Object.assign({}, formValue);
    clone.value = value;
    onUpdateState(name, clone);
  };

  const handleInputValidation = event => {
    const { name, value } = event.target;
    const clone = Object.assign({}, formValue);
    clone.used = !!value;
    const errors = formValue.validates.map(validate => validate(value));
    clone.errorMessage = errors && errors.length > 0 ? errors.join(', ') : '';
    onUpdateState(name, clone);
  };

  return (
    <div
      className={`input-field 
        ${formValue.errorMessage.length <= 0 ? '' : 'error'}
        ${formValue.used ? ' used' : ''}`}
    >
      {isTextarea ? (
        <textarea
          className={className}
          rows={4}
          name={formName}
          value={formValue.value}
          onFocus={handleFocus}
          onChange={handleInput}
          onBlur={handleInputValidation}
        />
      ) : (
        <input
          className={className}
          type="text"
          name={formName}
          value={formValue.value}
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

FormInput.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string,
  formValue: PropTypes.object,
  formatMessage: PropTypes.object,
  onUpdateState: PropTypes.func,
  isTextarea: PropTypes.bool,
};

export default FormInput;
