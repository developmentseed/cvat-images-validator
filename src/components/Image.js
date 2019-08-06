import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage } from 'react-konva/lib/ReactKonvaCore';
import 'konva/lib/shapes/Rect';
import 'konva/lib/shapes/Text';
import 'konva/lib/shapes/Circle';
import 'konva/lib/shapes/Line';

import Box from './Box';
const rgbColors = [
  '128,0,128',
  '255,0,0',
  '0,0,255',
  '0,128,0',
  '255,255,153',
  '128,0,0',
  '255,105,180',
  '50,205,50'
];
class Image extends Component {
  open = () => {
    const id = this.props.image.attributes.id;
    const seg = this.props.segments.filter(seg => {
      return seg[2] >= id && seg[1] <= id;
    })[0];
    window.open(`${seg[3]}&frame=${id}`);
  };
  render() {
    const boxes = this.props.image.children;
    const imgUrl = `http://54.80.82.6:8181/${this.props.image.attributes.name}`;
    const layerWidth = window.innerWidth / 2;
    const imgAtrr = this.props.image.attributes;
    return (
      <div className="imgContainer">
        <Stage
          width={layerWidth}
          height={layerWidth}
          style={{
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${layerWidth}px ${layerWidth}px`
          }}
          onClick={this.open}
        >
          {boxes
            ? boxes.map((box, i) => (
                <Box
                  boxProp={box}
                  key={`${this.props.image.attributes.id}-box-${i}`}
                  layerWidth={layerWidth}
                  layerHeight={layerWidth}
                  imgAtrr={imgAtrr}
                  color={rgbColors[i]}
                />
              ))
            : ''}
        </Stage>
        <div>{`${imgAtrr.id} | ${imgAtrr.name} | ${imgAtrr.width}*${imgAtrr.height}`}</div>
      </div>
    );
  }
}

export default Image;