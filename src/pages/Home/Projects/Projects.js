import React from 'react';
import { useIntl} from "react-intl";
import {createStackNavigator} from "@react-navigation/stack";

import {NavigationContainer} from "@react-navigation/native";
import ProjectsList from "./ProjectsList";
import ModalProject from "./ModalProject/ModalProject";
import ProjectScreen from "./ProjectScreen";
import SampleZone from "./SampleZone";
const Projects = () => {
    const MainStack = createStackNavigator();
    return (
        <>
            <MainStack.Navigator initialRouteName="Projects"  >{/* Замена Switch */}
                {true?
                    <>
                <MainStack.Screen name="Projects" component={ProjectsList} options={{
                    headerShown: false}} />
                    <MainStack.Screen name="ProjectItem" component={ProjectsList} options={{
                        headerShown: false}} />
                        <MainStack.Screen name="Project" component={ProjectScreen} options={{
                            headerShown: false}} />
                            <MainStack.Screen name="SampleZone" component={SampleZone} options={{
                        headerShown: false}} />
                    </>
                :<MainStack.Screen name="Modal" component={ModalProject} options={{
                    headerShown: false}} />}
            </MainStack.Navigator>
        </>
            // <Drawer.Navigator>
            //     {true?}
            //     <Drawer
            //     <Drawer.Screen name="List" component={Home} />
            //     <Drawer.Screen name="Profile" component={Profile} />
            //     <Stack.Screen name="Settings" component={Settings} />
            // </Drawer.Navigator>
    );
};

export default Projects;
