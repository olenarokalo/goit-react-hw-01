import "./Profile.css";
export default function Profile({
  user: {
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={
            <div className="profile">
              <div className="description">
                <img src={image} alt="User avatar" className="image" />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
              </div>
              <ul className="stats">
                <li className="stats-item">
                  <span className="label">Followers</span>
                  <span className="quantity">{followers}</span>
                </li>
                <li className="stats-item">
                  <span className="label">Views</span>
                  <span className="quantity">{views}</span>
                </li>
                <li className="stats-item">
                  <span className="label">Likes</span>
                  <span className="quantity">{likes}</span>
                </li>
              </ul>
            </div>
          }
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
