import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text, 
  Button, 
  Image,
  Alert,
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'

class Page1 extends React.Component {

  constructor(){
    super()
    this.state = {
      profil: ''
    }
  }

  componentDidMount(){
    var root = '/user/1'
    axios.get(this.props.host + root)
    .then((x)=>{
      this.setState({
        profil: x.data[0]
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {

    var utglreg = String(this.state.profil.utglreg).split('T')[0]
    var ujamreg = String(this.state.profil.utglreg).split('T')[1]
    var utglupdate = String(this.state.profil.utglupdate).split('T')[0]
    var ujamupdate = String(this.state.profil.utglupdate).split('T')[1]

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
                    source={{uri: this.props.host + '/file/f' + this.state.profil.unama + '.jpg'}}
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
                    <Button
                      style={{width:100}}
                      title="👨 Edit Profile"
                      color='#20B2AA'
                      onPress={() => Alert.alert('🚧  Maaf sedang perbaikan  🚧')}
                    />
                  </View>
                </View>
              </View>
              
              <View style={styles.separator}/>
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Biodata User
                </Text>
                <Text style={styles.sectionDescription}>
                  👨  {this.state.profil ? this.state.profil.unama : 'Anonymous Name'}
                </Text>
                <Text style={styles.sectionDescription}>
                  📧  {this.state.profil ? this.state.profil.uemail : 'Anonymous Email'}
                </Text>
                <Text style={styles.sectionDescription}>
                  🔒  {this.state.profil ? '• • • • • • • • • •' : 'Anonymous Password'}
                </Text>
                <Text style={styles.sectionDescription}>
                  📍  {this.state.profil ? this.state.profil.ualamat : 'Unknown Address'}
                </Text>
                <Text style={styles.sectionDescription}>
                  🗺  {this.state.profil ? this.state.profil.ukabkota : 'Unknown City'}
                </Text>
                <Text style={styles.sectionDescription}>
                  📞  {this.state.profil ? this.state.profil.utelp : 'Unknown Telephone'}
                </Text>
              </View>

              <View style={styles.separator}/> 
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Register :</Text>
                </Text>
                <Text style={styles.sectionDescription}>
                  {this.state.profil ? `📅  ${utglreg}  🕰  ${String(ujamreg).split('.')[0]}` : 'Unknown Register'}
                </Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Last Update :</Text>
                </Text>
                <Text style={styles.sectionDescription}>
                  {this.state.profil ? `📅  ${utglupdate}  🕰  ${String(ujamupdate).split('.')[0]}` : 'Unknown LastUpdate'}
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
    marginVertical: 4,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default Page1;
