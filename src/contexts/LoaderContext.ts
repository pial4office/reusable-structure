import { createContext } from 'react';

type TypeLoading = {
  setLoading: Function;
  loading: boolean;
};

export const LoaderContext = createContext({} as TypeLoading);
