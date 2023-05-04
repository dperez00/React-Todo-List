import {useState} from "react";

/*The {onSubmit} is a prop that is being passed down
from the parent container 'App'.
Props pass down data from parent to child */
export function NewTodoForm ({onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
    
        onSubmit(newItem)

        setNewItem("");
      };

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
};