# CVAT images validator

This app helps to review all the images and the box drawn in [CVAT](https://github.com/opencv/cvat). The app accepts all the parameter in the query URL. Allowed arguments:

- `xmlDump` ,URL of the dump annotation file.
- `startImgId` e.g `1`
- `stopImgId` e.g `1000`
- `columns`, number of columns to display the images e.g `3`.

- Fixing a wrong tag from garage to window.

![](cvat-validator-fixing.gif)

- Display number of columns per row.

![](cvat-validator-columns.gif)


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