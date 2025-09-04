// Props for Card component
export interface CardProps {
  title: string
  description: string
}

// Props for Button component
export interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}
