import * as React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Layout from "../components/Layout";
import { Header, Icon } from "react-native-elements";
import { LineChart } from "react-native-svg-charts";

export default function Home() {
  const dataBTC = [10, 20, 16, 21, 30, 35, 32, 40, 45, 46, 48, 45, 60, 40, 70];
  const dataETH = [
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
  ];
  const dataLTC = [
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
  ];

  return (
    <Layout>
      <Header
        placement="left"
        leftComponent={{
          text: "Portfolio",
          style: { fontSize: 24, fontWeight: "700" },
        }}
        rightComponent={{
          icon: "settings-outline",
          color: "#808080",
          type: "ionicon",
        }}
        containerStyle={{
          backgroundColor: "#fff",
          borderBottomWidth: 0,
          marginHorizontal: "2%",
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
            borderRadius: 16,
            justifyContent: "space-between",
            padding: "4%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.5,
            shadowRadius: 12.35,

            elevation: 19,
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
            <View style={{ backgroundColor: "transparent", top: "1%" }}>
              <Icon
                name="bitcoin"
                style={{
                  transform: [{ rotate: "-12deg" }],
                }}
                color="white"
                type="font-awesome-5"
                size={32}
              />
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
                backgroundColor: "#ba92ff",
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
                backgroundColor: "#ba92ff",
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
            borderRadius: 16,
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
              <Icon
                name="bitcoin"
                style={{
                  transform: [{ rotate: "-12deg" }],
                }}
                color="white"
                type="font-awesome-5"
              />
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

      <View style={{ flex: 1.8, paddingHorizontal: "6%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Text
            style={{
              color: "#808080",
              fontWeight: "600",
            }}
          >
            Charts
          </Text>
          <Text
            style={{
              color: "#e25482",
              fontWeight: "600",
            }}
          >
            See all
          </Text>
        </View>

        <View
          style={{
            height: "95%",
            marginTop: "4%",
          }}
        >
          <Pressable
            style={{
              height: "22%",
              marginBottom: "5%",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              borderBottomColor: "#f1f2f8",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "33%",
                justifyContent: "space-between",
                height: "80%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fef0ee",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Icon
                  size={32}
                  name="currency-btc"
                  type="material-community"
                  color="red"
                />
              </View>
              <View
                style={{
                  top: "5%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  BTC
                </Text>
                <Text
                  style={{
                    color: "#808080",
                  }}
                >
                  +1.6%
                </Text>
              </View>
            </View>

            <LineChart
              style={{ height: "100%", width: "30%" }}
              data={dataBTC}
              svg={{ stroke: "red" }}
              contentInset={{ top: 20, bottom: 20 }}
            />
            <View
              style={{
                width: "30%",
                alignItems: "flex-end",
                top: "0.4%",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                $ 29,850.15
              </Text>
              <Text
                style={{
                  color: "#808080",
                }}
              >
                2.73 BTC
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{
              height: "22%",
              marginBottom: "5%",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              borderBottomColor: "#f1f2f8",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "33%",
                justifyContent: "space-between",
                height: "80%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f1f2f8",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Icon
                  size={32}
                  name="ethereum"
                  type="material-community"
                  color="#6e7bb8"
                />
              </View>
              <View
                style={{
                  top: "5%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  ETH
                </Text>
                <Text
                  style={{
                    color: "#808080",
                  }}
                >
                  +0.82%
                </Text>
              </View>
            </View>

            <LineChart
              style={{ height: "100%", width: "30%" }}
              data={dataETH}
              svg={{ stroke: "#6e7bb8" }}
              contentInset={{ top: 20, bottom: 20 }}
            />
            <View
              style={{
                width: "30%",
                alignItems: "flex-end",
                top: "0.4%",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                $ 10,561.24
              </Text>
              <Text
                style={{
                  color: "#808080",
                }}
              >
                47.61 ETH
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{
              height: "22%",
              marginBottom: "5%",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              borderBottomColor: "#f1f2f8",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "33%",
                justifyContent: "space-between",
                height: "80%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ecfbf6",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Icon
                  size={32}
                  name="litecoin"
                  type="material-community"
                  color="#41d49f"
                />
              </View>
              <View
                style={{
                  top: "5%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  LTC
                </Text>
                <Text
                  style={{
                    color: "#808080",
                  }}
                >
                  -2.10%
                </Text>
              </View>
            </View>

            <LineChart
              style={{ height: "100%", width: "30%" }}
              data={dataLTC}
              svg={{ stroke: "#41d49f" }}
              contentInset={{ top: 20, bottom: 20 }}
            />
            <View
              style={{
                width: "30%",
                alignItems: "flex-end",
                top: "0.4%",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                $ 3,676.76
              </Text>
              <Text
                style={{
                  color: "#808080",
                }}
              >
                39.27 LTC
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Layout>
  );
}
