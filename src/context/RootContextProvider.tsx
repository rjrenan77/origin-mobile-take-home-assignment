import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

import UserContextProvider from './UserContextProvider';

export interface RootContextProps {
  children: React.ReactNode;
}
export interface ContextProps {
  setIdRoot?: Dispatch<SetStateAction<string>>;
  idRoot?: string;
}

export const RootContext = createContext({} as ContextProps);

const RootContextProvider = ({children}: RootContextProps) => {
  const [idRoot, setIdRoot] = useState('');

  const buildProvidersTree = (componentsWithProps: any) => {
    const initialComponent = ({children}: any) => <>{children}</>;

    return componentsWithProps.reduce(
      (AccumulatedComponents: any, [Provider, props = {}]: any) => {
        return ({children}: any) => {
          return (
            <AccumulatedComponents>
              <Provider {...props}>{children}</Provider>
            </AccumulatedComponents>
          );
        };
      },
      initialComponent,
    );
  };

  // register a new context here
  const ProvidersTree = buildProvidersTree([[UserContextProvider]]);

  return (
    <RootContext.Provider value={{idRoot, setIdRoot}}>
      <ProvidersTree>{children}</ProvidersTree>
    </RootContext.Provider>
  );
};

export default RootContextProvider;
