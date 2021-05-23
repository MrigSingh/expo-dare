import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import SafeAreaContainer from './components/SafeAreaContainer';
import VideoCard from './components/VideoCard';
import { SPACING_FOR_CARD_INSET, CARD_HEIGHT } from './constants'
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';


export default function App() {
  return (
    <SafeAreaContainer style={styles.appContainer}>
      <ScrollView
        decelerationRate={0.6}
        alwaysBounceVertical
        snapToInterval={CARD_HEIGHT}
        snapToAlignment='center'
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
        style={styles.videoContainer}
      >
        <VideoCard src={image1} />
        <VideoCard src={image2} />
        <VideoCard src={image1} />
        <VideoCard src={image2} />
        <VideoCard src={image1} />
      </ScrollView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    backgroundColor: '#eee'
  }
});
