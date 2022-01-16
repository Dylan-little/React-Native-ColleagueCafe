import React, { Component } from "react";
import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { View } from "react-native-web";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        foods: state.foods
    };
};

class Food extends Component {

    static navigationOptions = {
        title: 'Food'
    }
    

    render() {
        const { navigate } = this.props.navigation;
        const renderFoodItem = ({item}) => {
            return (
                <Tile 
                    title={item.name}
                    featured
                    imageSrc={{uri: baseUrl + item.image}}
                    onPress={() => navigate('FoodInfo', { foodId: item.id })}
                />
            );
        };
        if(this.props.foods.isLoading) {
            return <Loading />;
        }
        if(this.props.foods.errMess) {
            return(
                <View>
                    <Text>{props.foods.errMess}</Text>
                </View>
            );
        }
        return(
            <FlatList 
                data={this.props.foods.foods}
                renderItem={renderFoodItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Food);