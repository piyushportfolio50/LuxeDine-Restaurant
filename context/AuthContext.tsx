"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (name: string, email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("luxedine_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        setUser(null)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      if (user) {
        localStorage.setItem("luxedine_user", JSON.stringify(user))
      } else {
        localStorage.removeItem("luxedine_user")
      }
    }
  }, [user, isLoaded])

  const login = (name: string, email: string) => {
    setUser({ name, email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
