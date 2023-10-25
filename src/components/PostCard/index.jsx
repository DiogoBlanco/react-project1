export const PostCard = ({cover, title, body}) => (
    <div className="post">
      <img src={cover} alt={title}></img>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );

  
