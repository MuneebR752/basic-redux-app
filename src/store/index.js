import { createStore } from "redux";

//Actions

const addTask = (task) => {
  return {
    type: "tasks/addTask",
    payload: task,
  };
};

const updateTask = (_id, newValue) => {
  return {
    type: "tasks/updateTask",
    payload: {
      id: _id,
      value: newValue,
    },
  };
};

const deleteTask = (id) => {
  return {
    type: "tasks/deleteTask",
    payload: id,
  };
};

//Initial State

const tasks = [
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
];

//Reducer Function

const taskReducer = (state = tasks, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [
        ...state,
        {
          id: tasks.length + 1,
          taskName: action.payload,
        },
      ];

    case "tasks/updateTask":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, taskName: action.payload.value }
          : task
      );

    case "tasks/deleteTask":
      return state.filter((task) => {
        return task.id !== action.payload;
      });
    default:
      return state;
  }
};

//Exporting

const store = createStore(taskReducer);

export default store;

export { addTask, updateTask, deleteTask };
