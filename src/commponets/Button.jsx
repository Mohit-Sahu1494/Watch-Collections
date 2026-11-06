import React from 'react'

function Button({text,onClick,className}) {
  return (
    <button className={`flex items-center cursor-pointer justify-center p-2 bg-[var(--gold)] ${className}`}>
       {text}
    </button>
  )
}

export default Button
