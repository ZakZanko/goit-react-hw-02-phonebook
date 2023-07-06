import PropTypes from 'prop-types';
import csss from './Container.module.css';

function Container({ children }) {
  return <div className={csss.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
