export const SessionConstants = {
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  LOGOUT: "LOGOUT"
};

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutUser = () => ({
  type: SessionConstants.LOGOUT
});
