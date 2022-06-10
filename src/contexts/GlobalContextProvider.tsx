import { useState } from 'react';
import { LoaderContext } from './LoaderContext';

export default function GlobalContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [loading, setLoading] = useState(false);
  const loaderContextValue = {
    loading,
    setLoading,
  };
  return (
    <>
      <LoaderContext.Provider value={loaderContextValue}>
        {children}
      </LoaderContext.Provider>
    </>
  );
}
