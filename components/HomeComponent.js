import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        aboutUs: state.aboutUs,
        specials: state.specials,
        hours: state.hours
    };
};

function RenderItem(props) {
    
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return(
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.props.aboutUs.aboutUs.filter(about => about.featured)[0]}
                    isLoading={this.props.aboutUs.isLoading}
                    errMess={this.props.aboutUs.errMess}
                />
                <RenderItem 
                    item={this.props.specials.specials.filter(special => special.featured)[0]}
                    isLoading={this.props.specials.isLoading}
                    errMess={this.props.specials.errMess}
                />
                <RenderItem 
                    item={this.props.hours.hours.filter(hour => hour.featured)[0]}
                    isLoading={this.props.hours.isLoading}
                    errMess={this.props.hours.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);