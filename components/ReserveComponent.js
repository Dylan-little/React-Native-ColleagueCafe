import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet,
    Picker, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class Reservation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            party : 1,
            date: new Date(),
            showCalender: false,
            showModal: false
        };
    }

    static navigationOptions = {
        title: 'Reserve Table'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            party: 1,
            date: new Date(),
            showCalendar: false,
            showModal: false
        });
    }


    render() {
        return(
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Party Size</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.party}
                        onValueChange={itemValue => this.setState({party: itemValue})}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <Button
                        onPress={() =>
                            this.setState({showCalendar: !this.state.showCalendar})
                        }
                        title={this.state.date.toLocaleDateString('en-US')}
                        color='#5637DD'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
                {this.state.showCalendar && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalendar: false});
                        }}
                        style={styles.formItem}
                    />
                )}
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Search'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search for available campsites to reserve'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Search Table Reservations</Text>
                        <Text style={styles.modalText}>
                            Number of People: {this.state.party}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {this.state.date.toLocaleDateString('en-US')}
                        </Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Reservation;