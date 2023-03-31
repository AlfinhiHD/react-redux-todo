import { useSelector } from "react-redux"

const Todos = () => {
    const todos = useSelector((state) => state.todos) 

    return (
        <>
            {
                todos.length > 0 ? 
                    todos.map((item, index) => (
                        <div key={index}>
                            <p>{item.text}</p>
                        </div>
                    )) :
                    <p>Keknya belum ada datanya bang?</p>
            }
        </>
    )
}

export default Todos