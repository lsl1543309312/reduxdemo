const defaultState={
    inputValue:'Write Something',
    list:[
        'one',
        'two',
        'three'
    ]
}
export default(state=defaultState,action)=>{
    console.log(state,action)
    //reducer中只能接收state，不能改变state
    if (action.type==='changeInput') {
        let newState=JSON.parse(JSON.stringify(state))  //不能直接改变state，所以需要通过这样的方式
        newState.inputValue=action.value
        return newState
    }
    if(action.type==='addItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''//每次增加完为空
        return newState
    }if(action.type==='delete'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}