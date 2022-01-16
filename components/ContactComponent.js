import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native";

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card wrapperStyle={{margin: 20}} title="Contact Information">
                    <Text>Phone: 1 206 555 1234</Text>
                    <Text>Email: Colleaguecafe@gmail.com</Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;