import { FC } from 'react';
import { css } from '../../../styled-system/css';
import Button from './Button';

interface ModalProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick: () => void;
    variant: 'primary' | 'danger';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  icon?: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, description, primaryAction, secondaryAction, icon, onClose }) => {
  const overlayStyles = css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  });

  const modalStyles = css({
    width: '400px',
    bg: 'white',
    borderRadius: '16',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '90%',
    },
    '@media (max-width: 480px)': {
      width: '95%',
    },
  });

  const headingStyles = css({
    padding: '250',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    borderBottom: '1px solid',
    borderColor: 'neutral.200',
    '@media (max-width: 480px)': {
      padding: '200',
    },
  });

  const iconStyles = css({
    width: '45px',
    height: '45px',
    padding: '100',
    borderRadius: '8',
    backgroundColor: 'neutral.100',
    color: 'neutral.950',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const titleStyles = css({
    fontSize: 'lg',
    fontWeight: 'bold',
    color: 'neutral.950',
    '@media (max-width: 480px)': {
      fontSize: 'md',
    },
  });

  const descriptionStyles = css({
    fontSize: 'sm',
    color: 'neutral.700',
    letterSpacing: 'tightest',
    lineHeight: 'snug',
    '@media (max-width: 480px)': {
      fontSize: 'xs',
      paddingTop: '8px',
    },
  });

  const buttonGroupStyles = css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '200',
    borderTop: '1px solid',
    borderColor: 'neutral.200',
    '@media (max-width: 480px)': {
      gap: '8px',
    },
  });

  return (
    <div className={overlayStyles} onClick={onClose}>
      <div className={modalStyles} onClick={(e) => e.stopPropagation()}>
        <div className={headingStyles}>
          <img src={icon} alt="icon" className={iconStyles} />
          <div>
            <h2 className={titleStyles}>{title}</h2>
            <p className={descriptionStyles}>{description}</p>
          </div>
        </div>
        <div className={buttonGroupStyles}>
          {secondaryAction && (
            <Button variant="secondary" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
          <Button variant={primaryAction.variant} onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
