import React from 'react'
import './LoadingScreen.css'

interface LoadingScreenProps {
    isLoading: boolean
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({isLoading}) => {

  if (isLoading === true) {
    return (
      <div className='LoadingScreen'>is Loading...</div>
    )
  } else { return null}
}

export default LoadingScreen