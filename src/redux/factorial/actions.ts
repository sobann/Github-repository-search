export const SAVE_FACTORIAL_SUCCESS = 'SAVE_FACTORIAL_SUCCESS';

export const saveFactorial = (payload:any) => ({
  type: SAVE_FACTORIAL_SUCCESS,
  payload: payload
});