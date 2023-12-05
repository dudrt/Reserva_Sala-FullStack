
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [EstadoLogin, setEstadoLogin] = useState(false);
  const [CPF,setCPF] = useState("")
  const [Nome, setNome] = useState("")

  return (
    <MyContext.Provider value={{ EstadoLogin, setEstadoLogin,CPF,setCPF,Nome,setNome }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

