import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1
    },
    header: {
        backgroundColor: '#615E5E',
        alignItems: 'center',
        fontSize: 18,
        justifyContent: 'center'
    },
    headerText: {
        color: '#FFFFFF'
    },
    footer: {
        backgroundColor: '#615E5E',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#FFFFFF',
        padding: 10    
    },
    list: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        backgroundColor: '#615E5E',
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 2,
        padding: 5
    },
    viewInput: {
        flexDirection: 'row',
        padding: 10
    },
    itemInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        margin: 2,
        borderRadius: 10,
        flex: 1
    },   
});

export default styles; 
