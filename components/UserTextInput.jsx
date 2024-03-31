import { View, Text, TouchableOpacity } from "react-native";
import React, { handleTextChanged, useLayoutEffect, useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const UserTextInput = ({placeholder, isPass, setStateValue}) => {

  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [icon, setIcon] = useState(null);

  const handleTextChanged = (text) => {
    setValue(text);
    setStateValue(value);
  };

  useLayoutEffect(() => {
    switch (placeholder) {
      case  "Full Name" :
        return setIcon("person");
      case  "Email" :
        return setIcon("mail");
      case  "Password" :
        return setIcon("lock");
    }
  },[]);

  return (
    <View className={'border rounded-2xl px-4 py-6 flex-row items-center justify-between space-x-4 my-2 border-grey-200'}>

      <MaterialIcons name={icon} size={24} color={"#6c6d83"} />
      <UserTextInput  
        className ="flex-1 text-base text-gray-200 font-semibold -mt-1"
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChanged}
        secureTextEntry={isPass && showPass}
        autoCapitalize="none"
      />

      {isPass && (
        <TouchableOpacity>
          <Entypo
            name={`${showPass ? "eye" : "eye-width-line"}`}
            size={24}
            color={"#6c6d83"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserTextInput;
