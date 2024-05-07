import { FC, lazy } from 'react';
import { DeleteCardProps } from './DeleteCardModal';

export const DeleteCardAsync = lazy<FC<DeleteCardProps>>(
  async () => await import('./DeleteCardModal')
);
