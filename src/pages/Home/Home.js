import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Projects from "./Projects";
import Faq from "./Faq";
import HomeIcon from "../../../assets/svgs/HomeIcon";
import AnswerIcon from "../../../assets/svgs/AnswerIcon";
import color from "../../../styles/color";
import ProjectIcon from "../../../assets/svgs/ProjectIcon";
import Terms from "./Terms";
import TermsIcon from "../../../assets/svgs/TermsIcon";
import ProjectsList from "./Projects/ProjectsList";

const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#2EC3E9",
                inactiveTintColor: "#CECECE",
                style: {
                    backgroundColor: color.white,
                    paddingTop:10,
                    paddingBottom:8,
                    paddingHorizontal:24,
                    height:56,
                    boxShadow:'0px -2px 4px rgba(54, 107, 209, 0.15)'
                },
            }}
        >
            <Tabs.Screen name="HomeScreen" component={HomeScreen}
                         options={{
                             tabBarIcon: ({ focused }) => {
                                 let iconType = focused
                                 ? true
                                 : false;
                             return <HomeIcon active={iconType}></HomeIcon>;},
                             tabBarLabel:'Home'
                         }}

            />
            <Tabs.Screen name="Projects" component={Projects}
                         options={{
                             tabBarIcon: ({ focused }) => {
                                 let iconType = focused
                                     ? true
                                     : false;
                                 return <ProjectIcon active={iconType}></ProjectIcon>;},
                             tabBarLabel:'My projects'
                         }}/>
            <Tabs.Screen name="Faq" component={Faq}
                         options={{
                             tabBarIcon: ({ focused }) => {
                                 let iconType = focused
                                     ? true
                                     : false;
                                 return <AnswerIcon active={iconType}></AnswerIcon>;},
                             tabBarLabel:'FAQ'
                         }}/>
            <Tabs.Screen name="Terms" component={Terms}
                         options={{
                             tabBarIcon: ({ focused }) => {
                                 let iconType = focused
                                     ? true
                                     : false;
                                 return <TermsIcon active={iconType}></TermsIcon>;},
                             tabBarLabel:'Terms'
                         }}/>
        </Tabs.Navigator>
    );
};

export default Home;
