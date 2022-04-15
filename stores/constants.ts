export const EMPTY_STORE: unique symbol = Symbol('no-store');

export const getNoProviderMessage = (ctxName: string) =>
  `Dev Error: ${ctxName}.useStore was used outside a Provider.`;
