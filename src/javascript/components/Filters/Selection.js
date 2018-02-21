import React from 'react';

class Selection extends React.Component {
  onSelectionClick = (event) => {
    event.preventDefault();
    console.log(this.props.name)
    this.props.onSelectionClick(this.props.name);
  };

  render = () => (
    <div
      className={`filters__selections__selection ${this.props.name === 'Reset All' ? 'filters__selections__selection--reset-all' : ''}`}
      onClick={this.onSelectionClick}
    >
      { this.props.name }
      <span className="filters__selections__selection__x">✘</span>
    </div>
  );
}

export default Selection;
