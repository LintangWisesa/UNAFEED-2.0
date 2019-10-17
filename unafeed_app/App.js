// npm i @react-native-community/viewpager
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from "@react-native-community/viewpager";
import FirstCover from './komponen/0FirstCover'
import TopCover from './komponen/0TopCover'
import Page1 from './komponen/1Page'
import Page2 from './komponen/2Page'
import Page3 from './komponen/3Page'
import Page4 from './komponen/4Page'
import Page5 from './komponen/5Page'
import Footer from './komponen/0Footer'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      // host backend
      host: 'http://192.168.43.15:1234'  
    }
  }

  render() {

    var cover1 = {judul: '🏡 Beranda', color: '#fd5c63', gambar: require('./komponen/cover1.jpg')}
    var cover2 = {judul: '🌡 UnaSense', color: '#FF8C00', gambar: require('./komponen/cover2.jpg')}
    var cover3 = {judul: '🔭 UnaPredict', color: '#30c39e', gambar: require('./komponen/cover3.jpg')}
    var cover4 = {judul: '🛍 UnaStore', color: '#6A8AC3', gambar: require('./komponen/cover4.jpg')}
    var cover5 = {judul: '🐟 UnaFeeder', color: '#EE82EE', gambar: require('./komponen/cover5.jpg')}

    return (
      <ViewPager
        style={styles.viewPager}
        initialPage={0}>
        
        {/* halaman 1 */}
        <View key="1" style={{backgroundColor:cover1.color}}>
          <FirstCover warna={cover1.color} judul={cover1.judul} gambar={cover1.gambar}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}>
              <Button
                title="📝  Edit Profile"
                color='#20B2AA'
                onPress={() => Alert.alert('🚧  Maaf sedang perbaikan  🚧')}
              />
            </View>
            <View style={{flex:1}}>
              <Button
                title="🏃‍  Logout"
                color='#DC143C'
                onPress={() => Alert.alert('🚧  Maaf sedang perbaikan  🚧')}
              />
            </View>
          </View>
          <Page1 host={this.state.host}/>
          <Footer warna={cover1.color} judul={cover1.judul} gambar={cover1.gambar}/>
        </View>

        {/* halaman 2 */}
        <View key="5" style={{backgroundColor:cover5.color}}>
          <TopCover warna={cover5.color} judul={cover5.judul} gambar={cover5.gambar}/>
          <Page5 host={this.state.host}/>
          <Footer warna={cover5.color} judul={cover5.judul} gambar={cover5.gambar}/>
        </View>

        {/* halaman 2 */}
        <View key="2" style={{backgroundColor:cover2.color}}>
          <TopCover warna={cover2.color} judul={cover2.judul} gambar={cover2.gambar}/>
          <Page2 host={this.state.host}/>
          <Footer warna={cover2.color} judul={cover2.judul} gambar={cover2.gambar}/>
        </View>

        {/* halaman 3 */}
        <View key="3" style={{backgroundColor:cover3.color}}>
          <TopCover warna={cover3.color} judul={cover3.judul} gambar={cover3.gambar}/>
          <Page3 host={this.state.host}/>
          <Footer warna={cover3.color} judul={cover3.judul} gambar={cover3.gambar}/>
        </View>

        {/* halaman 4 */}
        <View key="4" style={{backgroundColor:cover4.color}}>
          <TopCover warna={cover4.color} judul={cover4.judul} gambar={cover4.gambar}/>
          <Page4 host={this.state.host}/>
          <Footer warna={cover4.color} judul={cover4.judul} gambar={cover4.gambar}/>
        </View>

      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App;
