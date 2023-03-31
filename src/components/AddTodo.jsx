import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todos/todosSlice"

const AddTodo = () => {
    const [text, setText] = useState("")

    const dispact = useDispatch() // hooks buat trigger/manggil reducer lewat action

    const handleSubmit = (event) => {
        event.preventDefault()
        // manggil reducer lewat useDispacth
        dispact(addTodo(text))

        // Kosongin input text
        setText('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo