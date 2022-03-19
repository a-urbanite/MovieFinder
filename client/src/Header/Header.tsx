import React from 'react'
import './Header.css'

const Header = () => {
  return (
      <>
        <header className='header'>
            <h1 className='header__title'>MovieFinder</h1>
            <h2 className='header__subtitle'>What to watch this eve?</h2>
        </header>
      </>
  )
}

export default Header