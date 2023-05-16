import { TodoItem } from "./TodoItem"
import {StyledUnorderedList, Wrapper} from "./ToDoList.styles"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
      <Wrapper>
        <StyledUnorderedList className="list">
        {todos.length === 0}
        {todos.map(todo => {
          return (
            <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )
        })}
      </StyledUnorderedList>
      </Wrapper>

    )
}