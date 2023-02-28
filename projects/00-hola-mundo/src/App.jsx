import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export default function App() {

  return (
    <div className='App'>
      <TwitterFollowCard isFollowing>
        eub1
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing= {false} userName={"midudev"}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing= {false} userName={"pheralb_"}>
        Pablo Hernandez
      </TwitterFollowCard>

    </div>
  )
}