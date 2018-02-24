import React from 'react';
import PropTypes from 'prop-types';
import { dummyClick } from '../../utilities';

class Item extends React.Component {
  onItemClick = () => {
    this.props.onItemClick(this.props.name);
  };

  render() {
    const { code, name, selected } = this.props;
    return (
      <li className="dropdown__item" onClick={this.onItemClick}>
        <span className={`dropdown__item__square ${selected ? 'dropdown__item__square--selected' : ''}`} />
        { name }
        { code && <span className="dropdown__item__color-circle" style={{ backgroundColor: code }} />}
      </li>
    );
  }
}

Item.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  onItemClick: PropTypes.func,
  selected: PropTypes.bool

};

Item.defaultProps = {
  code: 'EN code',
  name: 'EN name',
  onItemClick: dummyClick,
  selected: false
};

export default Item;
