import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

class Page5 extends React.Component {

  constructor(){
    super()
    this.state = {
        statusmixer: 'OFF', buttonmixer: 'ON', butmix: '#20B2AA',
        statusextruder: 'OFF', buttonextruder: 'ON', butext: '#20B2AA',
        rekomen: false, bobottotal: 0, bobotsatuan: 0, jumlahsidat: 0, bobotpakan: 0
    }
  }

  mixer = () => {
      if(this.state.statusmixer == 'OFF'){
          this.setState({
              statusmixer: 'ON', buttonmixer: 'OFF', 
              butmix: '#FFA500',
          })
          Alert.alert('Mixer Status: ON 🔵')
      } else {
          this.setState({
              statusmixer: 'OFF', buttonmixer: 'ON', 
              butmix: '#20B2AA',
          })
          Alert.alert('Mixer Status: OFF 🔴')
      }
  }

  extruder = () => {
      if(this.state.statusextruder == 'OFF'){
          this.setState({
              statusextruder: 'ON', buttonextruder: 'OFF', 
              butext: '#FFA500',
          })
          Alert.alert('Extruder Status: ON 🔵')
      } else {
          this.setState({
              statusextruder: 'OFF', buttonextruder: 'ON', 
              butext: '#20B2AA',
          })
          Alert.alert('Extruder Status: OFF 🔴')
      }
  }

  render() {

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  🎮  Kontrol Manual
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                  
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1, marginHorizontal: 10}}>
                    <Text style={{textAlign:'center', marginBottom: 5}}>
                      Status Mixer :
                      <Text style={{fontWeight: 'bold'}}>
                        &nbsp;{this.state.statusmixer}
                      </Text>
                    </Text>
                    <TouchableOpacity
                    onPress={this.mixer}
                    style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.butmix, height: 60}}
                    >
                      <Text style={{color: 'white'}}>
                        MIXER {this.state.buttonmixer}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex:1, marginHorizontal: 10}}>
                    <Text style={{textAlign:'center', marginBottom: 5}}>
                      Status Extruder :
                      <Text style={{fontWeight: 'bold'}}>
                        &nbsp;{this.state.statusextruder}
                      </Text>
                    </Text>
                    <TouchableOpacity
                    onPress={this.extruder}
                    style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.butext, height: 50}}
                    >
                      <Text style={{color: 'white'}}>
                        EXTRUDER {this.state.buttonextruder}
                      </Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

              <View style={styles.separator}/>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  🎮  Kontrol Otomatis
                </Text>
              </View>

              <View style={styles.sectionContainer}>
                <TextInput
                  placeholder=' 📝 Bobot total sidat (gr) ...'
                  style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, marginBottom:13 }}
                  keyboardType='numeric'
                  onChangeText={(text) => this.setState({bobottotal: text})}
                />
                <TextInput
                  placeholder=' 📝 Bobot satuan sidat (gr) ...'
                  style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, marginBottom:13 }}
                  keyboardType='numeric'
                  onChangeText={(text) => this.setState({bobotsatuan: text})}
                />
                <TextInput
                  placeholder=' 📝 Frekuensi pemberian pakan /hari ...'
                  style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, marginBottom:13 }}
                  keyboardType='numeric'
                />
                <TouchableOpacity
                  onPress={
                    ()=>{
                      Alert.alert('Setting Unafeeder 🆗')
                      this.setState({
                        rekomen: true,
                        jumlahsidat: parseInt(this.state.bobottotal / this.state.bobotsatuan),
                        bobotpakan: parseFloat(0.03 * this.state.bobottotal)
                      })
                    }
                  }
                  style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#20B2AA', height: 50, marginBottom: 10}}
                  >
                  <Text style={{color: 'white'}}>
                    Terapkan  🆗
                  </Text>
                </TouchableOpacity>
                <Text style={{marginVertical:5}}>
                  {
                    this.state.rekomen ?
                    `Jumlah sidat: ${this.state.jumlahsidat}, rekomendasi total pakan harian: ${this.state.bobotpakan} gr.` :
                    ''
                  }
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
  sectionContainerStore: {
    marginTop: 16,
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  sectionContainerStore2: {
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  sectionTitleStore: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center'
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginLeft: 10,
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
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default Page5;
