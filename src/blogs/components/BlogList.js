import React from 'react'
import Card from '../../shared/component/UIElements/Card'
import BlogItem from './BlogItem'
import './BlogList.css'

const BlogList = props => {

  if(props.items.length===0){
    return(
      <div className="place-list center">
        <Card>
          <h2>No blogs found. Maybe create one?</h2>
          <button>Add blog</button>
        </Card>
      </div>
    )
  }

  return (
    <ul className="place-list">{
      props.items.map(blog=>(
        <BlogItem
        key={blog.id}
        id={blog.id}
        title={blog.title}
        description={blog.description}
        creatorId={blog.creator}
        />
      ))}</ul>
  )

  }
export default BlogList