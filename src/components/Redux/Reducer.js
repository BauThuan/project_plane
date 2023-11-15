const initState = {
  languageEN: false,
  isLogIn: false,
  changeBgColor: true,
  listOfRoundTrip: [],
  listOfOneWay: [],
  listOfManyCities: [],
  listProfile: [],
  listLogin: {},
  newTitle: "",
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
    case "OneWay":
      return {
        ...state,
        listOfOneWay: {
          ...state.listOfOneWay,
          addressStart: action.payload.addressStart,
          addressEnd: action.payload.addressEnd,
          startTime: action.payload.startTime,
          adult: action.payload.adult,
          children: action.payload.children,
          cabin: action.payload.cabin,
        },
      };
    case "isRegister":
      return {
        ...state,
        listLogin: {
          ...state.listLogin,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "isTitle":
      return {
        ...state,
        newTitle: action.payload,
      };
    case "isProfile":
      return {
        ...state,
        listProfile: {
          ...state.listProfile,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          birthday: action.payload.birthday,
          address: action.payload.address,
          phone: action.payload.phone,
          identification: action.payload.identification,
        },
      };

    default:
      return state;
  }
};
export default rootReducer;
