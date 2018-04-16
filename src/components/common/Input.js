import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'

class Input extends React.Component {

    render() {
        return (
            <View style={styles.containerStyle}>

                <Text style={styles.labelStyle}>
                    {this.props.label}
                </Text>

                <TextInput
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEnrty}
                    style={styles.inputStyle}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height:40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: "#000000",
        marginRight: 5,
        marginLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex:2
    },
    labelStyle: {
        fontSize:18,
        paddingLeft:20,
        flex: 1
    }
});
export {Input};