import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [mode, setMode] = useState(false)
    function modeClickHandler() {
      setMode(!mode)
    }

    const value = {
      mode,
      setMode,
      modeClickHandler
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
