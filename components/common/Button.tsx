import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-medium transition'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {label}
    </button>
  )
}

export default Button
