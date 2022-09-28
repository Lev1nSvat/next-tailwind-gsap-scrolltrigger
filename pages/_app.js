import '../styles/globals.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MyApp({ Component, pageProps }) {
  const el = useRef();
  useEffect(()=> {
    gsap.from(el.current, {autoAlpha:0})

  })

  return (
    <div ref={el} className='invisible'>
      <Component {...Component} el={el} />
    </div>
  )
}

export default MyApp
