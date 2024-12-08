import { useState } from 'react';
import { css } from '../styled-system/css';
import Modal from './components/ui/Modal';

import TrashIcon from './assets/images/icon-delete.svg';
import ArchiveIcon from './assets/images/icon-archive.svg';

export default function App() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isArchiveModalOpen, setArchiveModalOpen] = useState(false);

  return (
    <div className={css({ padding: '24px' })}>
      <button
        className={css({ padding: '8px 16px', bg: 'red.500', color: 'white', borderRadius: '8px' })}
        onClick={() => setDeleteModalOpen(true)}
      >
        Open Delete Modal
      </button>
      <button
        className={css({
          padding: '8px 16px',
          bg: 'blue.500',
          color: 'white',
          borderRadius: '8px',
          marginLeft: '16px',
        })}
        onClick={() => setArchiveModalOpen(true)}
      >
        Open Archive Modal
      </button>

      {isDeleteModalOpen && (
        <Modal
          title="Delete Note"
          description="Are you sure you want to permanently delete this note? This action cannot be undone."
          icon={TrashIcon}
          primaryAction={{
            label: 'Delete Note',
            onClick: () => {
              alert('Note deleted!');
              setDeleteModalOpen(false);
            },
            variant: 'danger',
          }}
          secondaryAction={{
            label: 'Cancel',
            onClick: () => setDeleteModalOpen(false),
          }}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}

      {isArchiveModalOpen && (
        <Modal
          title="Archive Note"
          description="Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
          icon={ArchiveIcon}
          primaryAction={{
            label: 'Archive Note',
            onClick: () => {
              alert('Note archived!');
              setArchiveModalOpen(false);
            },
            variant: 'primary',
          }}
          secondaryAction={{
            label: 'Cancel',
            onClick: () => setArchiveModalOpen(false),
          }}
          onClose={() => setArchiveModalOpen(false)}
        />
      )}
    </div>
  );
}
