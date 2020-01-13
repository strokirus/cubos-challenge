import React from 'react';
import { object, func } from 'prop-types';

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

        {info.release_date &&
          <p>{info.release_date}</p>
        }
      </header>

      {info.overview &&
        <p>{info.overview}</p>
      }
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
