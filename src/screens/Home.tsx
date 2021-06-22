import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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
            width: 300,
            marginLeft: 16,
            borderRadius: 8,
            justifyContent: "space-between",
            padding: "4%",
          }}
          colors={["#b174ff", "#a095fd", "#8eb8fb"]}
          start={{ x: 0.2, y: 1 }}
          end={{ x: 0.7, y: 0.2 }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <View style={{ backgroundColor: "transparent" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "500",
                }}
              >
                $ 19,329.77
              </Text>
              <Text style={{ color: "#c3c0fd", marginTop: "2%" }}>
                Your balance is equivalent
              </Text>
            </View>
            <View style={{ backgroundColor: "transparent" }}>
              <Icon name="bitcoin" style={{
                  transform: [{ rotate: '-12deg'}]
              }} color="white" type="font-awesome-5" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              width: "50%",
              height: "20%",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 32,
                backgroundColor: "#ba82ff",
                width: "50%",
                borderRadius: 4,
                justifyContent: "center",
                marginHorizontal: "2%",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                Deposit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 32,
                backgroundColor: "#ba82ff",
                width: "60%",
                borderRadius: 4,
                justifyContent: "center",
                marginHorizontal: "2%",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
          <LinearGradient
              style={{
                  backgroundColor: "green",
                  height: 180,
                  width: 300,
                  marginLeft: 16,
                  borderRadius: 8,
                  justifyContent: "space-between",
                  padding: "4%",
              }}
              colors={["#e25482", "#e25482", "#8eb8fb"]}
              start={{ x: 0.2, y: 1 }}
              end={{ x: 0.7, y: 0.2 }}
          >
              <View
                  style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignSelf: "center",
                  }}
              >
                  <View style={{ backgroundColor: "transparent" }}>
                      <Text
                          style={{
                              color: "white",
                              fontSize: 32,
                              fontWeight: "500",
                          }}
                      >
                          $ 19,329.77
                      </Text>
                      <Text style={{ color: "#c3c0fd", marginTop: "2%" }}>
                          Your balance is equivalent
                      </Text>
                  </View>
                  <View style={{ backgroundColor: "transparent" }}>
                      <Icon name="bitcoin" style={{
                          transform: [{ rotate: '-12deg'}]
                      }} color="white" type="font-awesome-5" />
                  </View>
              </View>
              <View
                  style={{
                      backgroundColor: "transparent",
                      width: "50%",
                      height: "20%",
                      flexDirection: "row",
                  }}
              >
                  <TouchableOpacity
                      style={{
                          height: "100%",
                          backgroundColor: "#e5648e",
                          width: "50%",
                          borderRadius: 4,
                          justifyContent: "center",
                          marginHorizontal: "2%",
                      }}
                  >
                      <Text
                          style={{
                              textAlign: "center",
                              color: "white",
                          }}
                      >
                          Deposit
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={{
                          height: "100%",
                          backgroundColor: "#e5648e",
                          width: "50%",
                          borderRadius: 4,
                          justifyContent: "center",
                          marginHorizontal: "2%",
                      }}
                  >
                      <Text
                          style={{
                              textAlign: "center",
                              color: "white",
                          }}
                      >
                          Withdraw
                      </Text>
                  </TouchableOpacity>
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
