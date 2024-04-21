import { Stack,Slot } from "expo-router";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';  // npx expo install expo-font @expo-google-fonts/inter
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { 
    Rubik_300Light, 
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_700Bold_Italic,
    Rubik_900Black_Italic,
    Rubik_600SemiBold,
    Rubik_600SemiBold_Italic,
    Rubik_800ExtraBold,
    Rubik_800ExtraBold_Italic,
} from '@expo-google-fonts/rubik';

import { RubikPuddles_400Regular } from '@expo-google-fonts/rubik-puddles';

import { BungeeSpice_400Regular } from '@expo-google-fonts/bungee-spice';

import * as SplashScreen from 'expo-splash-screen';

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(){


    const [fontsLoaded, fontError] = useFonts({
        Inter : Inter_900Black,
    
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    
        RubikPuddles: RubikPuddles_400Regular,
        Rubik300 :Rubik_300Light, 
        Rubik400 :Rubik_400Regular,
        Rubik500 :Rubik_500Medium,
        Rubik700 :Rubik_700Bold,
        Rubik900 :Rubik_900Black,
        Rubik300Italic :Rubik_300Light_Italic,
        Rubik400Italic :Rubik_400Regular_Italic,
        Rubik500Italic :Rubik_500Medium_Italic,
        Rubik700Italic :Rubik_700Bold_Italic,
        Rubik900Italic :Rubik_900Black_Italic,
        Rubik600 :Rubik_600SemiBold,
        Rubik600Italic :Rubik_600SemiBold_Italic,
        Rubik800 :Rubik_800ExtraBold,
        Rubik800Italic :Rubik_800ExtraBold_Italic,
    
        BungeeSpice: BungeeSpice_400Regular,
    });

    useEffect(() => {
        if(fontsLoaded || fontError){
            SplashScreen.hideAsync();
        }
    },[fontsLoaded,fontError])
    
    
    if(!fontsLoaded && !fontError){
        return null;
    }

    return(
        <GestureHandlerRootView style={{flex:1}}>
            <Stack>
                <Stack.Screen name='index' options={{headerShown: false}} />
            </Stack>
        </GestureHandlerRootView>


        );
        
}