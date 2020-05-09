import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column'
  },
  header: {
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  intro: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  intro_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  intro_content_title: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  intro_content_name: {
    fontSize: 17,
  },
  intro_content: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  map: {
    borderRadius: 5,
    backgroundColor: '#d7d7d7',
    height: 150
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  description_title: {
    fontWeight: 'bold'
  },
  description_data: {
    textAlign: 'right',
    color: '#aaa'
  },
  footer: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  buttonDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  buttonStart: {
    backgroundColor: '#ff443b',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});

export default ({ route, navigation }) => {
  const { data } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="ios-arrow-round-back" size={35} />
        </TouchableOpacity>
      </View>
  
      <View style={styles.content}>
        <Text style={styles.title}>Detail Pickup</Text>

        <View style={styles.intro}>
          <View style={styles.intro_image}>
            <FontAwesome name="user-circle" size={40} color="#ccc" />
          </View>
          <View style={styles.intro_content}>
            <Text style={styles.intro_content_title}>Nama Merchant</Text>
            <Text style={styles.intro_content_name}>{data.merchant_name}</Text>
          </View>
        </View>

        <View style={styles.map}>
          <MapView
            style={{flex: 1}}
            region={{
              latitude: data.latitude || 0,
              longitude: data.longitude || 0,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001
            }}
            zoomControlEnabled={true}
          >
            {/* Hides marker if lat & long is undefined */}
            {(!!data.latitude && !!data.longitude) && <MapView.Marker
              coordinate={{
                latitude: data.latitude || 0,
                longitude: data.longitude || 0,
              }}
            />}
          </MapView>
        </View>

        <View>
          <View style={styles.description}>
            <Text style={styles.description_title}>Nama Pemilik</Text>
            <Text style={styles.description_data}>{data.name}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.description_title}>Jam Pickup</Text>
            <Text style={styles.description_data}>{`${data.start_time} - ${data.end_time}`}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.description_title}>Alamat</Text>
            <View>
              <Text style={styles.description_data}>{data.address_home}</Text>
              <Text style={styles.description_data}>{data.address_street}</Text>
              <Text style={styles.description_data}>{data.address_location}</Text>
            </View>
          </View>
        </View>
      </View>
  
      <View style={styles.footer}>
        {/* Link to phone on press */}
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${data.merchant_phone}`)} style={styles.buttonDesc}>
          <View style={{flexDirection: 'row'}}>
            <Feather name="phone" color="#ff443b" size={20} />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Telepon</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{data.merchant_phone}</Text>
            <MaterialIcons style={{color: '#ff443b', fontWeight: 'bold'}} name="keyboard-arrow-right" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDesc}>
          <View style={{flexDirection: 'row'}}>
            <Octicons name="package" color="#ff443b" size={20} />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Detail Paket</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons style={{color: '#ff443b', fontWeight: 'bold'}} name="keyboard-arrow-right" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStart}>
          <Text style={{color: '#fff'}}>Mulai Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};