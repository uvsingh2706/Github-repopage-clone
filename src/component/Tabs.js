import React from 'react'
import './Tabs.css'


const  Tabs = ({user}) =>  (
  <ul className='nav nav-tabs'>
      <li className='nav-item'>
          <p className="nav-link mb-0 active">
              Repositories
          </p>
      </li>
      <li className='nav-item'>
          <a
           target='blank'
           rel = 'noopener noreferrer'
           href={`http://github.com/${user.login}?tab=packages`} className="nav-link mb-0">
              Packages
          </a>
      </li>
      <li className='nav-item'>
          <a   target='blank'
               rel = 'noopener noreferrer' href={`http://github.com/${user.login}?tab=people`}  className="nav-link mb-0 ">
              People
          </a>
      </li>
      <li className='nav-item'>
          <a   target='blank'
               rel = 'noopener noreferrer'
               href={`http://github.com/${user.login}?tab=projects`}  className="nav-link mb-0 ">
               Projects
          </a>
      </li>
  </ul>
   
  
)

export default Tabs