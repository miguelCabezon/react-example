import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'vexdevlin',
        name: 'Miguel Angel Cabezon',
        initialIsFollowing: true
    },
    {
        userName: 'GamesTribune',
        name: 'GTM',
        initialIsFollowing: false
    },
    {
        userName: 'TESOnline_ESP',
        name: 'ElderScrollsOnlineES',
        initialIsFollowing: true
    }
]


export function App() {

    const format = (username) => `@${username}`

    // const formattedUserName = (<span>@{username}</span>)

    // Los componentes fabrican elementos y los elementos son lo que renderiza React.

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, initialIsFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            username={userName} 
                            initialIsFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            {/* <TwitterFollowCard username="vexdevlin" initialIsFollowing={true}>
                Miguel Angel Cabezon
            </TwitterFollowCard>
            <TwitterFollowCard username="GamesTribune" initialIsFollowing={false}>
                GTM
            </TwitterFollowCard>
            <TwitterFollowCard username="TESOnline_ESP" initialIsFollowing={true}>
                ElderScrollsOnlineES
            </TwitterFollowCard> */}
        </section>
    )
}