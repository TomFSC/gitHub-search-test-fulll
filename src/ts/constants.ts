export const DEBOUNCE_DELAY = 500;
export const EMPTY_STRING = "";
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
export enum InputTypes {
  CHECKBOX = "checkbox",
}
export enum ClassNames {
  MAIN_CONTAINER = "main-container",
  HEADER_SMALL = "header-small",
  HEADER_LARGE = "header-large",
  TITLE = "title",
  BUTTON_SMALL = "button-small",
  BUTTON_LARGE = "button-large",
  EDIT_PANEL_SMALL = "edit-panel-small",
  EDIT_PANEL_LARGE = "edit-panel-large",
  SEARCH_CONTAINER_SMALL = "search-container-small",
  SEARCH_CONTAINER_LARGE = "search-container-large",
  SELECT_USERS = "select-users",
  EDIT_OPTIONS = "edit-options",
  USERS_CONTAINER = "users-container",
  USERS = "users",
  CARD_CONTAINER = "card-container",
  CARD_CHECKBOX = "card-checkbox",
  CARD_BUTTON = "card-button",
  AVATAR = "avatar",
  PROFILE_INFOS = "profile-infos",
  ERROR_MESSAGE = "error",
}

export enum Icons {
  SOLID_RIGHT_FROM_BRACKET = "fa-solid fa-right-from-bracket",
  SOLID_USER_PEN = "fa-solid fa-user-pen",
  SOLID_CIRCLE_XMARK = "fa-solid fa-circle-xmark",
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
