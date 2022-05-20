import React from "react";
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state={
          newItem:"",
          list:[]
        }
      }
    
      updateInput(key, value){
        this.setState({
          [key]: value
        })
      }
      addItem(){
        const newItem={
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
        }
    
        const list = [...this.state.list];
    
        list.push(newItem)
    
        this.setState({
           list,
           newItem: ""
        })
      }

      deleteItem(id){
          const list = [...this.state.list]

          const updateList = list.filter(item => item.id !== id)

          this.setState({list: updateList})
      }
      render() {
        return (
          <div className="TodoList">
            <input 
            type="text"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button className="button" onClick={() => this.addItem()}>Add</button>
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>{item.value}              
                  <button className="delet" onClick={() => this.deleteItem(item.id)}>X</button></li>
                )
              })}

            </ul>
          </div>
        )
      }
}


export default TodoList