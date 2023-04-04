import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export default function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'eub1',
      name: 'Eub1',
      isFollowing: true
    },
    {
      userName: 'pheralb_',
      name: 'Pablo Heraldo',
      isFollowing: false
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <div className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  )
}
