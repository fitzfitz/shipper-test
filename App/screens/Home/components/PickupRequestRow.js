import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Platform, UIManager, LayoutAnimation } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginBottom: 5
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: "#efefef",
    borderRadius: 5
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#efefef'
  },
  content: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
  },
  package_detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3
  },
  package: {
    fontWeight: "bold",
  },
  time: {
    fontWeight: "bold",
    color: '#fc433a'
  },
  address: {
    fontSize: 10,
    color: '#ccc'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: -5,
    overflow: 'hidden'
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  buttonDetail: {
    flex: 1,
    borderColor: '#efefef',
    backgroundColor: '#efefef'
  },
  buttonReject: {
    flex: 1,
    borderColor: '#a32e32'
  },
  buttonAccept: {
    flex: 1,
    borderColor: '#ff443b',
    backgroundColor: '#ff443b',
  },
  buttonAcceptText: {
    color: '#fff'
  }
});

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default ({ item, navigation }) => {
  const package_detail = `${item.package_qty} Paket (${item.package_weight} KG)`;
  const time = `${item.start_time} - ${item.end_time}`
  const address = `${item.address_home}, ${item.address_street}, ${item.address_location}`
  const [expand, setExpand] = useState(false)

  const toggleButtons = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpand(!expand);
  }

  return <TouchableHighlight onPress={toggleButtons} style={styles.container} underlayColor="white">
    <View style={styles.wrapper}>
      <View style={styles.description}>
        <View style={styles.icon}>
          <Octicons name="package" size={25} color="#969595" />
        </View>
        <View style={styles.content}>
          <View style={styles.package_detail}>
            <Text style={styles.package}>{package_detail}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>

      <View style={{...styles.buttons, height: expand ? 'auto' : 0, opacity: expand ? 1 : 0}}>
        <TouchableOpacity 
          onPress={() => navigation.push('PickupRequestDetail', { data: item })}
          style={[styles.button, styles.buttonDetail]}
        >
          <Text>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.button, ...styles.buttonReject}}
        >
          <Text>Tolak</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.button, ...styles.buttonAccept}}
        >
          <Text style={styles.buttonAcceptText}>Terima</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableHighlight>
};