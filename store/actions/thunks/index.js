import { updateDarkMode, updateUser } from "../";
import { AsyncStorage } from "react-native";

/* Must import all actions used */
export const setDarkMode = (value) => {
    return async (dispatch) => {
        try {
            AsyncStorage.setItem('Dark Mode', JSON.stringify(value)).then((value) => {
                dispatch(updateDarkMode(value));
            });
        } catch(error) {
            console.log(error.message);
        }
    }
}

export const getDarkMode = () => {
    return async (dispatch) => {
        try {
            AsyncStorage.getItem('Dark Mode').then((value) => {
                dispatch(updateDarkMode(value));
            });
        } catch(error) {
            console.log(error.message);
        }
    }
}
