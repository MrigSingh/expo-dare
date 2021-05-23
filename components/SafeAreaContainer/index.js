import React from 'react'
import { StatusBar, View } from 'react-native'

function SafeAreaContainer({children}) {
  return (
    <View>
      <StatusBar barStyle="dark" />
      {children}
    </View>
  )
}

export default SafeAreaContainer
