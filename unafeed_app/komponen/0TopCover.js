'use strict';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

class TopCover extends React.Component { 
  render() {
    return (
      <ImageBackground
        backgroundColor={this.props.warna}
        accessibilityRole={'image'}
        source={this.props.gambar}
        style={{
          paddingBottom: 25,
          paddingTop: 60,
          paddingHorizontal: 32,
          backgroundColor: this.props.warna,
        }}
        imageStyle={styles.logo}>
        <Text style={styles.text}>
          {this.props.judul}
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
});

export default TopCover;
