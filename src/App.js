import React, { Component } from 'react';
import './reset.css';
import './App.css';
import queryString from 'query-string';
import Image from './components/Image';
import Header from './components/Header';
const XmlReader = require('xml-reader');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      taskId: 0,
      segments: [],
      xmlDump: null,
      startImgId: 0,
      stopImgId: 100,
      columns: 2
    };
  }
  componentDidMount() {
    const values = queryString.parse(window.location.href.split('?')[1]);
    const xmlDump = values.xmlDump;
    const startImgId = values.startImgId;
    const stopImgId = values.stopImgId;
    const columns = values.columns;

    if (xmlDump && startImgId && stopImgId) {
      fetch(xmlDump)
        .then(response => response.text())
        .then(xml => {
          const data = XmlReader.parseSync(xml /*, options*/);
          const taskId = data.children.filter(child => {
            return child.name === 'meta';
          })[0].children[0].children[0].children[0].value;
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
            return child.name === 'image' && stopImgId >= id && startImgId <= id;
          });
          // images =  images.slice(Math.max(images.length - 100, 1));
          this.setState({ images, segments, taskId, xmlDump, startImgId, stopImgId, columns });
        });
    } else {
      this.setState({ xmlDump, startImgId, stopImgId });
    }
  }

  render() {
    const { images, taskId, segments, columns } = this.state;
    return (
      <div class="wrapper">
        <Header />
        <main>
          {this.state.xmlDump ? (
            <div
              className=""
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${this.state.columns}, 1fr)`
              }}
            >
              {images
                ? images.map(image => (
                    <Image
                      key={image.attributes.id}
                      image={image}
                      segments={segments}
                      taskId={taskId}
                      columns={columns}
                    />
                  ))
                : ''}
            </div>
          ) : (
            <div>
              <span>
                {`Load the attributes "<host>?xmlDump=<url>&startImgId=1&stopImgId=1000&columns=3" on the URL`}
              </span>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
