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
      xsuhu: [], xdo: [], xph: [], xamonia: [], xtds: [], xtangki: [],
      datalast: ''
    }
  }

  componentDidMount(){
    var root = '/xdklast/2611'
    axios.get(this.props.host + root)
    .then((x)=>{
      this.setState({
        datalast: x.data
      })
    }).catch((x)=>{
      console.log(x)
    })

    var root2 = '/xdk/2611'
    axios.get(this.props.host + root2)
    .then((x)=>{
      this.setState({
        xsuhu: x.data.map((val, i) => parseFloat(val.xsuhu)),
        xdo: x.data.map((val, i) => parseFloat(val.xdo)),
        xph: x.data.map((val, i) => parseFloat(val.xph)),
        xamonia: x.data.map((val, i) => parseFloat(val.xamonia)),
        xtds: x.data.map((val, i) => parseFloat(val.xtds)),
        xtangki: x.data.map((val, i) => parseFloat(val.xtangki)),
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {

    var utgl = String(this.state.datalast.xtime).split('T')[0]
    var ujam = String(this.state.datalast.xtime).split('T')[1]
    
    const dataSuhuAir = {
      datasets: [
          {
          data: [25.4, 25.1, 25.4, 25, 25.2, 25.2]
          }
      ]
    }

    const dataDo = {
      datasets: [
          {
          data: [6.5, 6.1, 6.2, 5.9, 6, 6]
          }
      ]
    }

    const dataPh = {
      datasets: [
          {
          data: [7.3, 7, 7.3, 7.1, 7, 7]
          }
      ]
    }

    const dataAmonia = {
      datasets: [
          {
          data: [0.019, 0.025, 0.021, 0.022, 0.02, 0.02]
          }
      ]
    }

    const dataTds = {
      datasets: [
          {
          data: [253.2, 257, 252, 253, 250, 250]
          }
      ]
    }

    const dataTangki = {
      datasets: [
          {
          data: [46, 49, 47, 47, 48, 48]
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
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Suhu Air (°C)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xsuhu : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>DO (mg/L)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xdo : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 148, 120,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Ph</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xph : 0}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* row 2 */}
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 11}}>Amonia (mg/L)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xamonia : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 148, 120,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>TDS (mg/L)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xtds : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex:1, width: 90, height: 90, backgroundColor: 'rgba(255, 203, 5,0.4)'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Text style={{paddingVertical: 10, fontSize: 12}}>Tangki (%)</Text>
                      <Text style={{fontSize: 30}}>
                        {this.state.datalast ? this.state.datalast.xtangki : 0}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.separator}/>

              {/* chart Suhu Udara */}
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
                  📈  History DO (mg/L)
                </Text>
                <LineChart
                  data={dataDo}
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
                  📈  History Ph
                </Text>
                <LineChart
                  data={dataPh}
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
                  📈  History Kadar Amonia (mg/L)
                </Text>
                <LineChart
                  data={dataAmonia}
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
                  📈  History TDS (mg/L)
                </Text>
                <LineChart
                  data={dataTds}
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
