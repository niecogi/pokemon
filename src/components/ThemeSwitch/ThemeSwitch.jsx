import React, { Fragment, useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import { FiMoon, FiSun } from 'react-icons/fi'
import './ThemeSwitch.css'

export default function ThemeSwitch() {
  const { theme, changeTheme } = useContext(Context)
  const lightIcon = <FiMoon size='1.8em' className='icon'/>
  const darkIcon = <FiSun size = '1.8em' className='icon'/>
  const [icon, setIcon] = useState()
  useEffect(() => {
    theme === 'light'
    ? setIcon(darkIcon)
      : setIcon(lightIcon)

  }, [theme])


  return (
    <Fragment>
      <button className='theme-button' onClick={changeTheme}>
        {icon}
      </button>
    </Fragment>
  )
}