const initState = {
  languageEN: false,
  isLogIn: false,
  changeBgColor: true,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LanguageEN":
      return {
        ...state,
        languageEN: true,
      };
    case "LanguageVN":
      return {
        ...state,
        languageEN: false,
      };
    case "LogIn":
      return {
        ...state,
        isLogIn: true,
      };
    case "LogOut":
      return {
        ...state,
        isLogIn: false,
      };
    case "LightChangeBgColor":
      return {
        ...state,
        changeBgColor: true,
      };
    case "DarkChangeBgColor":
      return {
        ...state,
        changeBgColor: false,
      };
    default:
      return state;
  }
};
export default rootReducer;
