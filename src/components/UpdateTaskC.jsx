import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTask } from "../features/todos/todosSlice";
import { useState } from "react";
function UpdateTaskC({ task, close }) {
  let [updatedTask, setUpdatedTask] = useState(task.taskName);
  const dispatch = useDispatch();
  return (
    <div className="flex-center" style={{ padding: "1rem" }}>
      <TextField
        value={updatedTask}
        onChange={(e) => {
          setUpdatedTask(e.target.value);
        }}
        margin="dense"
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
      />
      <Button
        onClick={() => {
          dispatch(updateTask({ id: task.id, value: updatedTask }));
          close();
        }}
        variant="contained"
      >
        Update
      </Button>
    </div>
  );
}

export default UpdateTaskC;
