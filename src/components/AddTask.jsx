import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store";
import { useState } from "react";
function AddTask() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex-center">
      <TextField
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        sx={{ minWidth: 600 }}
        margin="dense"
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
      />
      <Button
        onClick={() => {
          dispatch(addTask(task));
        }}
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
}

export default AddTask;
