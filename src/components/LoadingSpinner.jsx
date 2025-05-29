import React from 'react'

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  // size: 'sm', 'md', 'lg'
  const sizeClass = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-8',
  }[size] || 'w-10 h-10 border-4'

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className={`${sizeClass} border-primary border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="loading"
      ></div>
      {text && <p className="text-gray-600 text-lg font-medium">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
