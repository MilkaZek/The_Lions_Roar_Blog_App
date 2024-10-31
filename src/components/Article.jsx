export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <div className="articleBody">
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>
          <p className="body">{article.body}</p>
          </div>
        </section>
      )}
    </article>
  )
}
