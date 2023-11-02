const initState = {
  languageEN: false,
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
    default:
      return state;
  }
};
export default rootReducer;
