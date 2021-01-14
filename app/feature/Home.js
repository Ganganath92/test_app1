import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../resource/images';
// import NavigationBar from 'react-native-navigation-bar';

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <View>
        <NavigationBar 
          title='Main title'
          height={50}
          leftButtonTitle='back'
          rightButtonTitle='forward'
        />
        <Text>ABC</Text>
      </View> */}
        <StatusBar barStyle="dark-content" />

        <View style={styles.container}>
          <ScrollView horizontal>
            <Text style={styles.Text}>Apple</Text>
            <Text style={styles.Text}>Project I.G.I</Text>
            <Text style={styles.Text}>Swift</Text>
            <Text style={styles.Text}>Lenavo</Text>
            <Text style={styles.Text}>COD</Text>
            <Text style={styles.Text}>GTA 5</Text>
          </ScrollView>
          <ScrollView>
            <View>
              <Image style={styles.image} source={Images.im1}></Image>
              {/* <Image style={styles.profileimages} source={Images.im1}></Image> */}

              <Text style={styles.titleText1}>
                Mac Pro Unboxing & Second Impressions: The Power is Back!
              </Text>
              <Text style={styles.subText}>
                Jay Shutter. 1.7M Views 2 Years
              </Text>
            </View>
            <View>
              <Image style={styles.image} source={Images.im2}></Image>

              <Text style={styles.titleText1}>
                Apple iMac 27" 5K (2017) Core i7: Unboxing & Review
              </Text>
              <Text style={styles.subText}>
                Jay Shutter. 1.7M Views 2 Years
              </Text>
            </View>
            <View>
              <Image style={styles.image} source={Images.im3}></Image>

              <Text style={styles.titleText1}>
                BICYCLE SPEEDOMETER |HOW TO INSTALL
              </Text>
              <Text style={styles.subText}>
                Jay Shutter. 1.7M Views 2 Years
              </Text>
            </View>
            <View>
              <Text style={styles.titleText}>Sort Video</Text>
              <ScrollView horizontal>
                <View>
                  <View>
                    <Image style={styles.swapimage} source={Images.im1}></Image>
                  </View>
                  <View style={styles.viewTextsStyle}>
                    <Text style={styles.titleTextSwap}>
                      Mac Pro Unboxing & Second Impressions: The Power is Back!
                    </Text>
                    <Text style={styles.subText}>Views 1.7M</Text>
                  </View>
                </View>
                <View style={{flex: 0.3}} />
                <View>
                  <View>
                    <Image style={styles.swapimage} source={Images.im2}></Image>
                    <View style={styles.viewTextsStyle}>
                      <Text style={styles.titleTextSwap}>
                        Apple iMac 27" 5K (2017) Core i7: Unboxing & Review
                      </Text>
                      <Text style={styles.subText}>Views 1.7M</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <View>
                    <Image style={styles.swapimage} source={Images.im3}></Image>
                    <View style={styles.viewTextsStyle}>
                      <Text style={styles.titleTextSwap}>
                        BICYCLE SPEEDOMETER |HOW TO INSTALL
                      </Text>
                      <Text style={styles.subText}>Views 1.7M</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View>
              <Image style={styles.image} source={Images.im5}></Image>

              <Text style={styles.titleText1}>dasadc</Text>
              <Text style={styles.subText}>
                Jay Shutter. 1.7M Views 2 Years
              </Text>
            </View>
            <View>
              <Image style={styles.image} source={Images.im6}></Image>

              <Text style={styles.titleText1}>dasadc</Text>
              <Text style={styles.subText}>
                Jay Shutter. 1.7M Views 2 Years
              </Text>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525150',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },

  swapimage: {
    flexDirection: 'row',
    width: 250,
    height: 400,
    justifyContent: 'space-between',
    marginBottom: 10,
    resizeMode: 'stretch',

    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  profileimages: {
    width: '20%',
    height: 30,
    resizeMode: 'contain',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText1: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  subText: {
    fontSize: 15,
    fontWeight: '200',
    color: '#a6a6a6',
    textAlign: 'left',
  },
  Text: {
    elevation: 3,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'gray',
    color: 'white',
    alignSelf: 'center',
    margin: 10,
  },
  viewTextsStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    bottom: 40,
    //   backgroundColor:'blue'
  },
  titleTextSwap: {
    fontSize: 20,
    fontWeight: '400',
    color: '#bac2bc',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default Home;
