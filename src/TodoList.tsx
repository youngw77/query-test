import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

interface todoItem {
  id: number;
  todo: string;
}

const TodoList = () => {
  const [todo, setTodo] = useState<todoItem[]>([]);
  const navigate = useNavigate();

  const { isSuccess, isError, isLoading, isFetching, data, error } = useQuery(
    "getTodoList",
    () => axios.get(`http://localhost:5000/findAll`),
    {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        console.log(data.data);
        setTodo(data.data);
      },
      onError: (error) => {
        console.log("onError", error);
      },
      staleTime: 60000,
      cacheTime: Infinity,
    }
  );

  useEffect(() => {
    if (isSuccess && data) {
      setTodo(data.data);
    }
  }, [isSuccess, data]);

  if (isFetching) {
    console.log("fetching...");
  }

  if (isLoading) {
    console.log("loading...");
  }

  if (isError) {
    console.log("error", error);
  }

  if (isSuccess) {
    console.log("success", data);
  }

  const handleEdit = (index: number) => {
    console.log("Edit", index);
  };

  const handleDelete = (index: number) => {
    console.log("Delete", index);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>TODO</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo: todoItem, index: number) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
