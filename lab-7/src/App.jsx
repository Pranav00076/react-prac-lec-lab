import { useState } from 'react'
import Ex from './component/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex />
    </>
  )
}

export default App
