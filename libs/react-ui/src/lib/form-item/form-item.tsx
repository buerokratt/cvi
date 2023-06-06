import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';
import './form-item.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  hideLabel?: boolean;
  colorInput?: boolean;
  maxLength?: number;
};

const FormItem = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, disabled, hideLabel, colorInput, maxLength, ...rest },
    ref
  ) => {
    const id = useId();

    const inputClasses = clsx('input', disabled && 'input--disabled');

    return (
      <div className={inputClasses}>
        {label && !hideLabel && (
          <label htmlFor={id} className="input__label">
            {label}
          </label>
        )}
        <div className="input__wrapper">
          <input
            className={inputClasses}
            name={name}
            id={id}
            ref={ref}
            aria-label={hideLabel ? label : undefined}
            pattern={colorInput ? '^#([a-fA-F0-9]{3}){1,2}$' : undefined}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

export default FormItem;
