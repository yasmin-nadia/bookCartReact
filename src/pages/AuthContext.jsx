import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [responseData, setResponseData] = useState("");
  
  return (
    <AuthContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
