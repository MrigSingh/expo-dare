import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { CARD_WIDTH, CARD_HEIGHT } from '../../constants'

function Video({src}) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={src} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  }
})

export default Video
