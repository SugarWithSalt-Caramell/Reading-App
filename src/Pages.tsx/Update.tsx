import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UpdatesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Updates</Text>
        <MaterialCommunityIcons name="refresh" size={24} color="#FFF" />
      </View>

      {/* Inhalt */}
      <View style={styles.content}>
        <Text style={styles.kaomoji}>ಠ_ಠ</Text>
        <Text style={styles.emptyText}>No recent updates</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  kaomoji: { color: '#FFF', fontSize: 60, marginBottom: 20, opacity: 0.7 },
  emptyText: { color: '#AAA', fontSize: 16 }
});