import { useDispatch, useSelector } from "react-redux";
import { getTodo } from './store/todo';

function Todo(props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todoReducer.results);
    const count = useSelector(state => state.todoReducer.count);

    function getTodoItems() {
        dispatch(getTodo());
    }

    return (
        <>
            <h1>Todo items count {count}</h1>
            <button onClick={getTodoItems}>Get List</button>
            <ul>
                {
                    items.map((item, idx) =>
                        <li key={idx}>{item.text}</li>)
                }
            </ul>
        </>
    )
}

export default Todo;