import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView, Platform
} from 'react-native';

function FormInput (props) {
    return(
        <View>
            <View>
                {props.label && <Text style={styles.labelText}>{props.label}</Text>}
                {
                        (props.type === "text")
                        ? <TextInput
                            style={[styles.textInput, {fontFamily: font}]}
                            editable={editable}
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            ref={onRefInput}
                            returnKeyType={returnKeyType}
                            onSubmitEditing={onSubmitEditing}
                        />
                        : null
                    }
                    {/* {
                        (props.type === "textview")
                        ? <TextInput
                            style={[styles.textView, {fontFamily: font}]}
                            editable={editable}
                            numberOfLines={6}
                            multiline={true}
                            allowFontScaling={false}
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            ref={onRefInput}
                            returnKeyType={returnKeyType}
                            onSubmitEditing={onSubmitEditing}
                        />
                        : null
                    } */}

                    {
                        (props.type === "email")
                        ? <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            // editable={editable}
                            keyboardType="email-address"
                            style={styles.textInput}
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={props.onChangeText}
                            value={props.value}
                            placeholder={props.placeholder}
                            ref={props.onRefInput}
                            returnKeyType={props.returnKeyType}
                            onSubmitEditing={props.onSubmitEditing}
                        />
                        : null
                    }
                    {
                        (props.type === "password")
                        ? <View>
                            <TextInput
                                secureTextEntry={true}
                                autoCapitalize='none'
                                autoCorrect={false}
                                // editable={editable}
                                style={[styles.textInput]}
                                placeholderTextColor="#c9c9c9"
                                underlineColorAndroid='transparent'
                                onChangeText={props.onChangeText}
                                value={props.value}
                                placeholder={props.placeholder}
                                ref={props.onRefInput}
                                returnKeyType={props.returnKeyType}
                                onSubmitEditing={props.onSubmitEditing}
                            />
                        </View>
                        : null
                    }
            </View>
            {
                props.errorMessage
                ? <Text style={styles.errorMessage}>{props.errorMessage}</Text>
                : null
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    containerGray: {
        backgroundColor: '#E7E7E7',
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 21,
        paddingLeft: 20,
        paddingRight: 20,
        height: 42,
    },

    labelText: {
        // fontFamily: Fonts.bold,
        fontSize: 14,
        marginBottom: 10,
        color: '#222',
        marginBottom: 5,
    },

    textInput: {
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: 43,
        color: 'black',
    },

    dropdownBox: {
        paddingVertical: Platform.OS == 'ios' ? 11 : 0,
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        color: 'black',
    },

    textView: {
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: 150,
        color: 'black',
        paddingTop: 10,
        textAlignVertical: "top",
    },

    hasShowButtonTextInput: {
        fontSize: 16,
        height: '100%',
        marginRight: 30,
        height: 42,
    },

    forgotTextInput: {
        color: '#474747',
        paddingLeft: 5,
        fontSize: 17,
        paddingRight: 70,
        position: 'relative',
    },

    forgotButton: {
        position: 'absolute',
        right: 0,
    },

    forgotButtonText: {
        fontSize: 11,
        backgroundColor: '#0d4e6c',
        textTransform: 'uppercase',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    },

    formField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconView: {
        left: 0,
        top: 7,
        position: 'absolute',
    },

    iconImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },

    showPasswordButton: {
        position: 'absolute',
        right: 10,
        top: 5,
        zIndex: 10,
        width: 35,
        height: 35,
    },

    errorMessage: {
        // fontFamily: Fonts.regular,
        fontStyle: 'italic',
        color: 'red',
        fontSize: 11,
        marginTop: 3,
        marginLeft: 15,
    },

    centerText: {
        textAlign: 'center'
    },

    eye_icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        top: 5,
        right: 5,
    },

    addressInput: {
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: '100%',
        height: 50,
        color: 'black',
    },

    dropdownIcon: {
        width: 17,
        height: 10,
    },
});

export default FormInput;