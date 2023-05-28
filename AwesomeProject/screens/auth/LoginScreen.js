import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

const initialState = {
    email: '',
    password: '',
}

export default function LoginScreen() {

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [onFocusInput, setOnFocusInput] = useState(false);

    const keyboardHide = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
    };

    const submit = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
        console.log(state);
        setState(initialState);
    }
    
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.containerBase}>
                <ImageBackground
                    source={require('../images/BGImage.png')}
                    style={styles.background}
                >
                    <KeyboardAvoidingView style={styles.container}
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View
                            style={styles.container}
                        >
                            <View style={{ ...styles.form, flex: isShowKeyboard ? 0.50 : 0.55 }}>
                                <Text style={styles.title}>Увійти</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder={'Адреса електронної пошти'}
                                    value={state.email}
                                    onFocus={() => {
                                        setIsShowKeyboard(true);
                                        setOnFocusInput(true);
                                    }}
                                    onBlur={() => setOnFocusInput(false)}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({ ...prevState, email: value }))}
                                />
                                <View style={styles.passwordWrap}>
                                    <TextInput
                                        style={styles.input}
                                        secureTextEntry={true}
                                        placeholder={'Пароль'}
                                        value={state.password}
                                        onFocus={() => {
                                            setIsShowKeyboard(true);
                                            setOnFocusInput(true);
                                        }}
                                        onBlur={() => setOnFocusInput(false)}
                                        onChangeText={(value) =>
                                            setState((prevState) => ({ ...prevState, password: value }))}
                                    />
                                    <TouchableOpacity
                                        style={styles.showPassword}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={styles.showPasswordText}>Показати</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={styles.formButton}
                                    activeOpacity={0.8}
                                    onPress={submit}
                                >
                                    <Text style={styles.buttonText}>Увійти</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.formLink}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
        backgroundColor: "#fff",
        boxSizing: 'border-box',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        fontStyle: 'robotoRegular',
    },
    form: {
        // flex: 0.55,
        paddingTop: 32,
        paddingBottom: 45,
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    title: {
        fontFamily: 'robotoMedium',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: '#212121',

        marginBottom: 32,
    },
    input: {
        backgroundColor: '#F6F6F6',
        marginBottom: 16,
        width: '100%',
        height: 50,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 15,
        fontSize: 16,
        lineHeight: 19,

        color: '#212121',
    },
    inputStylesOnFocus: {
        borderColor: '#FF6C00',
        backgroundColor: '#ffffff',
    },
    passwordWrap: {
        position: 'relative',
        width: '100%',
    },
    showPassword: {
        position: 'absolute',
        right: 16,
        top: 16,
    },
    showPasswordText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },
    formButton: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 32,
        marginTop: 27,
        marginBottom: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 19,

        color: '#FFFFFF',
    },
    linkText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },
});