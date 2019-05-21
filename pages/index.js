import React from 'react'
import '../styles/styles.scss'

export default (props) => (
  <div className='app'>
    <h3>Hello world! - {props.name || 'John Andrey'}</h3>
  </div>
);
