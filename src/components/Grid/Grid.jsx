import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

/**
 * Сетка для элементов. 
 */
export default class Grid extends Component {
  static propTypes = {
    /**
     * Количество колонок. 
     */
    columns: PropTypes.number.isRequired,
    /**
     * Высота элементов в гриде. 
     */
    itemHeight: PropTypes.number,
    /**
     * Анимация перестроения грида. 
     */
    animate: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };
  }

  render() {
    const itemWidth = Math.floor(this.state.width / this.props.columns),
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
                animate={this.props.animate}
              >
                {item}
              </GridItem>
            ))
          : 0}
      </div>
    );
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  /**
   * Вычисляет максиальное количество строк в гриде. 
   */
  maxRowsCount() {
    return Math.floor(this.props.children.length / this.props.columns) + 1;
  }

  /**
   * Обновляет ширину грида. 
   */
  updateWidth() {
    const rect = this.container.parentNode.getBoundingClientRect();
    this.setState({ width: Math.floor(rect.width) });
  }
}

/**
 * Элемент грида. 
 */
class GridItem extends PureComponent {
  static PropTypes = {
    /**
     * Индекс строки. 
     */
    row: PropTypes.number.isRequired,
    /**
     * Индекс столбца. 
     */
    column: PropTypes.number.isRequired,
    /**
     * Ширина элемента. 
     */
    width: PropTypes.number.isRequired,
    /**
     * Высота элемента. 
     */
    height: PropTypes.number.isRequired,
    /**
     * Анимация перестроения грида. 
     */
    animate: PropTypes.bool
  };

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
        ref={element => (this.element = element)}
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

  componentDidUpdate(previousProps) {
    if (this.props.animate) {
      const newBox = this.state.position;
      const oldBox = this.state.oldPosition;

      const deltaX = oldBox.left - newBox.left;
      const deltaY = oldBox.top - newBox.top;

      requestAnimationFrame(() => {
        this.element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        this.element.style.transition = 'transform 0s';

        requestAnimationFrame(() => {
          this.element.style.transform = '';
          this.element.style.transition = 'transform 500ms ease-in-out 300ms';
        });
      });
    }
  }

  /**
   * Получает координаты элемента.
   * @param {number} row Индекс строки.
   * @param {number} column Индекс столбца. 
   */
  getCoords(row, column) {
    return {
      left: this.props.width * column,
      top: this.props.height * row
    };
  }
}
