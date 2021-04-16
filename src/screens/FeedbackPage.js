import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../commanscreen/Button';
import Header from '../commanscreen/Header';
import Modal from 'react-native-modal';
class FeedbackPage extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            isModalVisible:false,
         };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        const {isModalVisible}=this.state;
        return (
            <View style={{ height: '100%', backgroundColor: '#fff' }}>
                <View style={{ height: '95%' }}>
                    <ScrollView>
                        <Header
                            leftsideicon={require('../image/backwhite.png')}
                            leftpress={() => this.props.navigation.goBack()}
                            rightpress={() => alert('Right Pressed...!')}
                            rightsideicon={require('../image/homewhite.png')}
                            leftsidetext={'SETTING'}
                            // centertext={'ABOUT'}
                            // centerpress={() => this.props.navigation.navigate('SettingPage')}
                            rightsidetext={'HOME'}
                            rightpress={() => this.props.navigation.navigate('RestaurentWelcome')}
                        />
                        <View
                            style={{
                                paddingVertical: 10,
                                backgroundColor: '#FBC327',
                                alignItems: 'center',
                                height: '5%'
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>SWISS CHALET</Text>
                        </View>
                        <View
                            style={{
                                paddingVertical: 20,
                                alignItems: 'center',
                                backgroundColor: '#eeeeee',
                                height: '10%'
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                                Feedback
                        </Text>
                        </View>

                        <View style={{ paddingHorizontal: 15, }}>

                            <View style={{ paddingVertical: '5%' }}>
                                <TouchableOpacity>
                                    <Text style={{ textDecorationLine: 'underline', color: '#E18585', fontSize: 18 }}>Please select your feedback category{'\n'}below.</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 60, width: '100%', borderRadius: 10, paddingHorizontal: 10, backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold' }}>SUGGESTION</Text>
                                <TouchableOpacity 
                                onPress={()=>this.toggleModal()}
                                style={{ width: '15%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', borderRadius: 10 }}>
                                    <Image
                                        source={require('../image/downwhite.png')}
                                        style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: '5%' }}>
                                <View>
                                    <Text>Please leave your feedback below</Text>
                                </View>
                                <View style={{ paddingHorizontal: 15, width: '100%', borderRadius: 10, height: 150, backgroundColor: '#eeeeee' }}>
                                    <TextInput
                                        numberOfLines={10}
                                        multiline={true}
                                    //  style={{height:100,width:'100%',justifyContent:'center'}}
                                    // placeholder="write Here"



                                    />
                                </View>
                            </View>




                            <Button
                                // onPress={()=>this.CreateAccount()}
                                buttonheight={50}
                                buttonwidth={'100%'}
                                bgcolor={'#EEEEEE'}
                                borderline={2}
                                btnborder={'#6A6A6A'}>
                                SEND
                        </Button>

                        </View>
                        {/* Suggestion Modal */}
                        <Modal 
                        // margin={0}
                        isVisible={isModalVisible}>
                            <View style={{ flex: 1 ,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                           <TouchableOpacity onPress={()=>this.toggleModal()}>
                           <Text>Close Modal</Text>
                           </TouchableOpacity>
                                {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                            </View>
                        </Modal>


                    </ScrollView>
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

export default FeedbackPage;