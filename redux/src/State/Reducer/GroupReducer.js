const groupState = {
  group: [
    {
      fname: "Aamer",
      lname: "sohel",
      pic: "Assest/1.jpg",
      position: "UI Developer",
      techno: "React",
    },
    {
      fname: "Aadil",
      lname: "Hashmi",
      pic: "Assest/2.jpg",
      position: "UI Developer",
      techno: "React",
    },
  ],
};
export const groupReducers = (state = groupState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return {
        ...state,
        group: [action.group, ...state.group],
      };
    default:
      return state;
  }
};
