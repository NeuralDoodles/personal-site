import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const VisualCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post_visuals">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <center id={data.id}>
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} width="30%" />
        </center>
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

VisualCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default VisualCell;
