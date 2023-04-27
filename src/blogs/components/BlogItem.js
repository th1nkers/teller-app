import React from 'react'
import Card from '../../shared/component/UIElements/Card'
import './BlogItem.css'
import Button from '../../shared/component/FormElements/Button'

const BlogItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        {/* <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button>Full Read</Button>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </div>
      </Card>
    </li>
  )
}

export default BlogItem