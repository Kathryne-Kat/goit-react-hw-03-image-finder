import { ColorRing } from 'react-loader-spinner';
import PropTypes from 'prop-types';
//import css from './Loader.module.css';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

Loader.propType = {
  ColorRing: PropTypes.func,
};
