import React from 'react';
import {View, Text} from 'react-native';
import styles from './styling';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

function Country({navigation, route}) {
  const {name, capital, latlng, country_code} = route.params;
  return (
    <>
      <View style={styles.h100}>
        <View style={[styles.m2, styles.p2, styles.bgWhite, styles.shadow1]}>
          <Text style={[styles.fs3, styles.textPrimary]}>{name}</Text>
          <Text>{capital}</Text>
        </View>
        <View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{
              height: 500,
              width: '100%',
            }}
            region={{
              latitude: latlng[0],
              longitude: latlng[1],
              latitudeDelta: latlng[0],
              longitudeDelta: latlng[1],
            }}>
            <Marker
              title={name}
              description={capital}
              coordinate={{
                latitude: latlng[0],
                longitude: latlng[1],
              }}>
              <Callout tooltip>
                <View
                  style={[
                    styles.bgWhite,
                    styles.p2,
                    styles.rounded,
                    styles.border1,
                  ]}>
                  <Text style={styles.fs3}>{name}</Text>
                  <Text style={[styles.fs4, styles.textSuccess]}>
                    {capital}
                  </Text>
                  <Text style={[styles.fs5, styles.textDanger]}>
                    {country_code}
                  </Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
      </View>
    </>
  );
}
export default Country;
