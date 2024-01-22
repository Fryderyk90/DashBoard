import './App.css'
import { PublicTransportWidget } from './components/PublicTransportWidget'
import { TodoWidget } from './components/TodoWidget'

function App() {


  return (
    <div className='grid grid-cols-2 gap-4 bg-stone-200 '>
      <PublicTransportWidget />
      <TodoWidget />
    </div>
  )
}

export default App
