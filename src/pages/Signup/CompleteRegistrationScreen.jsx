// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Alert, Text, Pressable, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useCompleteRegistrationMutation } from '../redux/slices/apiSlice';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from '../redux/slices/authSlice';
// import SvgShikayetVar from '../assets/svgs/Logo';

// const CompleteRegistrationScreen = ({ route, navigation }) => {
//   const { email } = route.params;
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [birthDay, setBirthDay] = useState('');
//   const [birthMonth, setBirthMonth] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [completeRegistration, { isLoading }] = useCompleteRegistrationMutation();
//   const dispatch = useDispatch();

//   const handleCompleteRegistration = async () => {
//     if (password !== confirmPassword) {
//       return Alert.alert('Error', 'Passwords do not match');
//     }

//     // Doğum tarihi alanlarının eksik olmadığından emin ol
//     if (!birthYear || !birthMonth || !birthDay) {
//       return Alert.alert('Error', 'Please select a valid birthdate');
//     }

//     const birthdate = `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDay.padStart(2, '0')}`;

//     const formData = {
//       email,
//       name,
//       surname,
//       birthdate,
//       password,
//     };

//     try {
//       const userData = await completeRegistration(formData).unwrap();
//       dispatch(setCredentials(userData));
//       navigation.navigate('Home');
//     } catch (err) {
//       console.error('Failed to complete registration', err);
//       Alert.alert('Error', 'Failed to complete registration. Please try again.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <SvgShikayetVar />
//       <TextInput
//         value={name}
//         onChangeText={setName}
//         placeholder="Name"
//         style={styles.input}
//       />
//       <TextInput
//         value={surname}
//         onChangeText={setSurname}
//         placeholder="Surname"
//         style={styles.input}
//       />
//       <Text>Birthdate</Text>
//       <View style={styles.datePickerContainer}>
//         <Picker
//           selectedValue={birthDay}
//           style={styles.picker}
//           onValueChange={(itemValue) => setBirthDay(itemValue)}
//         >
//           <Picker.Item label="Day" value="" />
//           {Array.from({ length: 31 }, (_, i) => (
//             <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
//           ))}
//         </Picker>
//         <Picker
//           selectedValue={birthMonth}
//           style={styles.picker}
//           onValueChange={(itemValue) => setBirthMonth(itemValue)}
//         >
//           <Picker.Item label="Month" value="" />
//           {Array.from({ length: 12 }, (_, i) => (
//             <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
//           ))}
//         </Picker>
//         <Picker
//           selectedValue={birthYear}
//           style={styles.picker}
//           onValueChange={(itemValue) => setBirthYear(itemValue)}
//         >
//           <Picker.Item label="Year" value="" />
//           {Array.from({ length: 100 }, (_, i) => (
//             <Picker.Item key={i} label={`${2022 - i}`} value={`${2022 - i}`} />
//           ))}
//         </Picker>
//       </View>
//       <TextInput
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Password"
//         secureTextEntry
//         style={styles.input}
//       />
//       <TextInput
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         placeholder="Confirm Password"
//         secureTextEntry
//         style={styles.input}
//       />
//       <Pressable style={styles.btn} onPress={handleCompleteRegistration} disabled={isLoading}>
//         <Text>Complete Registration</Text>
//       </Pressable>
//     </ScrollView>
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
//     marginTop: 20,
//   },
//   datePickerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 8,
//   },
//   picker: {
//     flex: 1,
//     height: 50,
//     marginRight: 8,
//   },
// });

// export default CompleteRegistrationScreen;
