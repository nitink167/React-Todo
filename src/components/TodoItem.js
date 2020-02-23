 import React from 'react';
 import PropTypes from 'prop-types'

 class TodoItem extends React.Component {
	 getStyle = () => {
		 return {
			 background: '#e5e5e5',
			 padding: '10px',
			 borderBottom: '2px #ccc dashed',
			 textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		 }
	 }

	 render() {
		 const { id, title } = this.props.todo;

		 return (
			 <div style={this.getStyle()}>
			 	<p>
				 	<input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> { ' ' }
				 	{ title }
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} >x</button>
				</p>
			 </div>
		 )
	 }
 }

 TodoItem.propTypes = {
 	todo: PropTypes.object.isRequired,
 	markComplete: PropTypes.func.isRequired,
 	delTodo: PropTypes.func.isRequired,
 }

const btnStyle = {
	background: 'red',
	color: 'white',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

 export default TodoItem;
