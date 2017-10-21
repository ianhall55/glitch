import $ from 'jquery'
import { receiveCurrentUser, logoutUser, receiveSignupErrors, receiveLoginErrors } from '../actions';


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

export const logout = function() {
  return (dispatch) => {
    $.ajax({
      method: 'DELETE',
      url: `api/session`
    })
      .done(() => dispatch(logoutUser()))
      .fail(() => console.log("Logout error in SessionUtil#logout"))
  }
};
