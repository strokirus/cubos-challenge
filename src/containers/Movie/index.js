import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, string, bool, object } from 'prop-types';

import {
  fetchMovie,
} from './actions';

import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Chip from '../../components/Chip/Chip';
import Rating from '../../components/Rating/Rating';

class MovieContainer extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    const { id } = this.props;

    if (id && id.length > 0) {
      this.props.fetchMovie(id);
    }
  }

  render() {
    const { info, isFetching } = this.props;

    return (
      <Fragment>
        <HeaderTitle
          title="Movies"
        />
        {isFetching &&
          <p>Carregando</p>
        }

        {!isFetching &&
          <article>
            <header>
              {info.title &&
                <h1>{info.title}</h1>
              }
              {info.release_date &&
                <span>{info.release_date}</span>
              }
            </header>

            <section>
              <section>
                <h3>Sinopse</h3>
                {info.overview &&
                  <p>{info.overview}</p>
                }
              </section>

              <section>
                <h3>Informações</h3>
                <div>

                  {info.status &&
                    <section>
                      <h4>Situação</h4>
                      <p>{info.status}</p>
                    </section>
                  }

                  {info.original_language &&
                    <section>
                      <h4>Idioma</h4>
                      <p>{info.original_language}</p>
                    </section>
                  }

                  {info.budget &&
                    <section>
                      <h4>Duração</h4>
                      <p>{info.runtime}</p>
                    </section>
                  }


                  {info.budget &&
                    <section>
                      <h4>Orçamento</h4>
                      <p>{info.budget}</p>
                    </section>
                  }

                  {info.revenue &&
                    <section>
                      <h4>Receita</h4>
                      <p>{info.revenue}</p>
                    </section>
                  }

                  {info.profit &&
                    <section>
                      <h4>Lucro</h4>
                      <p>{info.profit}</p>
                    </section>
                  }
                </div>

                <div>
                  {info.genres && info.genres.map(g => (
                    <Chip
                      id={g.id}
                      key={g.id}
                      text={g.name}
                    />
                  ))}

                  {info.rating &&
                    <Rating
                      text={info.rating}
                    />
                  }
                </div>
              </section>
              {info.poster_path &&
                <img
                  src={info.poster_path}
                  title={info.title || ''}
                  alt={info.title || ''}
                  height="200px"
                />
              }
            </section>
          </article>
        }

      </Fragment>
    );
  }
}

MovieContainer.propTypes = {
  fetchMovie: func.isRequired,
  info: object.isRequired,
  isFetching: bool,
  id: string.isRequired,
};

MovieContainer.defaultProps = {
  fetchMovie: {},
  isFetching: true,
};

function mapStateToProps(state, ownProps) {
  const { info, isFetching } = state.movie;
  return {
    ...ownProps,
    info,
    isFetching,
  };
}

const mapDispatchToProps = {
  fetchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
