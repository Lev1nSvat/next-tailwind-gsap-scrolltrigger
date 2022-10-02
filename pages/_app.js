import '../styles/globals.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MyApp({ Component, pageProps }) {
  const el = useRef();
  const q = gsap.utils.selector(el);  
  useEffect(()=> {
    gsap.from(el.current, {autoAlpha:0})

  })

  return (
    <div ref={el} className='invisible'>
      <Component {...Component} el={el} q ={q} />
    </div>
  )
}

export default MyApp
