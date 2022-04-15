import { ReactNode } from 'react';

export interface StoreProviderProps<Params = undefined> {
  children: ReactNode;
  params?: Params;
}

export interface Store<Value, Params = undefined> {
  Provider: (props: StoreProviderProps<Params>) => JSX.Element;
  useStore: () => Value;
}
