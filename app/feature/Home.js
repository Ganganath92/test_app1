import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../resource/images';
import {NavigationBar} from 'navigationbar-react-native';

const ComponentLeft = () => {
  return (
    <View style={{flex: 1, alignItems: 'flex-start'}}>
      <TouchableOpacity
        style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Image source={Images.logo1} style={styles.compoLeft} />
      </TouchableOpacity>
    </View>
  );
};

const ComponentRight = () => {
  return (
    <View style={{flex: 2, alignItems: 'flex-end', flexDirection: 'row'}}>
      <View>
        <TouchableOpacity>
          <Image source={Images.icon1} style={styles.iconimage} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={Images.icon3} style={styles.iconimage} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={Images.icon2} style={styles.iconimage} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={Images.pro5} style={styles.iconimage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
class Home extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <View style={styles.container}>
          <ScrollView>
            <NavigationBar
              componentLeft={() => <ComponentLeft />}
              // ComponentRight1={() => <ComponentRight1 />}
              componentRight={() => <ComponentRight />}
              navigationBarStyle={{backgroundColor: '#525150'}}
              statusBarStyle={{
                barStyle: 'light-content',
                backgroundColor: '#ff0000',
              }}
            />
            <View style={styles.navicolor}>
              <ScrollView horizontal>
                <Text style={styles.Text}>Apple</Text>
                <Text style={styles.Text}>Project I.G.I</Text>
                <Text style={styles.Text}>Swift</Text>
                <Text style={styles.Text}>Lenavo</Text>
                <Text style={styles.Text}>COD</Text>
                <Text style={styles.Text}>GTA 5</Text>
              </ScrollView>
            </View>
            <View>
              <Image style={styles.image} source={Images.im1}></Image>
              {/* <Image style={styles.profileimages} source={Images.im1}></Image> */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Image style={styles.propic} source={Images.pro1} />
                </View>
                <View>
                  <Text style={styles.titleText1}>
                    Mac Pro Unboxing & Second Impressions: The Power is Back!
                  </Text>
                  <Text style={styles.subText}>
                    Jay Shutter. 1.7M Views 2 Years
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Image style={styles.image} source={Images.im2}></Image>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Image style={styles.propic} source={Images.pro2} />
                </View>
                <View>
                  <Text style={styles.titleText1}>
                    Apple iMac 27" 5K (2017) Core i7: Unboxing & Review
                  </Text>
                  <Text style={styles.subText}>
                    Jay Shutter. 1.7M Views 2 Years
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Image style={styles.image} source={Images.im3}></Image>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Image style={styles.propic} source={Images.pro3} />
                </View>
                <View>
                  <Text style={styles.titleText1}>
                    BICYCLE SPEEDOMETER |HOW TO INSTALL
                  </Text>
                  <Text style={styles.subText}>
                    Jay Shutter. 1.7M Views 2 Years
                  </Text>
                </View>
              </View>
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
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Image style={styles.propic} source={Images.pro4} />
                </View>
                <View>
                  <Text style={styles.titleText1}>dasadc</Text>
                  <Text style={styles.subText}>
                    Jay Shutter. 1.7M Views 2 Years
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Image style={styles.image} source={Images.im6}></Image>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Image style={styles.propic} source={Images.pro5} />
                </View>
                <View>
                  <Text style={styles.titleText1}>dasadc</Text>
                  <Text style={styles.subText}>
                    Jay Shutter. 1.7M Views 2 Years
                  </Text>
                </View>
              </View>
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
  navicolor: {
    backgroundColor: '#61605f',
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
    overflow: 'hidden',
    borderRadius: 20,
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
  compoLeft: {
    resizeMode: 'contain',
    width: 200,
    height: 35,
    alignSelf: 'center',
    overflow: 'hidden',
    // borderRadius: 150/2,
  },
  propic: {
    borderRadius: 400 / 2,
    resizeMode: 'contain',
    width: 60,
    height: 35,
    alignSelf: 'center',
    overflow: 'hidden',
    // marginRight: 200,
    flexDirection: 'row',
  },
  iconimage: {
    borderRadius: 400 / 2,
    resizeMode: 'contain',
    width: 45,
    height: 30,
    alignSelf: 'center',
    overflow: 'hidden',
    // marginRight: 200,
    flexDirection: 'row',
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
