// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
// import React, {FunctionComponent, useState} from 'react';
// import {IntlProvider} from 'react-intl';
// import {NativeModules, Platform} from 'react-native';
// import App from '../../../App.js';
//
//
// let deviceLanguage = Platform.OS === 'ios' ?
//     NativeModules.SettingsManager.settings.AppleLocale :
//     NativeModules.I18nManager.localeIdentifier
// if (deviceLanguage === undefined) {
//     // iOS 13 workaround, take first of AppleLanguages array
//     deviceLanguage = NativeModules.SettingsManager.settings.AppleLanguages[0]
//     if (deviceLanguage == undefined) {
//         deviceLanguage = 'en';
//     }
// }
// export const Context = React.createContext();
// const MainStack = createStackNavigator();
// const local = deviceLanguage.split(/[-_]/)[0]
// const translations = {
//     en: require('../../lang/en-US.json'),
//     ru: require('../../lang/ru.json')
// };
//
// let lang = translations[local] ?? translations['en'];
// // if (local === 'en') {
// //     lang = English;
// // } else if (local === 'ru') {
// //     lang = Russian;
// // } else {
// //     lang = English;
// // }
//
//
// function MultiLangWrapper(props) {
//     const [locale, setLocale] = useState(local);
//     const [messages, setMessages] = useState(lang);
//     function selectLanguage(e) {
//         const newLocale = e.target.value;
//         setLocale(newLocale);
//         if (newLocale) {
//             setMessages(translations[newLocale]);
//         } else {
//             setMessages(translations['en']);
//         }
//     }
//
//     return (
//         <Context.Provider value={{locale, selectLanguage}}>
//             <IntlProvider messages={messages} locale={locale} defaultLocale='en'>
//                 <App/>
//                     // </NavigationContainer>
//             </IntlProvider>
//         </Context.Provider>
//     );
// };
// export default MultiLangWrapper;
