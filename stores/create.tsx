import * as React from 'react';
// import Memoize from '../components/memoize';
import { EMPTY_STORE, getNoProviderMessage } from './constants';
import { Store, StoreProviderProps } from './types';

export function create<Value, Params = undefined>(
  useHook: (params?: Params) => Value,
  name = useHook.name,
): Store<Value, Params> {
  const Context = React.createContext<Value | typeof EMPTY_STORE>(EMPTY_STORE);
  Context.displayName = name;

  const Provider = ({ children, params }: StoreProviderProps<Params>) => {
    const value = useHook(params);

    return (
      <Context.Provider value={value}>
        {/* <Memoize>{children}</Memoize> */}
        {children}
      </Context.Provider>
    );
  };

  const useStore = () => {
    const value = React.useContext(Context);

    if (value === EMPTY_STORE) {
      throw new Error(getNoProviderMessage(name || 'YourContext'));
    }

    return value;
  };

  return { Provider, useStore };
}
