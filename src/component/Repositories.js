import React from 'react'
import Repository from './Repository'
import './Repository.css'

const  Repositories = ({user, repos}) =>  (
<section className='repositories'>

    {
        repos.map((repo) => (
            <Repository key={repo.id} repo = {repo} user = {user}/> 
        ))
    }
  
</section>

)

export default Repositories;