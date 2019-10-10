import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'

class Page2 extends React.Component {

  constructor(){
    super()
    this.state = {
      datalast: ''
    }
  }

  componentDidMount(){
    var root = '/iotlast/2611'
    axios.get(this.props.host + root)
    .then((x)=>{
      this.setState({
        datalast: x.data
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {

    var utgl = String(this.state.datalast.itime).split('T')[0]
    var ujam = String(this.state.datalast.itime).split('T')[1]

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  📊  Kondisi Terakhir Kolam
                </Text>
                <Text style={styles.sectionDescription}>
                  {this.state.datalast ? `📅  ${utgl}  🕰  ${String(ujam).split('.')[0]}` : 'Unknown Timestamp'}
                </Text>
              </View>

              <View style={styles.sectionContainer}>
                {/* row 1 */}
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 148, 120,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Suhu Udara (°C)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.isuhuu : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Suhu Air (°C)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.isuhua : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 148, 120,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Kelembaban (%)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.ilembab : 0}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* row 2 */}
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 11}}>Tekanan Udara (Pa)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.ipressu : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 148, 120,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Altitude (m)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.ialti : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Tangki (%)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.itangki : 0}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.separator}/>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Halaman UnaSense
                </Text>
                <Text style={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>
              
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Menu 2
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
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default Page2;
