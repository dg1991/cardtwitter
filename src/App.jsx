import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const USERS = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: true
  },
  {
    userName: 'carlosazaustre',
    name: 'Carlos Azaustre',
    isFollowing: true
  },
  {
    userName: 'nschurmann',
    name: 'Nicolás Schürmann',
    isFollowing: true
  },
  {
    userName: 'codigoconjuan',
    name: 'Juan De la torre',
    isFollowing: true
  },
]

export function App() {
  return (
    <section className="App">
      {
        USERS.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}
