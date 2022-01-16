import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        foods: state.foods
    };
};

function RenderFood({food}) {
    if (food) {
        return (
            <Card>
                <Text h1>
                    {food.name}
                </Text>
                <Text>
                    Price: {food.price}
                </Text>
                <Button 
                    onPress={() => {
                        console.log("Item Added To Cart")
                    }}
                    title='Add To Cart'
                    color='#5637DD'
                />
            </Card>
        );
    }
    return <View />;
}

class FoodInfo extends Component {

    static navigationOptions = {
        title: "Food Information"
    }

    render() {
        const foodId = this.props.navigation.getParam('foodId');
        const food = this.props.foods.foods.filter(food => food.id === foodId)[0];
        return <RenderFood food={food} />;
    }
}

export default connect(mapStateToProps)(FoodInfo);