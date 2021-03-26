import React, { useState, useCallback, useEffect } from "react";
import { Data } from "../Data/index";
export const Context = React.createContext();

export function DropdownProvider({ children }) {
  return (
    <Context.Provider
      value={{
        User: Data,
      }}
    >
      {children}
    </Context.Provider>
  );
}
