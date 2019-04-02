import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Text, Icon, Button, Input, TextArea, Picker, DatePicker, FormDatePicker, FormInput, FormTextArea, FormPicker, Card, ListItem, Notification, NotificationBarManager, FloatingButton, Form, CardList, ListView, NavBarLeft, NavBar, NavBarBody, NavBarRight, NavBarButton, TabItem, TabBar, PillView } from "@99xt/first-born";
import { Home } from './src/Home';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: ""
    }
  }

  componentDidMount() {
    NotificationBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    NotificationBarManager.unregisterMessageBar();
  }

  handleTextChange = (text) => {
    this.setState({ text: text })
  }

  handlePickerChange = (value) => {
    this.setState({ value: value })
  }

  handleShowNotification = () => {
    NotificationBarManager.showAlert({
      message: 'Your alert message goes here',
      // image: require("./assets/images/accessibility.png")
    });
  }

  handleDisplayAlert = (btnName) => {
    Alert.alert("Hello", btnName);
  }

  checkInputValidity = (text) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(text);
  }

  actions = [
    {
      icon: 'help',
      name: 'bt_accessibility',
      position: 2,
      onPress: () => Alert.alert('Hello', 'Accessibility')
    },
    {
      icon: 'pin',
      name: 'bt_room',
      position: 1,
      onPress: () => Alert.alert('Hello', 'Location')
    },
    {
      icon: 'videocam',
      name: 'bt_videocam',
      position: 3,
      onPress: () => Alert.alert('Hello', 'Video')
    }
  ];

  pickerData = [
    {
      value: "1",
      label: "1"
    },
    {
      value: "2",
      label: "2"
    },
    {
      value: "3",
      label: "3"
    }
  ];

  formElements = [
    {
      label: "Full Name",
      type: "text",
      onChangeText: (value) => this.handleTextChange(value),
      placeholder: "John Doe"
    },
    {
      label: "Email",
      type: "text",
      onChangeText: (value) => this.handleTextChange(value),
      placeholder: "john.doe@gmail.com",
      isValid: (value) => this.checkInputValidity(value)
    },
    {
      label: "Type",
      type: "picker",
      onValueChange: (value) => this.handleValueChange(value),
      pickerData: this.pickerData
    },
    {
      label: "Date",
      type: "date",
      onDateChange: (value) => this.handleDateChange(value)
    },
    {
      label: "Address",
      type: "textarea",
      onChangeText: (value) => this.handleTextChange(value)
    },
  ];

  listData = [
    {
      title: "Heading 1",
      description: "Description 1",
      image: require("./assets/images/scenery.jpg")
    },
    {
      title: "Heading 2",
      description: "Description 2",
      image: require("./assets/images/scenery.jpg")
    },
    {
      title: "Heading 3",
      description: "Description 3",
      image: require("./assets/images/scenery.jpg")
    },
  ];

  pillScenes = [
    { scene: <Home /> },
    { scene: <CardList data={this.listData} /> },
    { scene: <ListView data={this.listData} /> },
    { scene: <View style={styles.innerContainer}><Form formElements={this.formElements} /></View> },
  ];

  pillHeaders = [
    { title: 'Home', icon: "home" },
    { title: 'Card List', icon: "card" },
    { title: 'List View', icon: "list" },
    { title: 'Form', icon: "help" }
  ];

  render() {
    return (
      <View style={styles.container}>
        <NavBar>
          <NavBarLeft >
            <NavBarButton type="drawer" />
          </NavBarLeft>
          <NavBarBody>
            <Text>Title</Text>
          </NavBarBody>
          <NavBarRight>
            <NavBarButton onPress={this.handleShowNotification}>
              <Icon name="heart" />
            </NavBarButton>
          </NavBarRight>
        </NavBar>
        <View style={styles.container}>
          <PillView pillHeaders={this.pillHeaders} pillScenes={this.pillScenes} />
          <Notification ref={"alert"} />
        </View>
        <TabBar>
          <TabItem active>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </TabItem>
          <TabItem>
            <Icon name="add" />
            <Text>Add New</Text>
          </TabItem>
          <TabItem>
            <Icon name="camera" />
            <Text>Camera</Text>
          </TabItem>
          <TabItem>
            <Icon name="settings" />
            <Text>Settings</Text>
          </TabItem>
        </TabBar>
        <FloatingButton actions={this.actions} tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "column",
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: "column"
  }
});
