import { createContext, useState } from 'react'

export const Context = createContext()

export const MenuContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Context.Provider
      value={{
        setOpenMenu,
        openMenu,
      }}
    >
      {children}
    </Context.Provider>
  )
}
