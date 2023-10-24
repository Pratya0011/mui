import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";

function DataItem() {
  const [todos, setTodos] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get(`https://dummyjson.com/todos/${params.id}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(todos);
  return (
    todos ? <Box
      padding={10}
      width={"100%"}
      display={"flex"}
      flexDirection="column"
      margin={"auto"}
    >
      <Typography variant="h4" padding={1}>
        Todo Details
      </Typography>
      <Typography>ID: {todos.id}</Typography>
      <Box display={"flex"} alignItems={"center"} gap={5}>
        <Typography>Task 📝: {todos.todo}</Typography>
        <IconButton color={todos.completed ? "success" : "error"}>
          {todos.completed ? (
            <DoneAllRoundedIcon />
          ) : (
            <HourglassTopRoundedIcon />
          )}
        </IconButton>
      </Box>
    </Box> : <Box></Box>
  );
}

export default DataItem;
