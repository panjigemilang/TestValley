"use client"

import { useState, useEffect } from "react"

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    // Initial width on component mount
    setWindowWidth(window.innerWidth)

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty dependency array means the effect runs only once on mount

  return windowWidth
}
