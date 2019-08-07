# CVAT images validator

This app helps to review all the images and the box drawn in [CVAT](https://github.com/opencv/cvat). The app accepts all the parameter in the query URL. Allowed arguments:

- `xmlDump` ,URL of the Bump annotation file.
- `startImgId` e.g `1`
- `stopImgId` e.g `1000`
- `columns`, number of columns to display the images e.g `3`.

![](https://user-images.githubusercontent.com/1152236/62645319-92ccf900-b911-11e9-8aeb-e9df08bf60c5.gif)

## Scripts

- `yarn start` developement mode
- ` yarn build` build the app.

# For running this app

In order to run the app and access to the images, we need to build first and put the app in the same server where is running the CVAT, or we need to add the IP  or domain in `ALLOWED_HOSTS` of [CVAT](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/installation.md#advanced-settings).


**Start up the app*** 
```
git clone https://github.com/developmentseed/cvat-images-validator
cd cvat-images-validator/ 
yarn build
cd build/
python3 -m http.server 3000
```