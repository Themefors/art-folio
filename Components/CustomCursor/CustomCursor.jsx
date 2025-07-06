"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const isMoving = useRef(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  // Color palette
  const colors = [
    { main: "#f3dff3", border: "#e1c7e1" }, // Light pink
    { main: "#ceeaf7", border: "#b6ddf0" }, // Light blue
    { main: "#f8edda", border: "#f0e1c8" }, // Light peach
    { main: "#ece0f7", border: "#ddd1f0" }, // Light purple
  ]

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    // Hide default cursor
    document.body.style.cursor = "none"

    // Color rotation interval
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length)
    }, 3000) // Change color every 3 seconds

    // Mouse move handler
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e

      // Main cursor (instant)
      gsap.set(cursor, {
        x: clientX,
        y: clientY,
      })

      // Follower cursor (delayed)
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      })

      // Movement indicator
      if (!isMoving.current) {
        isMoving.current = true
        gsap.to([cursor, follower], {
          scale: 1.2,
          duration: 0.2,
          ease: "power2.out",
        })

        // Reset after movement stops
        clearTimeout(window.cursorTimeout)
        window.cursorTimeout = setTimeout(() => {
          isMoving.current = false
          gsap.to([cursor, follower], {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        }, 150)
      }
    }

    // Mouse enter handler for interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 2.5,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Mouse leave handler for interactive elements
    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Text hover handler
    const handleTextEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 0.3,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleTextLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Special hover for buttons
    const handleButtonEnter = () => {
      gsap.to(cursor, {
        scale: 0.3,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(follower, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)

    // Interactive elements
    const interactiveElements = document.querySelectorAll("a, input, textarea, .swiper-slide, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Button elements
    const buttonElements = document.querySelectorAll("button")
    buttonElements.forEach((el) => {
      el.addEventListener("mouseenter", handleButtonEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Text elements
    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span")
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleTextEnter)
      el.addEventListener("mouseleave", handleTextLeave)
    })

    // Cleanup
    return () => {
      document.body.style.cursor = "auto"
      document.removeEventListener("mousemove", handleMouseMove)
      clearInterval(colorInterval)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      buttonElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleButtonEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleTextEnter)
        el.removeEventListener("mouseleave", handleTextLeave)
      })
      clearTimeout(window.cursorTimeout)
    }
  }, [])

  // Update cursor colors when color index changes
  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (cursor && follower) {
      gsap.to(cursor, {
        backgroundColor: colors[currentColorIndex].main,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(follower, {
        borderColor: colors[currentColorIndex].border,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [currentColorIndex])

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-multiply"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundColor: colors[currentColorIndex].main,
          transition: "background-color 0.5s ease",
        }}
      />

      {/* Follower Cursor */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-[9998] opacity-70"
        style={{
          transform: "translate(-50%, -50%)",
          borderColor: colors[currentColorIndex].border,
          transition: "border-color 0.5s ease",
        }}
      />

      {/* Color Indicator */}
      <div className="fixed bottom-6 right-6 flex space-x-2 z-[9997] pointer-events-none">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentColorIndex ? "scale-125 opacity-100" : "scale-100 opacity-50"
            }`}
            style={{ backgroundColor: color.main }}
          />
        ))}
      </div>
    </>
  )
}

export default CustomCursor
