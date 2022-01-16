import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFavorite } from '../redux/ActionCreators';
import { postCart } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        coffees: state.coffees,
        favorites: state.favorites,
        carts: state.carts
    };
};

const mapDispatchToProps = {
    postFavorite : coffeeId => (postFavorite(coffeeId)),
    postCart : coffeeId => (postCart(coffeeId))
};

function RenderCoffee(props) {

    const {coffee} = props;

    if (coffee) {
        return (
            <Card>
                <Text h1>
                    {coffee.name}
                </Text>
                <Text style={{margin: 10}}>
                    {coffee.description}
                </Text>
                <Text>
                    Price: {coffee.price}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
                <Button 
                onPress={() => props.carts ?
                    console.log('Item Added To Cart') : props.markCart()}
                    
                    title='Add To Cart'
                    color='#5637DD'
                />
            </Card>
        );
    }
    return <View />;
}

class CoffeeInfo extends Component {
    static navigationOptions = {
        title: "Coffee Information"
    }

    markFavorite(coffeeId) {
        this.props.postFavorite(coffeeId);
    }

    markCart(coffeeId) {
        this.props.postCart(coffeeId);
    }

    render() {
        const coffeeId = this.props.navigation.getParam('coffeeId');
        const coffee = this.props.coffees.coffees.filter(coffee => coffee.id === coffeeId)[0];
        return <RenderCoffee coffee={coffee} 
                    favorite={this.props.favorites.includes(coffeeId)}
                    markFavorite={() => this.markFavorite(coffeeId)}
                    cart={this.props.carts.includes(coffeeId)}
                    markCart={() => this.markCart(coffeeId)}
                />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeInfo);