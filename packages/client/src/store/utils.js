export const toJS = (s) => (s && typeof s.toJS !== 'undefined' ? s.toJS() : s);

const createActionType = (baseName) => ({
  BASE: baseName,
  SUCCESS: `${baseName}--success`,
  FAILED: `${baseName}--failed`,
});

export const actionCreator = (baseName) => ({
  types: createActionType(baseName),

  base: (payload) => ({
    type: createActionType(baseName).BASE,
    payload,
  }),

  success: (payload) => ({
    type: createActionType(baseName).SUCCESS,
    payload,
  }),

  failed: (payload) => ({
    type: createActionType(baseName).FAILED,
    payload,
  }),
});
