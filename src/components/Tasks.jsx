import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/todos/todosSlice";
import { Button } from "@mui/material";
import UpdateTaskC from "./UpdateTaskC";
import React from "react";
export default function BasicTable() {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [activeDialog, setActiveDialog] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, i) => (
            <TableRow
              key={task.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {task.taskName}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setActiveDialog(i);
                    handleClickOpen();
                  }}
                >
                  <EditIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => dispatch(deleteTask(task.id))}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <UpdateTaskC task={tasks[activeDialog]} close={handleClose} />
          </Dialog>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
