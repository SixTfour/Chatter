import { updateDarkMode, updateUser } from "../";
import { AsyncStorage } from "react-native";

/* Must import all actions used */
export const setDarkMode = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('Dark Mode', JSON.stringify(value));
            dispatch(updateDarkMode(value));
        } catch(error) {
            console.log(error.message);
        }
    }
}

export const getDarkMode = () => {
    return async (dispatch) => {
        try {
            const value = await AsyncStorage.getItem('Dark Mode');
            const parsedValue = JSON.parse(value);
            dispatch(updateDarkMode(parsedValue));
        } catch(error) {
            console.log(error.message);
        }
    }
}
