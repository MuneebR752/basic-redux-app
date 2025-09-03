import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      taskName: "Write Code",
    },
    {
      id: 2,
      taskName: "Take Tea",
    },
    {
      id: 3,
      taskName: "Play Football",
    },
  ],
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      let newTask = { id: state.tasks.length + 1, taskName: action.payload };
      state.tasks.push(newTask);
    },
    updateTask: (state, action) => {
      let updatedTask = state.tasks.find((task) => {
        return task.id === action.payload.id;
      });
      updatedTask.taskName = action.payload.value;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTasks, updateTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
