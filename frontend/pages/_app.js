import React , { useState, useEffect }from 'react'
import { useRouter } from "next/router";
import NavBar from '@/components/Layout/NavBar/NavBar'
import SignInPage from '@/components/SignInPage/SignIn';
import SignUpPage from '@/components/SignUpPage/SignUp';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {
    let router = useRouter();
    const [signupmodalShow, setsignupModalShow] = useState(true);
    const [signinmodalShow, setsigninModalShow] = useState(true);
    useEffect(() => {
        setsignupModalShow(true)
        setsigninModalShow(true)
    })
    const handleOnHide = () => {
        setsignupModalShow(false)
        router.back()
    }
    const handleOnHideSignIn = () => {
        setsigninModalShow(false)
        router.back()
    }
    return (
    <div>
        <NavBar />
        <Component {...pageProps} />
        {
        parseInt(router.query.signup)===1 && (
          <SignUpPage show={signupmodalShow}
          onHide={handleOnHide}/>
        )
      }
      {
        parseInt(router.query.signin)===1 && (
          <SignInPage show={signinmodalShow}
          onHide={handleOnHideSignIn}/>
        )
      }
    </div>
    )
}