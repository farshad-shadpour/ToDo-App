import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import ItemsList from './ItemsList'
import { ToastContainer, toast } from 'react-toastify'

const getLocalStorage = (items) => {
  let list = localStorage.getItem('todoList')
  if (list) {
    list = JSON.parse(localStorage.getItem('todoList'))
  } else {
    list = []
  }
  return list
}

const defaultList = JSON.parse(localStorage.getItem('todoList') || '[]')

const setLocalStorage = (items) => {
  localStorage.setItem('todoList', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.warn('item removed from')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <ItemsList items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  )
}
export default App
