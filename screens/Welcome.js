import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. Rent. Your rental lease agreement should have provisions that
              spell out the amount of rent that’s due, when the rent payments
              are due, and how the rent payments should be paid.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. Limits on occupancy/subleasing. This important provision
              ensures that only those who have signed the lease, along with
              their minor children, can live on the rental premises. Tenants
              will also not be able to sublease the premises to another party
              without your approval.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. Right of entry. Not making necessary repairs can place you in
              violation of the lease, but what if your tenant won’t provide you
              with the access required to make such repairs? Your rental
              agreement should specify the conditions under which you are
              allowed to enter the rental property, and also what notice is
              required prior to entry. Because state law often regulates a
              landlord’s right of entry, you should check to make sure the
              provisions set out in your rental agreement conform with legal
              requirements.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. Disruptive behavior and illegal activities. Your rental
              agreement should have provisions which clearly state what
              constitutes disruptive behavior (for example, excessive noise) and
              illegal activities (for example, dealing drugs) and prohibit such
              behavior and activities. Your rental agreement should also provide
              that such behaviors or activities constitute grounds for
              terminating the agreement.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6. Pets. If pets are not allowed, this should be clearly stated in
              your rental agreement. If you do allow pets, the agreement should
              specify the maximum number of pets permitted, and also state any
              restrictions as to the kinds or types of pets permitted (for
              example, large dogs). The provisions should also address your
              tenant’s responsibility to keep the rental premises clean.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary>
              {" "}
              In KIGALI.
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("Login")}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") }
  ]
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});
