import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

export interface UserContextProps {
  children: React.ReactNode;
}
export interface ContextProps {
  userInfo: {
    displayName?: string;
    email?: string;
    phoneNumber?: string;
    photoURL?: string;
    refreshToken?: string;
    uid?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<any | undefined>>;
}

export const UserContext = createContext({} as ContextProps);

const UserContextProvider = ({children}: UserContextProps) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
