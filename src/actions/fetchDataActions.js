import XmlReader from 'xml-reader';
import utils from './../utils';

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = fData => ({
  type: FETCH_DATA_SUCCESS,
  payload: { fData }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export function fetchData(values) {
  // const xmlDump = values.xmlDump;
  // const startImgId = values.startImgId;
  // const stopImgId = values.stopImgId;
  // const columns = values.columns;
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch(values.xmlDump)
      .then(handleErrors)
      .then(response => response.text())
      .then(xml => {
        const data = XmlReader.parseSync(xml /*, options*/);
        const taskId = data.children.filter(child => {
          return child.name === 'meta';
        })[0].children[0].children[0].children[0].value;

        /**
         * Get all attributes
         */
        // const attrs = data.children.filter(child => {
        //   return child.name === 'meta';
        // })[0].children[0].children[12].children[0].children[1].children;
        // const attrValues = attrs.map(child => {
        //   return child
        // })
        /**
         * Load taskId
         */

        values.taskId = taskId;

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

        /**
         * Load segments
         */
        values.segments = segments;

        let images = data.children.filter(child => {
          const id = Number(child.attributes.id);
          return child.name === 'image' && values.stopImgId >= id && values.startImgId <= id;
        });
        images = images.slice(Math.max(images.length - 5000, 1));

        /**
         * Filter images acoording to the attributes
         */

        images = images.map(image => {
          const boxes = image.children.map(box => {
            return utils.formatProps(box);
          });
          image.children = boxes;
          return image;
        });

        const filterAttr = (values.attr || '').split(':');
        if (values.attr && filterAttr.length === 2) {
          images = images.filter(image => {
            const boxes = image.children;
            const numBoxesFiltered = boxes.filter(box => {
              return box.labels[filterAttr[0]] && box.labels[filterAttr[0]] === filterAttr[1];
            }).length;
            if (!numBoxesFiltered) {
              return false;
            } else {
              return true;
            }
          });
        }

        /**
         * Sort the images
         */
        images = images.sort((a, b) =>
          Number(a.attributes.id) > Number(b.attributes.id)
            ? 1
            : Number(b.attributes.id) > Number(a.attributes.id)
              ? -1
              : 0
        );
        /**
         * Load images
         */
        values.images = images;

        dispatch(fetchDataSuccess(values));
        return values;
        // images =  images.slice(Math.max(images.length - 100, 1));
        // this.setState({ images, segments, taskId, xmlDump, startImgId, stopImgId, columns });
      })
      .catch(error => {
        console.log('-----------error-------------------------');
        console.log(error); 
        dispatch(fetchDataFailure(error))
      });
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  console.log(response)
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
