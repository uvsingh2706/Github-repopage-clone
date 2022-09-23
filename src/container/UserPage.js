import React from 'react'
import Navbar from '../component/Navbar'
import Repositories from '../component/Repositories'
import Tabs from '../component/Tabs'
import Userinfo from '../component/Userinfo'
import {getUserData, getUserdata, getUserRepo} from '../api/Api'
import { useState } from 'react'
import {matchpath} from "react-router-dom"
import { useEffect } from 'react'
import { func } from 'shards-react'
import Loading from '../component/Loading'



function UserPage({match}) {

  const [user, setUser] = useState()
  const [repos, setRepos] = useState([])

  const userNameParams = match.params.userName
  useEffect(() => {
      fetchUser()
      fetchRepos()
     }, [])
  async function fetchUser(){
      const {data} = await getUserData(userNameParams)
      setUser(data)
  }
  async function fetchRepos(){
      const {data} = await getUserRepo(userNameParams)
      setRepos(data)
  }

  return (
    <>
      {user ? (
        <>
            <Navbar user = {user}/>
            <div className="container">
            <Userinfo user={user} />
            <Tabs repos = {repos} user = {user}/>
            <Repositories repos = {repos} user={user}/>
            </div>
        </>
      ): (
          <Loading/>
      )}

    
     </>
    
  )
}

export default UserPage
