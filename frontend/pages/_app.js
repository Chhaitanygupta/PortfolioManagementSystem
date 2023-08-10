import React from 'react'
import NavBar from '@/components/Layout/NavBar/NavBar'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
        </div>
    )
}