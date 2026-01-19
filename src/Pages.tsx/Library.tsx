import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';

export default function LibraryScreen() {
  // Suche
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  // Setup (Erstes Mal?)
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [storagePath, setStoragePath] = useState('');


  // Wird EINMAL beim Start ausgeführt
  useEffect(() => {
    checkStorageSetup();
  }, []);

  const checkStorageSetup = async () => {
    try {
      const savedPath = await AsyncStorage.getItem('manga_storage_path');
      if (savedPath) {
        setStoragePath(savedPath);
        setIsFirstTime(false); // Setup ist fertig!
        console.log("Gespeicherter Pfad:", savedPath);
      } else {
        setIsFirstTime(true); // Wir brauchen noch ein Setup
        handleSelectFolder(); // Direkt Ordner auswählen lassen
      }
    } catch (e) {
      console.error("Fehler beim Laden:", e);
    }
  };

  
  const handleSelectFolder = async () => {
    try {
      const result = await DocumentPicker.pickDirectory();
      
      if (result) {
        const path = result.uri;
        setStoragePath(path);
        await AsyncStorage.setItem('manga_storage_path', path); // Pfad speichern
        setIsFirstTime(false); // Setup beenden
        Alert.alert("Success", "Storage folder selected:\n" + path);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled");
      } else {
        Alert.alert("Error", "Could not pick folder");
        console.error(err);
      }
    }
  };


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {isFirstTime ? (
          <Text style={styles.headerTitle}>Library</Text>
        ) : isSearchActive ? (
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => { setIsSearchActive(false); setSearchText(''); }}><MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" style={{marginRight: 10}} /></TouchableOpacity>
            <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#888" autoFocus={true} value={searchText} onChangeText={setSearchText}/>
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')}><MaterialCommunityIcons name="close" size={24} color="#FFF" /></TouchableOpacity>
            )}
          </View>
        ) : (
          <>
            <Text style={styles.headerTitle}>Library</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.icon} onPress={() => setIsSearchActive(true)}><MaterialCommunityIcons name="magnify" size={24} color="#FFF" /></TouchableOpacity>
              <TouchableOpacity style={styles.icon} onPress={() => console.log("Filter")}><MaterialCommunityIcons name="filter-variant" size={24} color="#FFF" /></TouchableOpacity>
              <TouchableOpacity style={styles.icon} onPress={() => console.log("Menü")}><MaterialCommunityIcons name="dots-vertical" size={24} color="#FFF" /></TouchableOpacity>
            </View>
          </>
        )}
      </View>


      <View style={styles.content}>
        
        {isFirstTime ? (
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons name="folder-outline" size={60} color="#555" style={{marginBottom: 20}} />
            <Text style={styles.emptyText}>Storage not configured</Text>
            <TouchableOpacity style={styles.setupButton} onPress={handleSelectFolder}>
              <Text style={styles.setupButtonText}>Select Folder</Text>
            </TouchableOpacity>
          </View>

        ) : (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.kaomoji}>(・Д・)。</Text>
            
            <Text style={styles.emptyText}>
              {isSearchActive ? `Searching: "${searchText}" (Nothing found)` : "Your library is empty"}
            </Text>
            
            {!isSearchActive && (
              <TouchableOpacity style={styles.guideButton}>
                <MaterialCommunityIcons name="help-circle-outline" size={20} color="#888" />
                <Text style={styles.guideText}>Getting started guide</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

    </SafeAreaView>
  );
}

// 4. STYLES
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 60 },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  icon: { marginLeft: 20 },
  searchContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  searchInput: { flex: 1, color: '#FFF', fontSize: 18, marginLeft: 10 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  kaomoji: { color: '#FFF', fontSize: 60, marginBottom: 20, opacity: 0.7 },
  emptyText: { color: '#AAA', fontSize: 16, marginBottom: 40 },
  guideButton: { flexDirection: 'row', alignItems: 'center' },
  guideText: { color: '#888', marginLeft: 8, fontSize: 14 },
  
  setupButton: { backgroundColor: '#2979FF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
  setupButtonText: { color: '#FFF', fontWeight: 'bold' }
});