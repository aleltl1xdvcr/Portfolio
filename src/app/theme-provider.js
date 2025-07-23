
'use client'

import { createContext, useContext, useEffect } from 'react'
import { useThemeStore } from './store-theme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)