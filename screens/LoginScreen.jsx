import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { BgImage, Logo } from "../assets";
import { UserTextInput } from "../components";

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BgImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: screenWidth }}
      />

      {/* View Principal */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />

        <Text className="text-xl font-bold text-gray-800">AppChat!</Text>

        <View className="w-full flex items-center justify-center">
          {/* Alerta  */}

          {/* Email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* Senha */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={setPassword}
          />

          {/* Botão de Login */}
          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-green-500 my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
