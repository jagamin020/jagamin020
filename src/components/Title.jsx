import React from 'react'

export const Title = (props) => {
  return (
    <div className="titleProt">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}