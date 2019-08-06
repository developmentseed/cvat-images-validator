import React, { Component } from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';
import queryString from 'query-string';

import Image from './components/Image';
const XmlReader = require('xml-reader');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }
  componentDidMount() {
    const values = queryString.parse(window.location.href.split('?')[1]);
    // dump
    //start=10
    //stop=20

    fetch(values.dump)
      .then(response => response.text())
      .then(xml => {
        const data = XmlReader.parseSync(xml /*, options*/);
        let segments = data.children
          .filter(child => {
            return child.name === 'meta';
          })[0]
          .children[0].children.filter(c => c.name === 'segments')[0]
          .children.map(seg => {
            return seg.children.map(c => {
              return c.children[0].value;
            });
          });
        segments = segments.map(seg => {
          return [Number(seg[0]), Number(seg[1]), Number(seg[2]), seg[3]];
        });

        let images = data.children.filter(child => {
          const id = Number(child.attributes.id);
          return child.name === 'image' && values.stop >= id && values.start <= id;
        });
        // images =  images.slice(Math.max(images.length - 100, 1));
        this.setState({ images, segments });
      });
  }

  render() {
    const images = this.state.images;
    const segments = this.state.segments;
    return (
      <div className="App">
        <div className="wrapper">
          {images
            ? images.map(image => (
                <Image key={image.attributes.id} image={image} segments={segments} />
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default App;
