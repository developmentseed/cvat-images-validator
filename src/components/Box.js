import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Rect, Text } from 'react-konva/lib/ReactKonvaCore';
import 'konva/lib/shapes/Rect';
import 'konva/lib/shapes/Text';
import 'konva/lib/shapes/Circle';
import 'konva/lib/shapes/Line';

class Box extends Component {
  render() {
    const attr = this.props.boxProp.attributes;
    const layerHeight = this.props.layerHeight;
    const layerWidth = this.props.layerWidth;
    const imgAtrr = this.props.imgAtrr;
    const xtl = (Number(attr.xtl) * layerWidth) / Number(imgAtrr.width);
    const ytl = (Number(attr.ytl) * layerHeight) / Number(imgAtrr.height);
    const xbr = (Number(attr.xbr) * layerWidth) / Number(imgAtrr.width) - xtl;
    const ybr = (Number(attr.ybr) * layerHeight) / Number(imgAtrr.height) - ytl;
    let labels = this.props.boxProp.children.map(child => {
      return `${child.attributes.name}=${child.children[0].value}\n`;
    });
    // In case of windows
    const txt = labels.length > 0 ? labels.join('') : attr.label;
    return (
      <Layer>
        <Rect
          x={xtl}
          y={ytl}
          width={xbr}
          height={ybr}
          strokeWidth={5}
          drawBorder={true}
          fill={`rgba(${this.props.color},0.1)`}
          stroke={`rgb(${this.props.color})`}
          strokeWidth={2}
          dash={attr.occluded === '1' ? [10, 5] : []}
          // draggable={true}
        />
        <Text
          x={xtl}
          y={ytl}
          text={txt}
          fill={'white'}
          fontStyle={'bold'}
          fontSize={16}
          fontFamily={'Roboto'}
        />
      </Layer>
    );
  }
}

export default Box;
