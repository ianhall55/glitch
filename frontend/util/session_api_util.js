import $ from 'jquery'
import { receiveCurrentUser, receiveSignupErrors, receiveLoginErrors } from '../actions';


export const signup = function(user) {
  return (dispatch) => {
    $.post({ url: `api/users`, data: user, })
      .done((data) => {
        dispatch(receiveCurrentUser(data));
      })
      .fail((xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveSignupErrors(errors));
      })
  }
};


export const login = function(user) {
  return (dispatch) => {
    $.post({ url: `api/session`, data: user })
    .done((data) => {
      dispatch(receiveCurrentUser(data));
    })
    .fail((xhr) => {
      const errors = xhr.responseJSON;
      dispatch(receiveLoginErrors(errors));
    })
  }
};

export const logout = function(success) {
  $.ajax({
    method: 'DELETE',
    url: `api/session`,
    success,
    error: () => {
      console.log("Logout error in SessionUtil#logout");
    }
  });
};
