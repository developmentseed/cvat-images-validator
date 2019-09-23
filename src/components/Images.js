import React, { Component } from 'react';
import Image from './Image';

class Images extends Component {
    render() {
        const {images, segments, taskId, xmlDump, startImgId, stopImgId, columns} = this.props.data
        return (
            <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`
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
        );
    }
}

export default Images;