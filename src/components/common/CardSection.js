import React from 'react'
import {View, StyleSheet} from 'react-native'

class CardSection extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor:'#FFFFFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#DDDDDD',
        position: 'relative'
    }
});
export {CardSection}