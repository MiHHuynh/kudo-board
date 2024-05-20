import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Kudoboard</h1>
      <div>
        <input type='text' placeholder='search boards...'/>
        <button>All</button>
        <button>Recent</button>
        <button>Celebration</button>
        <button>Thank You</button>
        <button>Inspiration</button>
        <button>Create a New Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
      <div>
        <img src='https://picsum.photos/200/300?random=41' />
        <h3>Title</h3>
        <h4>Category</h4>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
    </>
  )
}

export default App
