import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";


export default function DayListItem(props: { day: number }){
    return(
        <Link href={`/day${props.day}`} asChild> 
        {/* asChild is used so that the Link tag can copy the same styles as its children element */}
            <Pressable style={styles.box}>
                <Text style={styles.text}>{props.day}</Text>


            <Text>Go to  Day {props.day}!</Text>
            </Pressable>
        </Link>  
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f9ede3',
    
        flex: 1, // width
        aspectRatio: 1, // height
        
    
    
        // width: 100,
        // height: 100,
        margin: 20,
        
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius:20,
    },
    
    text: {
        color: '#9b4521',
        fontSize: 80,
        fontFamily: 'AmaticBold',
    },
})