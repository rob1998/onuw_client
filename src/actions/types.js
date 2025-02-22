// This file stores all of the actions types for redux

// For username:
export const NEW_USERNAME = "NEW_USERNAME";
export const ADD_PLAYER = "ADD_PLAYER";

// For gameState:
export const NEW_GAMEPHASE = "NEW_GAMEPHASE";

// For roleSelect:
export const NUMROLESELECTED = "NUMROLESELECTED";

// For gameActions:
export const PLAYER_ACTION = "PLAYER_ACTION";
export const TOGGLE_CARD = "TOGGLE_CARD";
export const TOGGLE_CENTER = "TOGGLE_CENTER";
export const SELECT_SUB = "SELECT_SUB";
export const SELECT_ADD = "SELECT_ADD";
export const UPDATE_SELECT_NUM = "UPDATE_SELECT_NUM";

// For night actions
export const NIGHT_PLAYER_ADD = "NIGHT_PLAYER_ADD";
export const NIGHT_PLAYER_SUB = "NIGHT_PLAYER_SUB";
export const NIGHT_PLAYER_SET = "NIGHT_PLAYER_SUB";
export const NIGHT_PLAYER_RESET = "NIGHT_PLAYER_RESET";

// For day actions
export const DAY_KILLSELECT_SUBMIT = "DAY_KILLSELECT_SUBMIT";

// Actions that will dispatch from server:
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";
export const UPDATE_GAMEPHASE = "UPDATE_GAMEPHASE";
export const UPDATE_ROLE = "UPDATE_ROLE";
export const UPDATE_ROLEDESCRIPTION = "UPDATE_ROLEDESCRIPTION"
export const ROLE_TOGGLE = "ROLE_TOGGLE";
export const ROLE_ADD = "ROLE_ADD";
export const ROLE_SUB = "ROLE_SUB";
export const MAJORITY_ADD = "MAJORITY_ADD";
export const MAJORITY_SUB = "MAJORITY_SUB";
export const MAJORITY_RESET = "MAJORITY_RESET";
export const UPDATE_MAJORITY_READY = "UPDATE_MAJORITY_READY";
export const UPDATE_MAJORITY = "UPDATE_MAJORITY";
export const UPDATE_ALL_ROLES = "UPDATE_ALL_ROLES";
export const UPDATE_GAME_ROLES = "UPDATE_GAME_ROLES";
export const UPDATE_DAYDESCRIPTION = "UPDATE_DAYDESCRIPTION";
export const UPDATE_KILLS = "UPDATE_KILLS";
export const UPDATE_GAME_RESET = "UPDATE_GAME_RESET"

// For communicating with the server, there are the actions the client listens for
// makes an object of the form {userNew: 'userNew'}
export const messageTypes = [
  UPDATE_PLAYERS,
  UPDATE_GAMEPHASE,
  UPDATE_ROLE,
  UPDATE_ROLEDESCRIPTION,
  UPDATE_MAJORITY,
  UPDATE_MAJORITY_READY,
  UPDATE_ALL_ROLES,
  UPDATE_GAME_ROLES,
  UPDATE_SELECT_NUM,
  UPDATE_DAYDESCRIPTION,
  UPDATE_KILLS,
  UPDATE_GAME_RESET
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})
