import AsyncStorage from "@react-native-async-storage/async-storage";

const getAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch(e) {
        // read key error
    }

   return keys;
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
}
const getData = async (name) => {
    try {
        const jsonValue = await AsyncStorage.getItem(name)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}
const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch(e) {
        // clear error
    }

    console.log('Done.')
}
export { getAllKeys,getData,clearAll }
