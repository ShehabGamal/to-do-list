import React , {Component} from 'react'
import './AddItem.css'

class AddItem extends Component{
    state = {
        ToDo : ""
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }           
    handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.ToDo.value === ""){
            return false
        } else{
            this.props.addItem(this.state)
            this.setState({
            ToDo:""
        })
        }
    }   
    render(){
        return( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter ToDo" id="ToDo" onChange={this.handleChange} value={this.state.ToDo}/>
                    <input type="submit" value="Add Todo"/>
                </form>
            </div>
        )
    }
}
export default AddItem