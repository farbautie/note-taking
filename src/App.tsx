import { useState } from 'react';
import CheckIcon from './assets/images/icon-checkmark.svg';
import Toast from './components/ui/Toast';
type ToastVariant = 'success' | 'info' | 'warning' | 'error';

interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
  actionLabel?: string;
  onActionClick?: () => void;
}
export default function App() {
  const [toasts, setToasts] = useState<ToastItem[]>([
    {
      id: 1,
      message: 'Note saved successfully!',
      variant: 'success',
      actionLabel: 'View Note',
      onActionClick: () => alert('Viewing note'),
    },
    {
      id: 2,
      message: 'Note archived.',
      variant: 'info',
      actionLabel: 'Archived Notes',
      onActionClick: () => alert('Go to archived notes'),
    },
    {
      id: 3,
      message: 'Note permanently deleted.',
      variant: 'warning',
    },
    {
      id: 4,
      message: 'An error occurred.',
      variant: 'error',
    },
  ]);

  const handleRemoveToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          actionLabel={toast.actionLabel}
          onActionClick={toast.onActionClick}
          onClose={() => handleRemoveToast(toast.id)}
          icon={CheckIcon}
        />
      ))}
    </div>
  );
}
