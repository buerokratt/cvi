import React, { FC, useState } from 'react';

type InputProps = {
  label: string;
  maxLength?: number;
  showMaxLength?: boolean;
  disabled?: boolean;
};

const InputComponent: FC<InputProps> = ({
  label,
  maxLength = 2000,
  showMaxLength = false,
  disabled = false,
}) => {
  const [currentLength, setCurrentLength] = useState(0);

  return (
    <div className="cvi-form-item cvi-form-item--label-position-top">
      <label className="cvi-form-item__label">{label}</label>
      <div className="cvi-textfield cvi-textfield--type-single-line">
        <input
          type="text"
          className="cvi-textfield__text-control"
          maxLength={maxLength}
          disabled={disabled}
          onChange={(e) => {
            if (showMaxLength) setCurrentLength(e.target.value.length);
          }}
        />
        {showMaxLength && (
          <div className="cvi-character-counter">
            <label className="cvi-character-counter">
              {currentLength}/{maxLength}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
