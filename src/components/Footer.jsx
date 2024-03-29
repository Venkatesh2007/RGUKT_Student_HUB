import '../App.css'
import React, { useContext } from 'react'
import HubContext from '../context/HubContext'

export default function App() {
  const context = useContext(HubContext);
  const { sidewidth } = context;
  return (
      <footer className={`footer ${((sidewidth.width == '73px') && 'nav-margin') || 'nav-margin2'}`}>
        <div>
          <strong>
             RGUKT_<abbr title='Student'>STD</abbr>_HUB @ 2024
             <a href="/"> - RGUKT Basar </a>.
          </strong>
          It's For All Students
        </div>
          <div className="right">
            Version 1.0
          </div>
       </footer>
  )
}
