import { FC } from 'react';
import { css } from '../../../styled-system/css';
import Button from './Button';

interface ToastProps {
  message: string;
  variant?: 'success' | 'info' | 'warning' | 'error';
  actionLabel?: string;
  onActionClick?: () => void;
  onClose: () => void;
  icon?: string;
}

const Toast: FC<ToastProps> = ({ message, variant = 'success', actionLabel, onActionClick, onClose, icon }) => {
  const toastStyles = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '100',
    borderRadius: '8',
    bg: 'neutral.100',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    fontSize: 'sm',
    fontWeight: 'medium',
    justifyContent: 'space-between',
    '@media (max-width: 480px)': {
      alignItems: 'flex-start',
      gap: '12px',
      padding: '150',
    },
  });

  const iconStyles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    color: 'white',
    borderRadius: '50%',
    '@media (max-width: 480px)': {
      width: '20px',
      height: '20px',
    },
  });

  const actionStyles = css({
    color: 'neutral.950',
    cursor: 'pointer',
    fontWeight: 'semibold',
    textDecoration: 'underline',
    lineHeight: 'snug',
    letterSpacing: 'tightest',
    '@media (max-width: 480px)': {
      fontSize: 'xs',
    },
  });

  const closeButtonStyles = css({
    background: 'transparent',
    border: 'none',
    color: 'neutral.500',
    cursor: 'pointer',
    fontSize: 'lg',
    width: '16px',
    height: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      fontSize: 'md',
      alignSelf: 'flex-end',
    },
  });

  const messageStyles = css({
    fontSize: 'sm',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    letterSpacing: 'tightest',
    lineHeight: 'snug',
    '@media (max-width: 480px)': {
      fontSize: 'xs',
      textAlign: 'left',
      width: '100%',
    },
  });

  return (
    <div className={toastStyles}>
      {icon && (
        <div className={iconStyles}>
          <img src={icon} alt="icon" />
        </div>
      )}
      <div className={messageStyles}>
        <p>{message}</p>
        {actionLabel && (
          <span className={actionStyles} onClick={onActionClick}>
            {actionLabel}
          </span>
        )}
      </div>
      <Button variant="secondary" className={closeButtonStyles} onClick={onClose}>
        ✕
      </Button>
    </div>
  );
};

export default Toast;
