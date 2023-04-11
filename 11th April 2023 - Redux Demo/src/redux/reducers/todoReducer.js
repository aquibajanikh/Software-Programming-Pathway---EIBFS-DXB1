const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;
