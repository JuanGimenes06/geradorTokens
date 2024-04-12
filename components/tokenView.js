import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons/'



export function CaixaToken({token, removerToken, transferirToken}) {

    

    return (
        <Pressable style={ESTILOS.caixa} onLongPress={transferirToken}>
            <Text style={ESTILOS.text}>
                {token}
            </Text>
        
            <Ionicons onPress={removerToken} size={25} color={"#fff"} name="trash"/>
            
        </Pressable>
    )
}

const ESTILOS = StyleSheet.create({
    caixa:{
        backgroundColor:"#0f0f0f",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#fff"
    }
})