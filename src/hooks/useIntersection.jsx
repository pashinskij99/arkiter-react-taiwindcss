import { useEffect, useRef, useState } from "react"

const useIntersection = () => {
  const containerRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  useEffect(() => {

    const observer = new IntersectionObserver(callbackFunction, options)

    if(containerRef.current) observer.unobserve(containerRef.current)

  }, [containerRef, options])

  return {isVisible, containerRef}
}

export default useIntersection