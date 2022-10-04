import {View, Text, Image, StyleSheet} from 'react-native';
import { useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormInput from "../../components/FormInput"
import RoundButton from "../../components/RoundButton"
import Images from '../../theme/Images'
import Messages from '../../theme/Messages'

function Login(){
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  onChangeEmail = (text) => {
    if (text && text != "" && isValidEmail(text)) {
      // this.setState({email: text, emailError: null});
      setEmail(text);
    } else {
      // this.setState({email: text})
      setEmail(text);
    }
  }

  isValidEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    }
    return true;
  }
  
  onLogin = () => {
    // let email = email.trim();
    // let password = password.trim();
    var isValid = true;
    if (email == null || email.length <= 0 || !isValidEmail(email)) {
      setEmailError( Messages.InvalidEmail );
      isValid = false;
    }
    if (password == null || password.length <= 0) {
      setPasswordError( Messages.InvalidPassword);
      isValid = false;
    }
  }
    return(
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.contentView}>
              <Image
                style={styles.logoImage}
                source={Images.logo01}
              />
               <View style={styles.formView}>
                <FormInput
                  label="Your Email"
                  placeholder="David@gmail.com"
                  type="email"
                  value={email}
                  errorMessage = {emailError}
                  onChangeText={(text)=> onChangeEmail(text)}/>
                <FormInput
                  label="Password"
                  placeholder="***********"
                  type="password"
                  value = {password}
                  errorMessage = {passwordError}
                  onChangeText={(text)=> setPassword(text)}
                  />
                  <View style={[styles.centerView, {marginTop: 0}]}>
                    <RoundButton
                      title="LOGIN"
                      theme="blue"
                      style={styles.loginButton}
                      onPress={() => onLogin()} />
                  </View>
               </View>
               
            </View>
          </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
      },
    
      contentView: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        // ...ifIphoneX({
        //   marginTop: 20,
        // }, {
        //   marginTop: 0,
        // }),
      },
    
      logoImage: {
        width: 300,
        height: 245,
        resizeMode: 'contain',
      },

      formView: {
        width: '100%',
        marginTop: 2
        // ...ifIphoneX({
        //   marginTop: 20,
        // }, {
        //   marginTop: 0,
        // }),
      },

      loginButton: {
        marginTop: 25,
        // width: '95%',
      },
})
export default Login