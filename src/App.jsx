import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() === '') return
    // Додаємо властивість completed: false для нових завдань
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }])
    setInputValue('')
  }

  // Функція для зміни статусу завдання (викреслено/не викреслено)
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
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
      
      <ul style={{ textAlign: 'left', marginTop: '20px', cursor: 'pointer' }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App