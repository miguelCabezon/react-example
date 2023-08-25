import './App.css'

export function App() {
    return (
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar' 
                src="https://unavatar.io/twitter/vexdevlin" 
                alt="Avatar de vexdevlin" />
            <div className='tw-followCard-info'>
                <strong>Miguel Angel Cabezón</strong>
                <span className='tw-followCard-infoUserName'>@vexdevlin</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-followButton'>
                Seguir
            </button>
        </aside>
       </article> 
    )
}