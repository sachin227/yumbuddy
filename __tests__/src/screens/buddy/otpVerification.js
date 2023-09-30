import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Pressable,SafeAreaView
  } from "react-native";
  import React, { useState } from "react";
  import LinearGradient from "react-native-linear-gradient";
  import IMAGES from "../../utils/images";
import Font from "../../theme";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

  const OtpVerification = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);

    const [enableMask, setEnableMask] = useState(true);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const toggleMask = () => setEnableMask((f) => !f);
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };
    return (
      <LinearGradient
      colors={["#FFD39F", "#732D7A"]}
      // colors={[ "#732D7A","#FFD39F",]}
      style={styles.container}
      start={{ x: 0, y: 2}}
      end={{ x: 2, y:0 }}
        
      >
        {/* Your content here */}
        {/* <View style={styles.content}> */}
    <SafeAreaView style={styles.root}>
    <Text style={[styles.text]}>OTP Verification</Text>
    <Text style={{ color: "#FFFFFF80", fontSize: 12.5, marginLeft: 5, alignSelf:'center',fontFamily:Font.fontFamily.openSansRegular}}>
    Sent on number +918178342251
          </Text>
      {/* <Text style={styles.title}>Show & Hide Password</Text> */}
      <View style={styles.fieldRow}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        {/* <Text style={styles.toggle} onPress={toggleMask}>
          {enableMask ? '🙈' : '🐵'}
        </Text> */}
      </View>

      <Text style={{ color: "#FFFF", fontSize: 12.5,fontFamily:Font.fontFamily.openSansRegular, marginLeft: 5,marginTop: 10, alignSelf:'center'}}>
      Resent in 20 Sec
          </Text>
      <View style={styles.GenderFormOptionsContainer}>
          <Pressable onPress={
            // () => navigation.navigate("GenderForm")
            () => navigation.navigate("GenderForm")
            }>
            <View style={styles.GenderFormBtn}>
              <Text style={{ color: "#fff", fontFamily:'bold', fontWeight:'800',fontFamily:Font.fontFamily.openSansRegular}}>Confirm</Text>
            </View>
          </Pressable>
        </View>
    </SafeAreaView>
  {/* ); */}
        {/* </View> */}
      </LinearGradient>
    );
  };
  
  export default OtpVerification;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    GenderFormOptionsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:20
      // marginTop: 40,
    },
    content: {
      flex: 1,
      // justifyContent: 'center',
      marginTop: 40,
      alignItems: "center",
      paddingHorizontal:5
    },
    text: {
      fontSize: 24,
      color: "white",
      fontWeight: "bold",
      alignContent:'center',
      alignSelf:'center',
      marginTop:10,
      fontFamily:Font.fontFamily.openSansBold
    },
    input: {
      width: 289, // Set the width of the input
      height: 50, // Set the height of the input
      borderColor: "#fff", // Set the border color
      borderWidth: 1, // Set the border width
      borderRadius: 6, // Add border radius for rounded corners
      paddingHorizontal: 74, // Add horizontal padding inside the input
      fontSize: 16, // Set the font size
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the background color
      marginTop: 20,
      color: "#fff",
    },
    inputContainer: {
      position: "relative",
    },
  
    GenderFormBtn: {
      height: 45,
      width: 280,
      backgroundColor: "#FB780A",
      borderRadius: 8,
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff", // Set the border color
      borderWidth: 1,
    },
    root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30,fontFamily:Font.fontFamily.openSansRegular},
  fieldRow: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 8,
    alignSelf:'center'
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 8,
    borderRadius: 15,
    borderWidth:1,
    borderColor:'#ffffff30'
    // backgroundColor: '#eee',
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  });
  