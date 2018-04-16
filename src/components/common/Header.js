//import libraries
import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        color: '#000000'
    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});

//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
        )
    }
}

//export
export {Header}
