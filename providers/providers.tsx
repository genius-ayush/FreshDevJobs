'use client'
import React, { ReactNode } from 'react'
import { ThemeProvider } from './theme-providers'


//@ts-ignore
const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}

export default Providers