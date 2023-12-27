// Create a new file named FormContext.js
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isReferalFormOpen, setIsReferalFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const openReferalForm = () => {
    setIsReferalFormOpen(true);
  };
  const closeReferalForm = () => {
    setIsReferalFormOpen(false);
  };
  return (
    <FormContext.Provider
      value={{
        isFormOpen,
        openForm,
        closeForm,
        isReferalFormOpen,
        openReferalForm,
        closeReferalForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  return context;
};
