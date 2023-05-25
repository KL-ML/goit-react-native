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
} from "react-native";
import AddAvatarIcon from '../icons/addAvatar';

export default function RegistrationScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    return (
        <View style={styles.containerBase}>
            <ImageBackground
                source={require('../images/BGImage.png')}
                style={styles.background}
            >
                <KeyboardAvoidingView style={styles.container}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View
                        style={{
                            ...styles.container,
                            
                        }}
                    >
                    <View style={styles.form}>
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
                        <TextInput
                            style={styles.input}
                            placeholder={'Логін'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Електронна пошта'}
                        />
                        <View style={styles.passwordWrap}>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                    placeholder={'Пароль'}
                                    onFocus={() => setIsShowKeyboard(true )}
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
                        >
                            <Text style={styles.buttonText}>Зареєструватися</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Text style={styles.linkText}>Вже є аккаунт? Увійти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
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
        flex: 0.65,
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