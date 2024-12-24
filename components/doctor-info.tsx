import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";

interface DoctorInfoProps {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export default function DoctorInfo({ name, address }: DoctorInfoProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        className="flex w-full flex-col bg-transparent"
        style={{ marginBottom: 10, borderRadius: 20 }}
      >
        <View className="flex flex-row">
          <View className="w-fit p-4">
            <Image
              width={125}
              height={175}
              source={{ uri: "https://picsum.photos/125/175" }}
              className="flex-1 bg-slate-700"
            />
          </View>
          <View className="flex flex-1 flex-col">
            <Card.Title
              title="Ayuryuj Healthcare"
              subtitle={address}
              left={() => (
                <Avatar.Image
                  size={50}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-undef, @typescript-eslint/no-require-imports
                  source={require("../assets/icon-blue-rounded.png")}
                />
              )}
            />

            <View className="ml-8" style={{ marginLeft: 14 }}>
              <Text variant="titleLarge" ellipsizeMode="tail" numberOfLines={1}>
                {name}
              </Text>
              <Text variant="bodyMedium">MBBS</Text>
              <Text variant="bodyLarge">₹123</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-row gap-4 bg-transparent p-4">
          <Button mode="contained">Know More</Button>
          <Button mode="contained">Consult</Button>
        </View>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setOpen(!open);
        }}
      >
        <Pressable style={styles.centeredView} onPress={() => setOpen(false)}>
          <Pressable
            style={styles.modalView}
            onPress={(e) => e.stopPropagation()}
          >
            <Card
              style={{ backgroundColor: "transparent" }}
              contentStyle={styles.cardContent}
              mode="contained"
            >
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={styles.cardCover}
              />
              <View>
                <Card.Title
                  title="Ayuryuj Healthcare"
                  subtitle={address}
                  left={() => (
                    <Avatar.Image
                      size={50}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-undef, @typescript-eslint/no-require-imports
                      source={require("../assets/icon-blue-rounded.png")}
                      style={styles.logo}
                    />
                  )}
                />

                <View className="">
                  <Card.Content>
                    <Text
                      variant="titleLarge"
                      ellipsizeMode="tail"
                      numberOfLines={1}
                    >
                      {name}
                    </Text>
                    <Text variant="bodyMedium">MBBS</Text>
                    <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
                      ₹123
                    </Text>
                  </Card.Content>
                </View>
              </View>
              <Divider />
              <Card.Actions style={{ backgroundColor: "transparent" }}>
                <Button onPress={() => setOpen(false)}>Close</Button>
              </Card.Actions>
            </Card>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  cardCover: {
    width: "35%",
    margin: 12,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderColor: "#e6e6e6",
    borderWidth: 2,
  },
  logo: {
    backgroundColor: "transparent",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000050",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    flexShrink: 1,
  },
});
