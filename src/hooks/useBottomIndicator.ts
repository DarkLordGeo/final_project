// import { useEffect } from "react"

import { useEffect, useRef, useState } from "react"

// const useScroll = () => {

//     const scrollPos: boolean = Math.ceil(window.innerHeight + window.scrollY) >=
//         document.documentElement.scrollHeight - 200;

//     useEffect(() => {
//         window.addEventListener("scroll", useScroll)
//         return () => {
//             window.removeEventListener('scroll', useScroll)
//         }
//     }, [])

//     return { scrollPos }

// }
// export default useScroll

const useBottomIndicator = () => {

    const divRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callBackFunc = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
        delay: 3000
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunc, options)
        if (divRef.current) observer.observe(divRef.current)

        return () => {
            if (divRef.current) observer.observe(divRef.current)
        }
    }, [divRef, options])

    return { divRef, isVisible }
}

export default useBottomIndicator