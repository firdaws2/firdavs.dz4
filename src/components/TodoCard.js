//const TodoCard = ({ todo, handleOpen, handleDelete }) => {
//    return ( 
//        <div className="todocard">
//            <h1>{todo.title}</h1>
//            <h1>{todo.description}</h1>
//            <button onClick={() => handleOpen(todo)}>edit</button>
//            <button onClick={() => handleDelete(todo.id)}>delete</button>
//        </div>
//     );
//}
//

import { Component } from "react";
import Input from "./ui/Input";

class TodoCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {todo,handlOpen,handlDelete}=this.props
        return(
            <div className="todocard">
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button onClick={() => handlOpen(todo)}>edit</button>
                <button onClick={() => handlDelete(todo.id)}>delete</button>
            </div>
        )
    }
}
export default TodoCard;