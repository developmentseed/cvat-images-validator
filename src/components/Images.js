import React, { Component } from 'react';
import Image from './Image';
class Images extends Component {
  render() {
    const { images, segments, taskId, columns } = this.props.data;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        }}
      >
        {images
          ? images.map((image,index) => {

            return (
              <Image
                key={image.attributes.id}
                image={image}
                segments={segments}
                taskId={taskId}
                columns={columns}
                index={index}
              />
            )})
          : ''}
      </div>
    );
  }
}

export default Images;
