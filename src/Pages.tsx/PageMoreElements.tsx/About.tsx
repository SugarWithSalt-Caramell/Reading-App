import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

// ÄNDERE DEN NAMEN DER FUNKTION JE NACH DATEI (z.B. DownloadQueueScreen, SettingsScreen...)
export default function UniversalScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        {/* ÄNDERE HIER DEN TITEL */}
        <Text style={styles.title}>Hier Titel einfügen</Text> 
      </View>
      <View style={styles.content}>
        <Text style={{color: '#666'}}>Not implemented yet</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#222' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 20 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});