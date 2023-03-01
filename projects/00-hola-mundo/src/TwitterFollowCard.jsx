import { useState } from "react"

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing ? "tw-followCard-button is-Following" : "tw-followCard-button"



  const handleClick = (e)=>{

  setIsFollowing(!isFollowing);
  }


  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="mi avatar"
          src={`https://unavatar.io/twitter/${userName}`}>
        </img>
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
        
      </aside>
    </article>
  )
}