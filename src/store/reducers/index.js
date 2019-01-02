const initialState = {
    user: {},
    settings: {
        "Dark Mode": false
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_DARK_MODE":
            return { ...state, settings: { ...state.settings, "Dark Mode": action.payload }};
        case "UPDATE_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default rootReducer;