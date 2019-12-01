import React from 'react';
import { object, func } from 'prop-types';

import Rating from '../Rating/Rating';
import Chip from '../Chip/Chip';

const InfoListMovie = ({ info, onClick }) => (
  <article
    onClick={onClick}
    id="container-movie"
  >
    <section id="img">
      {info.img &&
        <img
          src={info.img}
          title={info.title || ''}
          alt={info.title || ''}
        />
      }
    </section>

    <section id="info">
      <header>
        {info.title &&
          <h1>{info.title}</h1>
        }

        {info.rating &&
          <Rating
            text={info.rating}
          />
        }

        {info.release_date &&
          <p>{info.release_date}</p>
        }
      </header>

      {info.overview &&
        <p>{info.overview}</p>
      }

      <footer>
        {info.genres && info.genres.map(g => (
          <Chip
            id={g.id}
            key={g.id}
            text={g.name}
          />
        ))}
      </footer>
    </section>
  </article>
);

InfoListMovie.propTypes = {
  info: object,
  onClick: func,
};

InfoListMovie.defaultProps = {
  info: {},
  onClick: () => {},
};

export default InfoListMovie;
