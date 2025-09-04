import React from 'react'
import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-2xl shadow-md border p-4 bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default Card
