import { ReactNode } from '@tanstack/react-router';
import { FC } from 'react';

interface IProps {
  children: ReactNode;
}

export const CardWrapper: FC<IProps> = ({ children }) => {
  return <div className="bg-white p-6 h-full rounded-3xl">{children}</div>;
};
