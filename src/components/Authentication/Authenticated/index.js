import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./style";

export default function Authenticated() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    checkAuthentication();
  }, []);

  async function checkAuthentication() {
    const isSupported = await LocalAuthentication.hasHardwareAsync();
    if (isSupported) {
      const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (isBiometricEnrolled) {
        const result = await LocalAuthentication.authenticateAsync();
        if (result.success) {
          setAuthenticated(true);
          setSuccessMessage("Autenticação bem-sucedida!");
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      {!isAuthenticated ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.textInfo}>Por favor, insira sua digital para entrar</Text>
          <TouchableOpacity
            onPress={() => checkAuthentication()}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.textInfo}>{successMessage}</Text>

          <Image
            source={require("../../../../assets/Img/peopleOk.jpg")}
            style={{ height: 300, width: 300 }}
          />
        </View>
      )}
    </View>
  );
}
