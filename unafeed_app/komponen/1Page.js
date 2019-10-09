import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text, 
  Button, 
  Image
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'

class Page1 extends React.Component {

  constructor(){
    super()
    this.state = {
      host: 'http://172.16.1.63:1234',
      profil: ''
    }
  }

  componentDidMount(){
    var root = '/user/1'
    axios.get(this.state.host + root)
    .then((x)=>{
      this.setState({
        profil: x.data[0]
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {
    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>
  
              <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  
                  {/* profil picture */}
                  <View style={{flex:1, width: 90, height: 90}}>
                    {
                    this.state.profil ?
                    <Image
                    style={{width: 90, height: 90}}
                    source={{uri: this.state.host + '/file/f' + this.state.profil.unama + '.jpg'}}
                    /> :
                    <Image
                    style={{width: 90, height: 90}}
                    source={{uri: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}
                    />
                    }
                  </View>
                  
                  {/* short biodata */}
                  <View style={{flex:3, width: 90, height: 90, paddingHorizontal:20}}>
                    <Text style={styles.sectionTitle}>
                      {this.state.profil ? this.state.profil.unama : 'Anonymous Name'}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      {this.state.profil ? this.state.profil.uemail : 'Anonymous Email'}
                    </Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Halaman Home
                </Text>
                <Text style={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Menu 1
                </Text>
                <Text style={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>

            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
})

export default Page1;
