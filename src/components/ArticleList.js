



function ArticleList({ posts }) {
    const articleData = posts.map(({
      title, 
      date, 
      preview
    }) => (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    ))
    return (articleData)
}

export default ArticleList;