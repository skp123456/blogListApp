import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item-container">
      <div className="blog-content-container">
        <div>
          <h1 className="blog-title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <p className="time">{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
