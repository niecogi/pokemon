import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import { FiMoon, FiSun } from "react-icons/fi";
import './ThemeSwitch.css'

export default function ThemeSwitch({ url }) {
  const { theme, changeTheme } = useContext(Context)
  const [svg, setSvg] = useState(<FiMoon />)

  useEffect(() => {
    if(theme == 'light'){
      setSvg(<FiMoon />)
    }else {
      setSvg(<FiSun />)
    }
  }, [theme])


  return (
    <div className="theme-switch">
      <button onClick={changeTheme}>
        {svg}
      </button>
    </div>
  )
}