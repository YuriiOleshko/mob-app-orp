import React, {FunctionComponent, useState} from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {IntlProvider} from 'react-intl';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NativeModules, Platform} from 'react-native';
import Splash from "./src/pages/Splash";
import Home from "./src/pages/Home";

let deviceLanguage = Platform.OS === 'ios' ?
    NativeModules.SettingsManager.settings.AppleLocale :
    NativeModules.I18nManager.localeIdentifier
if (deviceLanguage === undefined) {
    // iOS 13 workaround, take first of AppleLanguages array
    deviceLanguage = NativeModules.SettingsManager.settings.AppleLanguages[0]
    if (deviceLanguage == undefined) {
        deviceLanguage = 'en';
    }
}
export const Context = React.createContext();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const local = deviceLanguage.split(/[-_]/)[0]
const translations = {
    en: require('./src/lang/en-US.json'),
    ru: require('./src/lang/ru.json')
};

let lang = translations[local] ?? translations['en'];


const App = () => {
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState(translations['en']);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale) {
            setMessages(translations[newLocale]);
        } else {
            setMessages(translations['en']);
        }
    }

    return (
        <Context.Provider value={{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale} defaultLocale='en'>
                <NavigationContainer>
                    <MainStack.Navigator initialRouteName="Intro"  >{/* Замена Switch */}
                        <MainStack.Screen name="Intro" component={Splash} options={{
                            headerShown: false}} />{/* Замена Route */}
                        <MainStack.Screen name="Home" component={Home} options={{
                            headerShown: false}} />
                    </MainStack.Navigator>
                </NavigationContainer>
            </IntlProvider>
        </Context.Provider>
    );
}
// <ScrollView>
//     <Text>{intl.formatMessage({id: 'title', defaultMessage: 'Cancel'})}</Text>
//     <View>
//         <Text>Some more text</Text>
//         <Image
//             source={{
//                 uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//             }}
//             style={{width: 200, height: 200}}
//         />
//     </View>
//     <TextInput
//         style={{
//             height: 40,
//             borderColor: 'gray',
//             borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//     />
// </ScrollView>
export default App;
