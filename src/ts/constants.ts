export const DEBOUNCE_DELAY = 500;
export const USER_SEARCH_PLACEHOLDER = "Search for user";
export const EMPTY_USERS_MESSAGE = "No results...";
export const PROFILE_AVATAR_ALT = "profile-avatar";
export const ERROR_MESSAGE =
  "API rate limit exceeded, please wait before next request.";

export const EditMode = {
  ON: true,
  OFF: false,
};

//Header
export const HEADER_TITLE = "GitHub Search";

//Enums
export enum ClassNames {
  MAIN_CONTAINER = "main-container",
  HEADER_BUTTON = "header-btn",
  HEADER_BUTTON_ACTIVE = "header-btn active",
  EDIT_PANEL = "edit-panel",
  SEARCH_CONTAINER = "search-container",
  SELECT_USERS = "select-users",
  EDIT_OPTIONS = "edit-options",
  USERS_CONTAINER = "users-container",
  USERS = "users",
  CARD_CONTAINER = "card-container",
  CARD_CHECKBOX = "card-checkbox",
  CARD_BUTTON = "card-btn",
  AVATAR = "avatar",
  PROFILE_INFOS = "profile-infos",
  ERROR_MESSAGE = "error",
}

export enum Icons {
  SOLID_RIGHT_FROM_BRACKET = "fa-solid fa-right-from-bracket",
  SOLID_USER_PEN = "fa-solid fa-user-pen",
}

export enum Labels {
  HEADER_BUTTON = "Edit Mode",
  CARD_BUTTON = "View profile",
}

export enum UserKeys {
  AVATAR_URL = "avatar_url",
  ID = "id",
  LOGIN = "login",
}
