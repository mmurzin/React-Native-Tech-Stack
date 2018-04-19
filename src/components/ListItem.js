import React from 'react'
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends React.Component {

    constructor(){
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }


    renderDescription() {
        const {expanded, library} = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>

            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded: expanded};
};


export default connect(mapStateToProps, actions)(ListItem)