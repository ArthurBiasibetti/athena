import { StyleSheet, Dimensions } from 'react-native';
import { all } from 'rsvp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271B3D',
        alignItems: 'stretch',
        paddingRight: 20,
    },
    topo: {
        backgroundColor:'#110C28',
        width:Dimensions.get('window').width,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    aside: {
        flex:2,
        backgroundColor: '#382953',
        width:Dimensions.get('window').width/2,
    },
    list: {

    }
});

export default styles;