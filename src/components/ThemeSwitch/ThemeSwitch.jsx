import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import { FiMoon, FiSun } from 'react-icons/fi'
import './ThemeSwitch.css'

export default function ThemeSwitch() {
  const { theme, changeTheme } = useContext(Context)
  const lightIcon = <FiMoon className='icon'/>
  const darkIcon = <FiSun className='icon'/>
  const [icon, setIcon] = useState()
  useEffect(() => {
    theme === 'light'
    ? setIcon(darkIcon)
      : setIcon(lightIcon)

  }, [theme])


  return (
    <div className="theme-switch">
      <button onClick={changeTheme}>
        {icon}
      </button>
    </div>
  )
}