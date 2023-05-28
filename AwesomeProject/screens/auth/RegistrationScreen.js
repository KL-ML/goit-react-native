import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

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
import AddAvatarIcon from '../../assets/icons/addAvatar';

import InputComponent from "../../components/InputComponent";

export default function RegistrationScreen() {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    
    const keyboardHide = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
    };

    const handleFormSubmit = () => {
        console.log({ login, email, password });
        setLogin('');
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
                            <View style={{ ...styles.form, flex: isShowKeyboard ? 0.80 : 0.67 }}>
                                <TouchableOpacity
                                    style={styles.imageInput}
                                    activeOpacity={0.8}>
                                    <TouchableOpacity
                                        style={styles.addImageIcon}
                                        activeOpacity={0.8}
                                    >
                                        <AddAvatarIcon />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={styles.title}>Реєстрація</Text>
                                <InputComponent
                                    value={login}
                                    setValue={setLogin}
                                    placeholder={'Логін'}
                                    onSubmitEditing={handleFormSubmit}
                                    keyboardShow={setIsShowKeyboard}
                                />
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
                                        navigation.navigate("Home");
                                    }}
                                >
                                    <Text style={styles.buttonText}>Зареєструватися</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("Login")}
                                >
                                    <Text style={styles.linkText}>Вже є аккаунт? Увійти</Text>
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
    imageInput: {
        height: 120,
        width: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        position: 'absolute',
        top: '-15%',
    },
    addImageIcon: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
    },
    form: {
        // flex: 0.67,
        paddingTop: 92,
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