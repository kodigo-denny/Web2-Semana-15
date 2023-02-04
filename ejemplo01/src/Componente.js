import React from 'react'

const Componente = (props) => {
    console.log(props.fuente)
  return (
    <div>
        <a className='btn btn-primary' href={props.fuente} target="_blank">Primary</a>
        <a className='btn btn-secondary'>Secondary</a>
    </div>
  )
}

export default Componente