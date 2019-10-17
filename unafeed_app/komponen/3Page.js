import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

class Page3 extends React.Component {
  render() {
    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
            <View style={styles.body}>
              
              <View style={styles.sectionContainerStore}>
                <Text style={styles.sectionTitleStore}>
                  Optimalkan peternakan Anda dengan model Machine Learning
                  <Text style={styles.highlight}>
                    &nbsp;
                  </Text>
                </Text>
              </View>
              <View style={styles.separator}/>

              <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  {/* product picture */}
                  <View style={{flex:1, width: 120, height: 120}}>
                    <Image
                    style={{width: 120, height: 120}}
                    source={{uri: `http://www.satuharapan.com/uploads/cache/news_77968_1523595814.jpg`}}
                    />
                  </View>
                  {/* short description */}
                  <View style={{flex:2, width: 90, height: 90, paddingHorizontal:20}}>
                    <Text style={styles.sectionTitle}>
                      Klasifikasi Spesies
                    </Text>
                    <Text style={styles.sectionDescription}>
                      🔍  Model Klasifikasi
                    </Text>
                    <View style={styles.separator}/>
                    <Text style={styles.sectionDescription}>
                      Klasifikasikan sidat Anda berdasarkan bentuk morfologinya.
                    </Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.separator}/>
              
              <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  {/* product picture */}
                  <View style={{flex:1, width: 120, height: 120}}>
                    <Image
                    style={{width: 120, height: 120}}
                    source={{uri: `https://cdn.idntimes.com/content-images/community/2019/08/cov-foodtribute-4805c6311f84975641d8e6c6fed44c49_600x400.jpg`}}
                    />
                  </View>
                  {/* short description */}
                  <View style={{flex:2, width: 90, height: 90, paddingHorizontal:20}}>
                    <Text style={styles.sectionTitle}>
                      Prediksi Bobot Panen
                    </Text>
                    <Text style={styles.sectionDescription}>
                      🔍  Model Regresi
                    </Text>
                    <View style={styles.separator}/>
                    <Text style={styles.sectionDescription}>
                      Prediksikan bobot total sidat Anda saat panen tiba.
                    </Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.separator}/>

              <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  {/* product picture */}
                  <View style={{flex:1, width: 120, height: 120}}>
                    <Image
                    style={{width: 120, height: 120}}
                    source={{uri: `https://i0.wp.com/gresik.co/wp-content/uploads/2016/06/budidaya-sidat.jpg`}}
                    />
                  </View>
                  {/* short description */}
                  <View style={{flex:2, width: 90, height: 90, paddingHorizontal:20}}>
                    <Text style={styles.sectionTitle}>
                      Klustering Habit Sidat
                    </Text>
                    <Text style={styles.sectionDescription}>
                      🔍  Model Klustering
                    </Text>
                    <View style={styles.separator}/>
                    <Text style={styles.sectionDescription}>
                      Memantau habit sidat untuk mengetahui kondisi kesehatan sidat.
                    </Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.separator}/>

              <View style={styles.sectionContainerStore2}>
                <Text style={styles.sectionTitleStore}>
                  ❤  Coming soon  ❤
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

export default Page3;
