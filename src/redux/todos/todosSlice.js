import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, actions) => {
            const todo = {
                id: uuid(),
                text: actions.payload
            }

            return[...state, todo]
        }
    }
}) 

//export action
export const { addTodo } = todosSlice.actions

//export reducer
export default todosSlice.reducer
