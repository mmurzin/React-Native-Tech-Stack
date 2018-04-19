import React from 'react'
import {connect} from 'react-redux';
import {View, ListView} from "react-native";
import ListItem from './ListItem';

class LibraryList extends React.Component {

    componentWillMount() {
        const dataSet = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = dataSet.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return (<ListItem library={library}/>)
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries}
};
export default connect(mapStateToProps)(LibraryList);