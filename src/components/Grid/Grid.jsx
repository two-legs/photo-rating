import React, { Component } from 'react';

import './Grid.css';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };
  }

  render() {
    const itemWidth = this.state.width / this.props.columns,
      itemHeight = this.props.itemHeight || itemWidth;
    const height = this.maxRowsCount() * itemHeight;
    return (
      <div
        className="Grid"
        ref={container => (this.container = container)}
        style={{ width: this.state.width, height }}
      >
        {this.state.width > 0
          ? React.Children.map(this.props.children, (item, index) => (
              <GridItem
                width={itemWidth}
                height={itemHeight}
                column={index % this.props.columns}
                row={Math.floor(index / this.props.columns)}
              >
                {item}
              </GridItem>
            ))
          : 0}
      </div>
    );
  }

  componentDidMount() {
    //const width = this.container.clientWidth;
    const rect = this.container.parentNode.getBoundingClientRect();
    console.log(rect);
    this.setState({ width: rect.width });
  }

  maxRowsCount() {
    return Math.floor(this.props.children.length / this.props.columns) + 1;
  }
}

class GridItem extends Component {
  constructor(props) {
    super(props);

    const position = this.getCoords(this.props.row, this.props.column);
    this.state = { position, oldPositon: position };
  }
  render() {
    return (
      <div
        className="Grid__Item"
        style={{
          width: this.props.width,
          height: this.props.height,
          ...this.state.position
        }}
        ref={element => this.element = element}
      >
        {this.props.children}
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      position: this.getCoords(nextProps.row, nextProps.column),
      oldPosition: this.state.position
    });
  }

  componentDidMount() {
    console.log(`Mount item`);
  }

  componentWillUnmount() {
    console.log(`Unmount item`);
  }

  componentDidUpdate(previousProps) {
    const newBox = this.state.position;
    const oldBox = this.state.oldPosition;
    
    const deltaX = oldBox.left - newBox.left; 
    const deltaY = oldBox.top  - newBox.top;

    requestAnimationFrame( () => {
      // Before the DOM paints, Invert it to its old position
      this.element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      // Ensure it inverts it immediately
      this.element.style.transition = 'transform 0s';  

      requestAnimationFrame( () => {
        // In order to get the animation to play, we'll need to wait for
        // the 'invert' animation frame to finish, so that its inverted
        // position has propagated to the DOM.
        //
        // Then, we just remove the transform, reverting it to its natural
        // state, and apply a transition so it does so smoothly.
        this.element.style.transform  = '';
        this.element.style.transition = 'transform 500ms';
      });
    });
  }

  getCoords(row, column) {
    return {
      left: this.props.width * column,
      top: this.props.height * row
    };
  }
}
