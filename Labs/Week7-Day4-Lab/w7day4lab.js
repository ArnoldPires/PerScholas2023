/*

Props
Props allows a component to receive data from its parent component.

Some rules

Props can only be sent from a parent to a child
If the parent needs data from the child it should send a function as a prop then the child can pass its data to the function as an argument.
Anything can be sent as a prop, include JSX
//The Child Component
const Child = props => {
  //change the value of someVariable using function sent via props
  props.setter(8)

  return <h1>{props.stuff}</h1>
}

// THe Parent Component
const Parent = props => {
  let someVariable

  //function to set someVariable
  const setSV = data => {
    someVariable = data
  }

  // send down two props, stuff and setter
  return <Child stuff="hello world" setter={setSV} />
}
Props allows a component to receive data from its parent component.

Some rules

Props can only be sent from a parent to a child
If the parent needs data from the child it should send a function as a prop then the child can pass its data to the function as an argument.
Anything can be sent as a prop, include JSX
//The Child Component
const Child = props => {
  //change the value of someVariable using function sent via props
  props.setter(8)

  return <h1>{props.stuff}</h1>
}

// THe Parent Component
const Parent = props => {
  let someVariable

  //function to set someVariable
  const setSV = data => {
    someVariable = data
  }

  // send down two props, stuff and setter
  return <Child stuff="hello world" setter={setSV} />
}
Props allows a component to receive data from its parent component.

Some rules
Props can only be sent from a parent to a child
If the parent needs data from the child it should send a function as a prop then the child can pass its data to the function as an argument.

*/