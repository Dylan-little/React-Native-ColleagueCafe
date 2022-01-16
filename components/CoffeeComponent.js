import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { Tile } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        coffees: state.coffees
    };
};

class Coffee extends Component {

    static navigationOptions = {
        title: 'Coffee'
    }


    render() {
        const { navigate } = this.props.navigation;
        const renderCoffeeItem = ({item}) => {
            return (
                <Tile 
                    title={item.name}
                    featured
                    imageSrc={{uri: baseUrl + item.image}}
                    onPress={() => navigate('CoffeeInfo', { coffeeId: item.id })}
                />

            );
        };
        if(this.props.coffees.isLoading) {
            return <Loading />;
        }
        if(this.props.coffees.errMess) {
            return (
                <View>
                    <Text>{props.coffees.errMess}</Text>
                </View>
            )
        }
        return(
            <FlatList 
                data={this.props.coffees.coffees}
                renderItem={renderCoffeeItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
};

export default connect(mapStateToProps)(Coffee);