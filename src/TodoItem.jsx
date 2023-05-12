import {DeleteButton, StyledCheckbox, ListItems, TaskTitle, Wrapper} from "./ToDoList.styles"
export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
      <Wrapper>
        <ListItems>
          <TaskTitle>
            <StyledCheckbox type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
            {title}
          </TaskTitle>
          <DeleteButton className="btn btn-danger" onClick={() => deleteTodo(id)}>X</DeleteButton>
        </ListItems>
        </Wrapper>
    )
}