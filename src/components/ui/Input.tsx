import { InputHTMLAttributes, FC, useState } from 'react';
import { css } from '../../../styled-system/css';
import showIcon from '../../assets/images/icon-show-password.svg';
import hideIcon from '../../assets/images/icon-hide-password.svg';
import infoCircleIcon from '../../assets/images/icon-info.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  isDisabled?: boolean;
  hasError?: boolean;
}

const Input: FC<InputProps> = ({ label, hint, isDisabled = false, hasError = false, type = 'text', ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const baseStyles = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });

  const labelStyles = css({
    fontSize: 'sm',
    fontWeight: 'semibold',
    color: isDisabled ? 'neutral.400' : 'neutral.800',
  });

  const inputStyles = css({
    width: '100%',
    padding: '150',
    fontSize: 'xs',
    borderRadius: '8',
    border: '1px solid',
    borderColor: hasError ? 'red.500' : isDisabled ? 'neutral.300' : 'neutral.400',
    backgroundColor: isDisabled ? 'neutral.100' : 'white',
    color: isDisabled ? 'neutral.400' : 'neutral.800',
    _focus: {
      borderColor: hasError ? 'red.500' : 'blue.500',
      outline: '2px solid',
      outlineColor: hasError ? 'red.200' : 'blue.300',
    },
    _hover: {
      borderColor: isDisabled ? 'neutral.300' : 'neutral.600',
    },
    _placeholder: {
      color: isDisabled ? 'neutral.300' : 'neutral.500',
    },
    _disabled: {
      cursor: 'not-allowed',
    },
    transition: 'all 0.2s',
  });

  const hintStyles = css({
    fontSize: '12px',
    color: hasError ? 'red.500' : isDisabled ? 'neutral.300' : 'neutral.600',
  });

  const iconStyles = css({
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: isDisabled ? 'neutral.300' : 'neutral.500',
    _hover: {
      color: isDisabled ? 'neutral.300' : 'neutral.700',
    },
  });

  return (
    <div className={baseStyles}>
      <label className={labelStyles}>{label}</label>

      <div className={css({ position: 'relative', display: 'flex' })}>
        <input
          className={inputStyles}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          disabled={isDisabled}
          aria-invalid={hasError}
          {...props}
        />
        {type === 'password' && (
          <img
            className={iconStyles}
            src={isPasswordVisible ? hideIcon : showIcon}
            alt="toggle password visibility"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      {hint && (
        <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
          <img
            className={css({
              width: '16px',
              height: '16px',
              color: 'red.500',
            })}
            src={infoCircleIcon}
            alt="info circle"
          />
          <span className={hintStyles}>{hint}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
