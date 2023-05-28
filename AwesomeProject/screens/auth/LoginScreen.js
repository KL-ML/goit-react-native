import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import InputComponent from "../../components/InputComponent";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    
    const keyboardHide = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
    };

    const handleFormSubmit = () => {
        console.log({ email, password });
        setEmail('');
        setPassword('');
    }
    
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.containerBase}>
                <ImageBackground
                    source={require('../../assets/images/BGImage.png')}
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

                                <InputComponent
                                    value={email}
                                    setValue={setEmail}
                                    placeholder={'Електронна пошта'}
                                    onSubmitEditing={handleFormSubmit}
                                    keyboardShow={setIsShowKeyboard}
                                />
                                <View style={styles.passwordWrap}>
                                    <InputComponent
                                        value={password}
                                        setValue={setPassword}
                                        placeholder={'Пароль'}
                                        onSubmitEditing={handleFormSubmit}
                                        secureTextEntry={isPasswordHidden}
                                        keyboardShow={setIsShowKeyboard}
                                    />
                                    <TouchableOpacity
                                        style={styles.showPassword}
                                        activeOpacity={0.8}
                                        onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                                    >
                                        <Text style={styles.showPasswordText}>Показати</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={styles.formButton}
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        handleFormSubmit();
                                        keyboardHide();
                                    }}
                                >
                                    <Text style={styles.buttonText}>Увійти</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
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