import { memo } from 'react';

export interface MemoizeProps {
  children: React.ReactNode;
}

const ToMemoize = ({ children }: MemoizeProps) => <>{children}</>;

const Memoize = memo(ToMemoize);

export default Memoize;
