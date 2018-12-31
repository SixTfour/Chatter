const updateDarkMode = (lists) => ({ type: "UPDATE_DARK_MODE", payload: lists });
const updateUser = (list) => ({ type: "UPDATE_USER", payload: list });

export { updateDarkMode, updateUser };