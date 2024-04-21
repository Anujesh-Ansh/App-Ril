import { StyleSheet, Text, View, SafeAreaView,Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, router } from 'expo-router'
import {FontAwesome5} from '@expo/vector-icons'
import { GestureDetector, Gesture, Directions, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, {FadeIn,FadeOut, BounceInRight, BounceInLeft, SlideInLeft, SlideOutDown, SlideInRight, SlideOutUp, SlideInUp, SlideInDown} from 'react-native-reanimated'


const onboardingSteps = [{
    index: 0,
    title: "Track every transaction",
    description: "Introducing Expense Tracker - your ultimate companion for effortlessly managing both your monthly and daily expenses. This intuitive app offers a seamless and efficient way to monitor your spending habits, helping you achieve financial stability and control.",
    image: "wallet"
}, {
    index: 1,
    title: "Set your monthly budget",
    description: "Easily set your monthly budget and let the app do the rest. Expense Tracker will help you keep track of your spending and notify you when you're close to reaching your limit.",
    image: "piggy-bank"
}, {
    index: 2,
    title: "Categorize your expenses",
    description: "Categorize your expenses to get a better understanding of where your money is going. Expense Tracker offers a wide range of categories to choose from, making it easy to stay organized.",
    image: "list"
}, {
    index: 3,
    title: "Visualize your spending",
    description: "Get a clear overview of your spending habits with Expense Tracker's intuitive charts and graphs. Monitor your expenses on a daily, weekly, or monthly basis and make informed decisions to improve your financial health.",
    image: "chart-pie"

}]

const OnBoardingScreen = () => {

    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(prevscreenIndex => prevscreenIndex + 1);
        }
    };
    
    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnBoarding = () => {
        setScreenIndex(0);
        router.back();
    }
        // ToastAndroid.show(`Continue${screenIndex+1}`, ToastAndroid.SHORT);
    



    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.UP).onEnd(onContinue),
        Gesture.Fling().direction(Directions.DOWN).onEnd(onBack)
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{headerShown: false}}/>
            
            <GestureDetector gesture={swipes}>
                <View  style={styles.contentContainer}>
                    <Animated.View entering={SlideInDown} exiting={SlideOutUp} style={styles.pageContent} key={data.index}>
                        {/* <Animated.View ></Animated.View> */}
                        <FontAwesome5 style={styles.image} name={data.image} />

                        <View style={styles.footer}>
                            <Animated.Text entering={SlideInLeft.delay(100)} style={styles.title}>{data.title}</Animated.Text>
                            <Animated.Text entering={SlideInRight.delay(300)} style={styles.description}>
                                {data.description}
                            </Animated.Text>

                            {/* <View>
                                <Text style={styles.counter}>
                                    {screenIndex+1}/{onboardingSteps.length}
                                </Text>
                            </View> */}

                            <View style={styles.buttonRow}>                            
                                <Text onPress={endOnBoarding} style={styles.buttonText}>Skip</Text>

                                <Pressable onPress={onContinue} style={styles.button}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </Pressable>

                            </View>

                        </View>
                    </Animated.View>

                    <View style={styles.stepIndicatorContainer}>
                        {onboardingSteps.map((step, index) => (
                            <Pressable key={index} style={styles.cover} onPress={() => setScreenIndex(index)}>
                                <View style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? '#FFDA11' : 'white' }]} />
                            </Pressable>
                        ))}
                    </View>

                </View>
            </GestureDetector>
        </SafeAreaView>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({

    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: '#15141A',
        padding:10,
        paddingTop:50,
        paddingBottom: 30,

        // borderColor: 'white',
        // borderWidth: 5,
        
    },
    contentContainer:{
        flex:1,
        flexDirection: 'row',
        // borderColor: 'green',
        // borderWidth: 5,
    },

    pageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        // borderColor: 'red',
        // borderWidth: 5,
    },
    image: {
        fontSize: 200,
        color: "#FFDA11",
        marginTop: "auto",

        // borderColor: 'blue',
        // borderWidth: 5,
        // textAlign: "center",
    },

    footer: {
        marginTop: "auto",

        // borderColor: 'green',
        // borderWidth: 5,
    },
    
    title: {
        color: '#FDFDFD',
        fontSize: 90,
        
        fontFamily: 'AmaticBold',
        marginVertical: 20,
        letterSpacing: 1.3,

        // borderColor: 'yellow',
        // borderWidth: 5,
    },
    
    description: {
        textAlign: "left",
        fontFamily: 'Amatic',
        color: 'gray',
        lineHeight:35,
        fontSize:28,

        // borderColor: 'orange',
        // borderWidth: 5,
        
    },

    // counter:{
    //     color: 'gray',
    //     fontSize: 30,
    //     fontFamily: 'Amatic',
    //     textAlign: 'center',
    //     marginVertical: 20,

    //     // borderColor: 'purple',
    //     // borderWidth: 5,
    // },

    // stepIndicatorContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginVertical: 20,
    //     gap: 7,
    //     // borderColor: 'blue',
    //     // borderWidth: 5,
    // },

    cover:{
        
        flex:1,
        paddingVertical: 15,
    },

    // stepIndicator: {
    //     flex:1,
    //     height: 3,
    //     backgroundColor: '#FFDA11',
    //     borderRadius: 10,
    //     paddingVertical:2,
    //     // marginHorizontal: 20,
    //     // borderColor: 'red',
    //     // borderWidth: 5,

        
    // },

    stepIndicatorContainer: {
        flexDirection: 'column', // Change to column
        height: 250,
        justifyContent: 'center', // Align items to flex-end
        alignItems: 'center',
        marginVertical: 300 ,
        // marginVertical: "auto" ,
        marginRight: 0, // Adjust right margin
        // borderColor: 'pink',
        // borderWidth: 5,
    },

    stepIndicator: {
        width: 6, // Adjust width to create a vertical bar
        height: 50, // Set desired height for each step
        backgroundColor: '#FFDA11',
        borderRadius: 10,
        // borderColor: 'red',
        // borderWidth: 5,
        // marginVertical: 5, // Adjust vertical spacing between steps
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginTop:50,
        marginLeft:20,
        gap:50,
        // borderColor: 'purple',
        // borderWidth: 5,
    },

    button: {
        backgroundColor: '#302E38',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        flex:1,
        // marginVertical: 30,

        // borderColor: 'pink',
        // borderWidth: 5,

    },

    buttonText: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'AmaticBold',
        letterSpacing: 1.3,
        textAlign: 'center',
        
        // borderColor: 'brown',
        // borderWidth: 5,
    },
})