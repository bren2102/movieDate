/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import pinterestCircle from '@iconify/icons-jam/pinterest-circle';
import facebookCircle from '@iconify/icons-jam/facebook-circle';
import twitterCircle from '@iconify/icons-jam/twitter-circle';

const Movie = props => {
  const { name, image, desc } = props;
  return (
    <div id="movie">
      <Link to={`/${name}`}>
        <div id="movieImg">
          <img src={image} alt={name} />
        </div>
      </Link>
      <h3>{name.toUpperCase()}</h3>
      <span>{desc}</span>
      <div id="social">
        <Icon icon={facebookCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
        <Icon icon={twitterCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
        <Icon icon={pinterestCircle} style={{ color: '#f1f1f1', fontSize: '30px' }} />
      </div>
    </div>
  );
};

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
};

Movie.defaultProps = {
  name: '',
  image: '',
  desc: '',
};

export default (withRouter(Movie));
