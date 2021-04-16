import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import Header from '../commanscreen/Header';
import { Checkbox } from 'react-native-paper';
// import {Checkbox} from'react-native-elements'
import Button from '../commanscreen/Button';
import { Switch } from 'react-native-switch';



class SettingPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      ActiveDarkModeSwitch: false,
      ActiveBoldTextSwitch: false,
      switchValue: false,
      ActiveDarkMode: false,
      ActiveBoldText: false,
    };
  }
  render() {
    const { ActiveDarkMode, ActiveBoldText, ActiveDarkModeSwitch, ActiveBoldTextSwitch } = this.state;
    return (
      <View style={{ height: '100%', backgroundColor: '#fff' }}>
        <View style={{ height: '95%' }}>
          <Header
            leftsideicon={require('../image/backwhite.png')}
            leftpress={() => this.props.navigation.goBack()}
            rightpress={() => alert('Right Pressed...!')}
            rightsideicon={require('../image/homewhite.png')}
            leftsidetext={'SETTING'}
            // centertext={'Setting'}
            // centerpress={() => this.props.navigation.navigate('SettingPage')}
            rightsidetext={'HOME'}
            rightpress={() => this.props.navigation.navigate('RestaurentWelcome')}
          />
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: '#FBC327',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>SWISS CHALET</Text>
          </View>
          <View
            style={{
              paddingVertical: 20,
              alignItems: 'center',
              backgroundColor: '#EEEEEE',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Costmize Appearance</Text>
          </View>
          <View style={{ paddingHorizontal: 15, paddingVertical: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                uncheckedColor='#000'
                color='#000'
                status={ActiveDarkMode ? 'checked' : "unchecked"}
                onPress={() => {
                  this.setState({ ActiveDarkMode: !ActiveDarkMode })
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 16, paddingHorizontal: 10 }}>DARK MODE</Text>

            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, width: '50%', justifyContent: "space-between", }}>
           <TouchableOpacity onPress={()=>this.setState({ActiveDarkModeSwitch:false})}>
           <Text style={{ fontWeight: 'bold', fontSize: 18 }}>OFF</Text>
           </TouchableOpacity>
              <Switch
                activeText={false}
                inActiveText={false}
                trackColor={{ false: "#D4330D", true: "#BEBEBE" }}
                thumbColor={this.state.ActiveDarkModeSwitch ? "#000" : "#000"}
                value={this.state.ActiveDarkModeSwitch}
                onValueChange={(ActiveDarkModeSwitch) => this.setState({ ActiveDarkModeSwitch })}
              />
             <TouchableOpacity onPress={()=>this.setState({ActiveDarkModeSwitch:true})}>
             <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ON</Text>
             </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 1, borderBottomWidth: 1, borderColor: 'pink' }}>

            </View>


          </View>
          <View style={{ paddingHorizontal: 15, paddingVertical: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Checkbox
                uncheckedColor='#000'
                color='#000'
                status={ActiveBoldText ? 'checked' : "unchecked"}
                onPress={() => {
                  this.setState({ ActiveBoldText: !ActiveBoldText })
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 16, paddingHorizontal: 10 }}>BOLD TEXT</Text>

            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', paddingVertical: 20, width: '50%', justifyContent: "space-between", }}>
              <TouchableOpacity  onPress={() => this.setState({ ActiveBoldTextSwitch: false })}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>OFF</Text>
              </TouchableOpacity>
              <Switch
                activeText={false}
                inActiveText={false}
                trackColor={{ false: "#D4330D", true: "#BEBEBE" }}
                thumbColor={this.state.ActiveBoldTextSwitch ? "#000" : "#000"}

                value={this.state.ActiveBoldTextSwitch}
                onValueChange={(ActiveBoldTextSwitch) => this.setState({ ActiveBoldTextSwitch })}
              />
              <TouchableOpacity onPress={() => this.setState({ ActiveBoldTextSwitch: true })}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ON</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 1, borderBottomWidth: 1, borderColor: 'pink' }}>

            </View>


          </View>
          <View style={{ paddingHorizontal: 15, position: 'absolute', bottom: 25, width: '100%' }}>

            <Button
              onPress={() => this.props.navigation.navigate('AboutPage')}
              buttonheight={50}
              buttonwidth={'100%'}
              bgcolor={'#BEBEBE'}
              borderline={2}
              btnborder={'#6A6A6A'}>
              ABOUT
              </Button>


            <Button
              onPress={() => this.props.navigation.navigate('FeedbackPage')}
              buttonheight={55}
              buttonwidth={'100%'}
              bgcolor={'#FBC327'}
              btnborder={'#D4330D'}
              borderline={5}>
              FEEDBACK
              </Button>
          </View>

        </View>
        {/* Bottom View */}
        <View
          style={{
            height: '5%',
            backgroundColor: '#1D7D92',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}></View>
      </View>
    );
  }
}

export default SettingPage;