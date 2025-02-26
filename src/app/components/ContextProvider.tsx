"use client"
import React, { useState } from 'react'
import { Context } from './Context'
export default function ContextProvider({children}:{children: React.ReactNode}) {
  const [imgValue , setImageValue] = useState<File | null>(null)
    return (
    <Context.Provider value={{imgValue , setImageValue}}>{children}</Context.Provider>
  )
}
