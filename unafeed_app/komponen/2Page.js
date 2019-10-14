import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'
import {
  LineChart,
} from "react-native-chart-kit";

class Page2 extends React.Component {

  constructor(){
    super()
    this.state = {
      isuhuu: [], isuhua: [], ilembab: [], ipressu: [], ialti: [], itangki: [],
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

    var root2 = '/iot/2611'
    axios.get(this.props.host + root2)
    .then((x)=>{
      this.setState({
        isuhuu: x.data.map((val, i) => parseFloat(val.isuhuu)),
        isuhua: x.data.map((val, i) => parseFloat(val.isuhua)),
        ilembab: x.data.map((val, i) => parseFloat(val.ilembab)),
        ipressu: x.data.map((val, i) => parseFloat(val.ipressu)),
        ialti: x.data.map((val, i) => parseFloat(val.ialti)),
        itangki: x.data.map((val, i) => parseFloat(val.itangki)),
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {

    var utgl = String(this.state.datalast.itime).split('T')[0]
    var ujam = String(this.state.datalast.itime).split('T')[1]
    
    const dataSuhuUdara = {
      datasets: [
          {
          data: [29.8, 29.8, 29.8, 29.8, 29.9, 29.9, 29.9, 29.9, 30, 30]
          }
      ]
    }

    const dataSuhuAir = {
      datasets: [
          {
          data: [18.3, 18.3, 18.3, 18.3, 18.3, 18.3, 18.3, 18.3, 18.3, 18.3]
          }
      ]
    }

    const dataLembab = {
      datasets: [
          {
          data: [18, 25, 28, 18, 18, 18, 22, 18, 18, 18]
          }
      ]
    }

    const dataPressu = {
      datasets: [
          {
          data: [96565, 96571, 96566, 96567, 96563, 96573, 96571, 96562, 96567, 96572]
          }
      ]
    }

    const dataAlti = {
      datasets: [
          {
          data: [403.37, 403.97, 404.23, 404.15, 403.8, 404.06, 403.89, 403.97, 403.45, 403.8]
          }
      ]
    }

    const dataTangki = {
      datasets: [
          {
          data: [52, 52, 52, 52, 52, 52, 52, 52, 52, 52]
          }
      ]
    }

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  📊  Kondisi Terakhir Kolam
                </Text>
              </View>

              <View style={styles.sectionContainer}>
                <View style={{marginBottom:10}}>
                  <Text style={styles.sectionDescriptionCenter}>
                    {this.state.datalast ? `📅  ${utgl}  🕰  ${String(ujam).split('.')[0]}` : 'Unknown Timestamp'}
                  </Text>
                </View>
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

              {/* chart Suhu Udara */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Suhu Udara (°C)
                </Text>
                <LineChart
                  data={dataSuhuUdara}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#f9665e",
                    backgroundGradientFrom: "#f9665e",
                    backgroundGradientTo: "#f9665e",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>
              
              <View style={styles.separator}/>

              {/* chart Suhu Air */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Suhu Air (°C)
                </Text>
                <LineChart
                  data={dataSuhuAir}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#fbd6c6",
                    backgroundGradientFrom: "#fbd6c6",
                    backgroundGradientTo: "#fbd6c6",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>

              <View style={styles.separator}/>

              {/* chart lembab */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Kelembaban (%)
                </Text>
                <LineChart
                  data={dataLembab}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#f7ebc3",
                    backgroundGradientFrom: "#f7ebc3",
                    backgroundGradientTo: "#f7ebc3",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>

              <View style={styles.separator}/>

              {/* chart Tek udara */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Tekanan Udara (Pa)
                </Text>
                <LineChart
                  data={dataPressu}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#bed7d1",
                    backgroundGradientFrom: "#bed7d1",
                    backgroundGradientTo: "#bed7d1",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>

              <View style={styles.separator}/>

              {/* chart Altitude */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Altitude (m)
                </Text>
                <LineChart
                  data={dataAlti}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#95b4cc",
                    backgroundGradientFrom: "#95b4cc",
                    backgroundGradientTo: "#95b4cc",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>

              <View style={styles.separator}/>

              {/* chart Tangki */}
              <View style={styles.sectionContainer}>
                <Text>
                  📈  History Kapasitas Tangki (%)
                </Text>
                <LineChart
                  data={dataTangki}
                  width={Dimensions.get("window").width - 50} // from react-native
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "#fec9c9",
                    backgroundGradientFrom: "#fec9c9",
                    backgroundGradientTo: "#fec9c9",
                    decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `black`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16
                  }
                  }}
                  style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                />
              </View>

              <View style={styles.separator}/>
            
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
  sectionDescriptionCenter: {
    textAlign: 'center',
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
