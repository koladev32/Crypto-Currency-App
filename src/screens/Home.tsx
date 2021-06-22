import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import Layout from "../components/Layout";
import { Header, Icon } from "react-native-elements";

export default function Home() {
  return (
    <Layout>
      <Header
        placement="left"
        leftComponent={{
          text: "Portfolio",
          style: { fontSize: 24, fontWeight: "700" },
        }}
        rightComponent={{ icon: "settings", color: "#000" }}
        containerStyle={{
          backgroundColor: "#fff",
          borderBottomWidth: 0,
        }}
      />

      <ScrollView
        horizontal
        decelerationRate="fast"
        style={{
          flex: 4,
          paddingVertical: 16,
        }}
      >
        <LinearGradient
          style={{
            backgroundColor: "green",
            height: 180,
            width: 320,
            marginLeft: 16,
            borderRadius: 8,
          }}
          colors={["#b174ff", "#a095fd", "#8eb8fb"]}
          start={{ x: 0.2, y: 1 }}
          end={{ x: 0.7, y: 0.2 }}
        >
          <View
            style={{
              width: "92%",
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ backgroundColor: "transparent" }}>
              <Text>$ 19,329.77</Text>
              <Text>Your balance is equivalent</Text>
            </View>
            <View style={{ backgroundColor: "transparent" }}>
              <Icon name="bitcoin" color="white" type="font-awesome-5" />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>

      <View style={{ flex: 2 }}></View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
