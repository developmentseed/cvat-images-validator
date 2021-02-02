export const UI_LOADING_ON = 'UI_SUCCESS';
export const UI_LOADING_OFF = 'UI_FAILURE';

export const loadingOn = () => ({
  type: UI_LOADING_ON,
});

export const loadingOff = () => ({
  type: UI_LOADING_OFF,
});
