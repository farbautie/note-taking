import { ButtonHTMLAttributes, FC } from 'react';
import { css, cx } from '../../../styled-system/css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'border';
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', isDisabled = false, ...props }) => {
  const baseStyles = css({
    display: 'inline-block',
    paddingX: '200',
    paddingY: '150',
    fontSize: '14px',
    fontWeight: 'semibold',
    borderRadius: '6',
    textAlign: 'center',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    _hover: {
      transform: 'scale(1.02)',
    },
    _active: {
      transform: 'scale(0.98)',
    },
    _disabled: {
      cursor: 'not-allowed',
    },
  });

  const primaryStyles = css({
    backgroundColor: isDisabled ? 'neutral.100' : 'blue.500',
    color: isDisabled ? 'neutral.300' : 'white',
    _hover: { bg: isDisabled ? 'neutral.100' : 'blue.600' },
    _focus: { outline: '2px solid', outlineColor: 'blue.300' },
  });

  const secondaryStyles = css({
    backgroundColor: isDisabled ? 'neutral.50' : 'neutral.300',
    color: isDisabled ? 'neutral.300' : 'black',
    border: '1px solid',
    borderColor: isDisabled ? 'neutral.300' : 'neutral.400',
    _hover: { backgroundColor: isDisabled ? 'neutral.100' : 'neutral.300' },
    _focus: { outline: '2px solid', outlineColor: 'neutral.400' },
  });

  const borderStyles = css({
    backgroundColor: 'transparent',
    color: isDisabled ? 'neutral.300' : 'black',
    border: '2px solid',
    borderColor: isDisabled ? 'neutral.300' : 'black',
    _hover: { backgroundColor: isDisabled ? 'transparent' : 'neutral.50' },
    _focus: { outline: '2px solid', outlineColor: 'black' },
  });

  const variantStyles =
    variant === 'primary' ? primaryStyles : variant === 'secondary' ? secondaryStyles : borderStyles;

  return (
    <button className={cx(baseStyles, variantStyles)} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};

export default Button;