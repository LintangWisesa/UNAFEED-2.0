'use strict';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

class Footer extends React.Component { 
  render() {
    return (
      <ImageBackground
        backgroundColor={this.props.warna}
        accessibilityRole={'image'}
        source={this.props.gambar}
        style={{
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 32,
          backgroundColor: this.props.warna,
        }}
        imageStyle={styles.logo}>
        <Text style={styles.text}>
          Unafeed © 2019
        </Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: 0,
    marginBottom: 0,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'white',
  },
});

export default Footer;
