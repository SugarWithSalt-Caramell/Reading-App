import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function MoreScreen({navigation}: any) {
  const [downloadOnly, setDownloadOnly] = useState(false);
  const [incognito, setIncognito] = useState(false);

  const MenuItem = ({ icon, title, subtitle, hasSwitch, switchValue, onSwitch, onPress }: any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} disabled={hasSwitch} >
      <MaterialCommunityIcons name={icon} size={24} color="#888" style={styles.menuIcon} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle ? <Text style={styles.menuSubtitle}>{subtitle}</Text> : null}
      </View>
      {hasSwitch && (
        <Switch 
          value={switchValue} 
          onValueChange={onSwitch}
          thumbColor={switchValue ? "#2979FF" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#1c3a6e" }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons name="gate" size={60} color="#AAA" />
      </View>

      <ScrollView>
        <MenuItem icon="cloud-off-outline" title="Downloaded only" subtitle="Filters all entries in your library" hasSwitch={true} switchValue={downloadOnly} onSwitch={setDownloadOnly}/>
        <MenuItem icon="incognito" title="Incognito mode" subtitle="Pauses reading history" hasSwitch={true} switchValue={incognito} onSwitch={setIncognito}/>
        
        <View style={styles.divider} />

        <MenuItem icon="download-outline" title="Download queue" subtitle="Show Download Queue" onPress ={() => navigation.navigate('DownloadQueue')}/>
        <MenuItem icon="label-outline" title="Categories" subtitle="Every Categorz of Books Manhwa, Manga, Novel.." onPress={() => navigation.navigate('Categories')}/>
        <MenuItem icon="chart-bar" title="Statistics" subtitle="See your reading statistics" onPress={() => navigation.navigate('Statistics')}/>
        <MenuItem icon="database-outline" title="Data and storage" subtitle="Your Storage usage & Folder" onPress={() => navigation.navigate('DataAndStorage')}/>
        
        <View style={styles.divider} />

        <MenuItem icon="cog-outline" title="Settings" subtitle="" onPress={() => navigation.navigate('Settings')}/>
        <MenuItem icon="information-outline" title="About" subtitle="" onPress={() => navigation.navigate('About')}/>
        <MenuItem icon="help-circle-outline" title="Help" subtitle="" onPress={() => navigation.navigate('Help')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  logoContainer: { alignItems: 'center', paddingVertical: 40, borderBottomWidth: 1, borderBottomColor: '#222' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  menuIcon: { marginRight: 20 },
  menuTextContainer: { flex: 1 },
  menuTitle: { color: '#FFF', fontSize: 16 },
  menuSubtitle: { color: '#888', fontSize: 12 },
  divider: { height: 1, backgroundColor: '#222', marginVertical: 5 }
});