import React from "react";
import { Text, View } from "react-native";

import styles from "./style"

export default function ResultMedia(props){
    return(
        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.msgResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.resultMedia}</Text>
        </View>
    );
}