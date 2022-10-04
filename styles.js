import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  alwaysRed: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  pageTitle :{
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#383c47',
    color: '#d1d1d1',
    fontSize: '2.3em',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontFamily: 'Segoe UI',
    paddingBottom: '5px',
  },
  pageContent: {
    marginTop: '13vh',
    marginLeft: '8%', 
    marginRight: '8%', 
    color: 'rgb(52, 49, 49)'
  }
});