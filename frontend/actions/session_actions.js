export const SessionConstants = {
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER"
};

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});
