import PropTypes from 'prop-types';
import css from './Description.module.css';

export const Description = ({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.item}>@{tag}</p>
        <p className={css.item}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.list_item}>
          <span className={css.lable}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.lable}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.lable}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
