import { useState } from 'react' // hook: funcionalidades extra de react

export function TwitterFollowCard ({ children, username = unknown, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // const imgSrc = 'https://unavatar.io/twitter/${username}

    const addAt = (username) => `@${username}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-followButton is-following' 
        : 'tw-followCard-followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/twitter/${username}`}
                alt="Avatar de vexdevlin" />
            <div className='tw-followCard-info'>
                <strong>{ children }</strong>
                <span className='tw-followCard-infoUserName'> {addAt(username)} </span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollowButton'>Dejar de seguir</span>
            </button>
        </aside>
       </article> 
    )
}