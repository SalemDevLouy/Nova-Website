'use client';

const MainButton = ({children, className = '', ...props}) => {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      {children}
    </button>
  )
}

export const SecondButton = ({children, className = '', ...props}) => {
  return (
    <button className={`btn-secondary ${className}`} {...props}>
      {children}
    </button>
  )
}

export const ThirdButton = ({children, className = '', ...props}) => {
  return (
    <button className={`btn-tertiary ${className}`} {...props}>
      {children}
    </button>
  )
}

export const FourthButton = ({children, className = '', ...props}) => {
  return (
    <button className={`btn-quaternary ${className}`} {...props}>
      {children}
    </button>
  )
}

export default MainButton