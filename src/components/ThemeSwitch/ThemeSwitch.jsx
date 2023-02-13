import React, { useContext } from 'react'
import Context from '../../context/Context'
import { FiMoon, FiSun } from 'react-icons/fi'
import './ThemeSwitch.css'

export default function ThemeSwitch() {
  const { theme, changeTheme } = useContext(Context)
  const lightIcon = <FiMoon size="1.8em" className="icon"/>
  const darkIcon = <FiSun size="1.8em" className="icon"/>

  const icon = theme === 'light' ? lightIcon : darkIcon

  return (
    <button className="theme-button" onClick={changeTheme}>
      {icon}
    </button>
  )
}