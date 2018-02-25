import React from 'react';

class Selection extends React.Component {
  onSelectionClick = (event) => {
    event.preventDefault();
    this.props.onSelectionClick(this.props.name);
  };

  render = () => (
    <div
      className={`filters__selections__selection filters__selections__selection${this.props.modifier}`}
      onClick={this.onSelectionClick}
    >
      { this.props.name }
      <span className="filters__selections__selection__x">✘</span>
    </div>
  );
}

export default Selection;
