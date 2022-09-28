import { useEffect } from "react"
import { gsap } from 'gsap'

export default function App({el}) {
  
  useEffect(() => {
    const q = gsap.utils.selector(el);  
  });

  return (
    <>
      
    </>
  );
}
