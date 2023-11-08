
// import React, {createContext, useContext} from "react";


// const UserInfoContext = createContext()


// export const UserinfoProvider = ({ children }) => {

//     const [nome,setNome] = useContext("")
//     const [cpf,SetCPF] = useContext("")
//     const [EstadoLogin,SetLogin] = useContext(false)

//     return(
//         <UserInfoContext.Provider value={{
//             nome,
//             setNome,
//             cpf,
//             SetCPF,
//             EstadoLogin,
//             SetLogin


//         }}>
//             {children}
//         </UserInfoContext.Provider>
//     )
// }
//  export const useUserinfo = () => {
//         return useContext(UserInfoContext);
    //   };

import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [EstadoLogin, setEstadoLogin] = useState(false);

  return (
    <MyContext.Provider value={{ EstadoLogin, setEstadoLogin }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

