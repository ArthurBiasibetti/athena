import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271B3D',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 20,
    },
    login: {
        width:300,
        height:360,
        backgroundColor: '#110C28',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    input: {
        height: 32,
        width: 224,
        borderBottomWidth: 2,
        fontSize: 16,
        paddingHorizontal:20,
        marginTop:30,
        borderColor: '#392759',
        color: '#FFF',
        backgroundColor: '#0A0718'
    },
    button:{
        height: 32,
        width: 224,
        fontSize: 16,
        borderRadius:20,
        paddingHorizontal:20,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        backgroundColor: '#893168'
    },

    buttomText: {
        color: '#FFF',
        fontSize: 16
    }

});

export default styles;