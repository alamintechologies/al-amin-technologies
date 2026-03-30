import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updatePosition)
    
    const interactiveElements = document.querySelectorAll('button, a, .interactive')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
          backgroundColor: isHovering ? 'rgba(0, 255, 255, 0.2)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      />
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '4px',
          height: '4px',
          backgroundColor: '#00ffff',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}

export default CustomCursor