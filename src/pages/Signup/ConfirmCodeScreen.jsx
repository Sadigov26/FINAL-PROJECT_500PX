// // ConfirmCodeScreen.js veya ilgili dosya
// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Alert, Text, Pressable } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useConfirmEmailMutation } from '../redux/slices/apiSlice';
// import { setCredentials } from '../../redux/slices/authSlice.js';
// import SvgShikayetVar from '../assets/svgs/Logo';

// const ConfirmCodeScreen = ({ route, navigation }) => {
//   const { email } = route.params;
//   const [code, setCode] = useState('');
//   const [confirmEmail, { isLoading }] = useConfirmEmailMutation();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.api.error);
//   const timer = useSelector((state) => state.timer);

//   const handleConfirm = async () => {
//     try {
//       await confirmEmail({ email, code }).unwrap();
//       navigation.navigate('CompleteRegistration', { email });
//     } catch (err) {
//       console.error('Failed to confirm email', err);
//       Alert.alert('Error', 'Invalid confirmation code. Please try again.');
//     }
//   };

//   const handleResendCode = async () => {
//     // Logic to resend the code
//   };

//   return (
//     <View style={styles.container}>
//       <SvgShikayetVar />
//       <TextInput
//         value={code}
//         onChangeText={setCode}
//         placeholder="Confirmation Code"
//         keyboardType="numeric"
//         style={styles.input}
//       />
//       <Pressable style={styles.btn} onPress={handleConfirm} disabled={isLoading}>
//         <Text>Confirm</Text>
//       </Pressable>
//       {timer === 0 && (
//         <Pressable style={styles.btn} onPress={handleResendCode}>
//           <Text>Resend Code</Text>
//         </Pressable>
//       )}
//       {timer > 0 && <Text>Resend code in {timer} seconds</Text>}
//       {error && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginVertical: 8,
//     width: '98%',
//     borderRadius: 10,
//   },
//   btn: {
//     backgroundColor: 'orange',
//     width: '50%',
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     marginVertical: 8,
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//   },
// });

// export default ConfirmCodeScreen;
