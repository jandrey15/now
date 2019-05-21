import React from 'react'
import '../styles/styles.scss'

export default (props) => (
  <div className='app'>
    <h3>Hello world! - {props.name || 'John Andrey'}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores eum possimus, inventore, asperiores itaque laudantium reiciendis deserunt corrupti ratione ut adipisci accusantium iure quaerat dolores ipsam labore provident ducimus.</p>
  </div>
);
