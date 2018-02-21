import React from 'react';

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

export default Item;
