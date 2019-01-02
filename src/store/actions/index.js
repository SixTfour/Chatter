const updateDarkMode = (value) => ({ type: "UPDATE_DARK_MODE", payload: value });
const updateUser = (user) => ({ type: "UPDATE_USER", payload: user });

export { updateDarkMode, updateUser };