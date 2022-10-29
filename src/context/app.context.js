import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  return (
    <AppContext.Provider
      value={{ showInstructionsModal, setShowInstructionsModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
