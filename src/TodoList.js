import React, { Component } from 'react';
import 'antd/dist/antd'
import { Input, Button, List } from 'antd'

import 'antd/dist/antd.css';
import store from './store'
class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())

        
        this.state=store.getState()
        store.subscribe(this.storeChange)


      this.handleInputValue=  this.handleInputValue.bind(this)
      this.handleClick=  this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                <Input 
                placeholder={this.state.inputValue}
                 style={ {width:200,}}
                 onChange={this.handleInputValue}
                 value={this.state.inputValue}
                 />
                <Button type='primary' onClick={this.handleClick}>点击</Button>
                <List  
                bordered
                dataSource={this.state.list}
                renderItem={(Item,index)=>(<List.Item onClick={this.handleDelete.bind(this,index)}>{Item}</List.Item>)}
                style={{width:200}}
                />
            </div>
        );
        
    }
    handleInputValue(e){
        const action={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    } 
    handleClick(){

        const action ={type:'addItem'}
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    handleDelete(index){
        const action={
            type:'delete'
        }
        store.dispatch(action)
    }
}

export default TodoList;