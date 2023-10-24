import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import AssignmentLateRoundedIcon from "@mui/icons-material/AssignmentLateRounded";
import DataGridToolbar from "./DataGridToolbar";

function Data() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      renderCell: (params) => {
        return (
          <Link
            to={`/${params.value}`}
            style={{ color: "black", textUnderlineOffset: 5 }}
          >
            <Typography>{params.value}</Typography>
          </Link>
        );
      },
    },
    {
      field: "userId",
      headerName: "User Id",
      width: 90,
    },
    {
      field: "todo",
      headerName: "Todo",
      width: 400,
    },
    {
      field: "completed",
      headerName: "Compleated",
      width: 400,
      renderCell: (params) => {
        return params.value ? (
          <TaskAltRoundedIcon sx={{ color: "green" }} />
        ) : (
          <AssignmentLateRoundedIcon sx={{ color: "orangeRed" }} />
        );
      },
    },
  ];
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card sx={{ padding: 5 }}>
      <CardHeader title="Todo List 🎇📑"></CardHeader>
      <DataGrid
      checkboxSelection
      pageSize={10}
        rows={todos}
        columns={columns}
        sx={{ height: 500 }}
        loading={loading}
        components={{Toolbar: DataGridToolbar,
             BaseButton:Button,
             Pagination: (props) => (
                <GridPagination
                  {...props}
                  rowsPerPageOptions={[10, 20, 30]} // Set rowsPerPageOptions here
                />
             )
            }}
        componentsProps={{baseButton:{
            variant:"outlined"
        }}}
      />
    </Card>
  );
}

export default Data;
