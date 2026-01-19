import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MangaDetailScreen({ route, navigation }: any) {
  // Wir holen uns die Daten (Titel, Bild etc.), die von der Library übergeben wurden
  const { book } = route.params;

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      
      {/* HEADER (Zurück Button) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{book.title}</Text>
        <TouchableOpacity>
           <MaterialCommunityIcons name="dots-vertical" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- INFO BEREICH (Cover + Text) --- */}
        <View style={styles.topSection}>
          {/* Das Cover Bild */}
          <Image 
            source={book.image ? { uri: book.image } : undefined} 
            style={styles.coverImage} 
            resizeMode="cover"
          />
          
          {/* Infos rechts daneben */}
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Author: Unknown</Text>
            <Text style={styles.status}>Ongoing • Manganato</Text>
          </View>
        </View>

        {/* --- BUTTONS LEISTE (Herz, Tracking etc.) --- */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="heart" size={24} color="#FF5555" />
            <Text style={styles.actionText}>In library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="clock-outline" size={24} color="#FFFFFF" />
            <Text style={styles.actionText}>0 days</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="sync" size={24} color="#FFFFFF" />
            <Text style={styles.actionText}>Tracking</Text>
          </TouchableOpacity>
        </View>

        {/* --- BESCHREIBUNG --- */}
        <Text style={styles.description}>
          {book.description || "Keine Beschreibung verfügbar."}
        </Text>

        {/* --- KAPITEL LISTE (Dummy) --- */}
        <View style={styles.chapterSection}>
          <Text style={styles.chapterHeader}>42 chapters</Text>
          
          {/* Beispiel Kapitel 1 */}
          <View style={styles.chapterItem}>
            <View>
              <Text style={styles.chapterTitle}>Chapter 42</Text>
              <Text style={styles.chapterDate}>2025-03-22 • Official</Text>
            </View>
            <MaterialCommunityIcons name="download-outline" size={24} color="#888" />
          </View>
           
           {/* Beispiel Kapitel 2 */}
          <View style={styles.chapterItem}>
            <View>
              <Text style={styles.chapterTitle}>Chapter 41</Text>
              <Text style={styles.chapterDate}>2025-03-04 • Official</Text>
            </View>
            <MaterialCommunityIcons name="download-outline" size={24} color="#888" />
          </View>

        </View>
      </ScrollView>

      {/* RUNDER BUTTON UNTEN (Resume) */}
      <TouchableOpacity style={styles.resumeButton}>
        <MaterialCommunityIcons name="play" size={24} color="#000" />
        <Text style={styles.resumeText}>Resume</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 15, flex: 1 },
  scrollContent: { paddingBottom: 80 },
  
  topSection: { flexDirection: 'row', padding: 15 },
  coverImage: { width: 100, height: 150, borderRadius: 5, backgroundColor: '#333' },
  infoContainer: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  author: { color: '#AAA', fontSize: 14, marginBottom: 5 },
  status: { color: '#AAA', fontSize: 12 },

  actionRow: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#222' },
  actionButton: { alignItems: 'center' },
  actionText: { color: '#AAA', fontSize: 12, marginTop: 5 },

  description: { color: '#DDD', padding: 15, lineHeight: 22 },

  chapterSection: { padding: 15 },
  chapterHeader: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  chapterItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#222' },
  chapterTitle: { color: '#FFF', fontSize: 15 },
  chapterDate: { color: '#666', fontSize: 12, marginTop: 4 },

  resumeButton: { 
    position: 'absolute', bottom: 20, right: 20, 
    flexDirection: 'row', alignItems: 'center', 
    backgroundColor: '#FFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 30, elevation: 5 
  },
  resumeText: { color: '#000', fontWeight: 'bold', marginLeft: 5 }
});