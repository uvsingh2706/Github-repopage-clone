import React from 'react'
import './Userinfo.css'
const Userinfo = ({user}) => (

  <div className="user__info">
      <img src={user.avatar_url} 
      className='p-2 avatar'
      width="130"
      height="130"
      alt="profileimage" />
      <div className="user__infoDetails">
          <h5>{user.name}</h5>
          <div className="user__infos">
              {user.location && (
                   <div className="user__infoDetail">
                   <i className='fa fa-map-marker pr-1 '/>
                   <span>  {user.location} .</span>
                   </div> 
              )}
            {user.blog && (
                    <div className="user__infoDetail">
                    <i className='fa fa-globe pr-1 '/>
                   <span>{user.blog} .</span>
                </div>
              )}
            {user.email && (
               <div className="user__infoDetail">
                    <i className='fa fa-envelope pr-1'/>
                   <span>{user.email} .</span>
                </div>
              )}
            {user.twitter_username && (
               <div className="user__infoDetail">
                   <i className='fa fa-twitter pr-1'/>
                 <a  href={`https://twitter.com/${user.twitter_username}`}><span className='twitter__username'  >{user.twitter_username} .</span></a> 
               </div>
              )}
         
            {user.followers && (
              <div className="user__infoDetail">
                    <i className='fa fa-group pr-1'/>
                    <span> {user.followers} Followers.</span>
              </div>
              )}
              
            {user.following && (
             <div className="user__infoDetail">
                    <i className='fa fa-heart pr-1'/>
                    <span>{user.following} Followings.</span>
             </div>
              )}
          </div>
      </div>
  </div>
  

)

export default Userinfo