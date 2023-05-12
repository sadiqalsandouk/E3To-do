import React, { useState } from "react";
import { Form, Label, Input, Button, ContainerForm } from "./ToDoList.styles";

export function ToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <ContainerForm>
    <Form onSubmit={handleSubmit}>
        <Label htmlFor="item">Enter a Task:</Label>
        <Input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      <Button>+</Button>
    </Form>
    </ContainerForm>


  );
}
