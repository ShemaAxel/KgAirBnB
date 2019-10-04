import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";
export default class CardComponent extends React.Component {
  render() {
    const images = {
      "1": require("../assets/image/house_1.jpg"),
      "2": require("../assets/image/house_2.jpg"),
      "3": require("../assets/image/house_3.jpg"),
      "4": require("../assets/image/house_4.jpg")
    };

    return (
      <Card>
        <CardItem>
          <Thumbnail source={require("../assets/image/profile.png")} />
          <Body>
            <Text> Axel</Text>
            <Text note> Jan 25, 2019</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>this.props.likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>Axel </Text>A motor scooter is
              a motorcycle similar to a kick scooter with a seat, a floorboard,
              and small or low wheels. The United States Department of
              Transportation defines a scooter as a motorcycle that has a
              platform for the operator's feet or has integrated footrests, and
              has a step-through architecture.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
