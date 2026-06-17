import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() === '') return
    setTasks([...tasks, { id: Date.now(), text: inputValue }])
    setInputValue('')
  }

  return (
    <div className="card">
      <h1>Трекер завдань</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Нове завдання..."
      />
      <button onClick={addTask}>Додати</button>
      
      <ul style={{ textAlign: 'left', marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App