import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const format = (username) => `@${username}`

    // const formattedUserName = (<span>@{username}</span>)

    // Los componentes fabrican elementos y los elementos son lo que renderiza React.

    return (
        <section className='App'>
            <TwitterFollowCard username="vexdevlin">
                Miguel Angel Cabezon
            </TwitterFollowCard>
            <TwitterFollowCard username="GamesTribune">
                GTM
            </TwitterFollowCard>
            <TwitterFollowCard username="TESOnline_ESP">
                ElderScrollsOnlineES
            </TwitterFollowCard>
        </section>
    )
}