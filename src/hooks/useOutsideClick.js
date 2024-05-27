import { useRef, useEffect } from "react"

export default function useOutsideClick(handler) {
    const ref = useRef()

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                console.log('clicked')
                handler()
            }
        }

        document.addEventListener('click', handleClick, true)

        return () => document.removeEventListener('click', handleClick, true)
    }, [handler])

    return ref
}
