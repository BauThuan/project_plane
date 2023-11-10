const initState = {
  languageEN: false,
  isLogIn: false,
  changeBgColor: true,
  listOfRoundTrip: [],
  listOfOneWay: [],
  listOfManyCities: [],
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
    case "RoundTrip":
      return {
        ...state,
        listOfRoundTrip: {
          ...state.listOfRoundTrip,
          addressStart: action.payload.addressStart,
          addressEnd: action.payload.addressEnd,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          adult: action.payload.adult,
          children: action.payload.children,
          cabin: action.payload.cabin,
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
