import { View, Text } from 'react-native'
import { globalStyles } from '../styles'

interface DisplayProps {
  displayValue: string,
}

export default function Display({displayValue}: DisplayProps) {
  return (
    <View style={globalStyles.display}>
      <Text
        style={[globalStyles.textColor, globalStyles.displayText]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
          {displayValue}
      </Text>
    </View>
  )
}
