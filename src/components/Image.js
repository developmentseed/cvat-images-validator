import React, { Component } from 'react';
import { Stage } from 'react-konva/lib/ReactKonvaCore';
import 'konva/lib/shapes/Rect';
import 'konva/lib/shapes/Text';
import 'konva/lib/shapes/Circle';
import 'konva/lib/shapes/Line';
import Copy from './Copy';
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
  constructor(props) {
    super(props);
    this.state = {
      segment: null,
      id: 0,
      reviwed: false,
      cvatServer: null
    };
  }

  componentWillMount() {
    const id = this.props.image.attributes.id;
    const segment = this.props.segments.filter(seg => {
      return seg[2] >= id && seg[1] <= id;
    })[0];
    const cvatServer = segment[3].split('/?')[0];
    this.setState({ segment, id, cvatServer });
  }

  open = () => {
    window.open(`${this.state.segment[3]}&frame=${this.state.id}`);
    this.setState({ reviwed: true });
  };

  render() {
    const boxes = this.props.image.children;
    const index = this.props.index;
    const layerWidth = window.innerWidth / this.props.columns - 10;
    const imgAtrr = this.props.image.attributes;
    const imgUrl = `${this.state.cvatServer}/api/v1/tasks/${this.props.taskId}/frames/${this.state.id}`;
    // const imgUrl = `${cvatServer}/${this.props.image.attributes.name}`;
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
        <div style={this.state.reviwed ? { padding: '10px', backgroundColor: '#d68a0d' } : {}}>
          {`${index + 1} | ${imgAtrr.id} | ${imgAtrr.width}*${imgAtrr.height}`}
          <Copy imgPath={imgAtrr.name} />
        </div>
      </div>
    );
  }
}

export default Image;
