import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios'

class Page4 extends React.Component {

  constructor(){
    super()
    this.state = {
      produk: []
    }
  }

  componentDidMount(){
    var root = '/product'
    axios.get(this.props.host + root)
    .then((x)=>{
      this.setState({
        produk: x.data
      })
    }).catch((x)=>{
      console.log(x)
    })
  }

  render() {

    var star = '⭐'
    var loading = 
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    var listProduk = this.state.produk.map((val, i)=>{
      return(
        <>
        <View key={i} style={styles.sectionContainer}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {/* product picture */}
            <View style={{flex:1, width: 90, height: 90}}>
              <Image
              style={{width: 90, height: 90}}
              source={{uri: this.props.host + `/file/store${val.pid}.png`}}
              />
            </View>
            {/* short description */}
            <View style={{flex:2, width: 90, height: 90, paddingHorizontal:20}}>
              <Text style={styles.sectionTitle}>
                {val.pnama}
              </Text>
              <Text style={styles.sectionDescription}>
                {`${star.repeat(parseInt(val.prating))}`}
              </Text>
              <Text style={styles.sectionDescription}>
                {`💵  Rp ${val.pharga}/${val.psatuan}`}
              </Text>
            </View>
            <View style={{flex:1, width: 90, height: 90}}>
              <Button
                title="🛒  Beli"
                color='#20B2AA'
                onPress={() => Alert.alert('🚧  Maaf sedang perbaikan  🚧')}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator}/>
        </>
      )
    })

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.sectionContainerStore}>
                <Text style={styles.sectionTitleStore}>
                  Lengkapi kebutuhan budidaya sidat Anda bersama 
                  <Text style={styles.highlight}>
                    &nbsp;UnaStore
                  </Text>
                  !
                </Text>
              </View>
              <View style={styles.separator}/>

              {this.state.produk ? listProduk : loading}

              <View style={styles.sectionContainerStore2}>
                <Text style={styles.sectionTitleStore}>
                  ❤  Mudah, murah dan amanah  ❤
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

export default Page4;
