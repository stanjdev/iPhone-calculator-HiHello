import { TouchableOpacity, Text } from "react-native"
import { globalStyles } from "../styles"
import { orangeButtons, utilitySymbols } from "./symbols"

interface CalcButtonProps {
  symbol: string,
  pressAction: () => void,
  selectedOperator: string,
}

export default function CalcButton({symbol, pressAction, selectedOperator}: CalcButtonProps) {
  const selectedOp: string = selectedOperator === '/' ? '÷'
                              : selectedOperator === '*' ? 'x'
                              : selectedOperator
  const textColor: string = utilitySymbols.includes(symbol) ? '#000'
                            : selectedOp === symbol ? '#f58d2e'
                            : '#fff'
  const bgColor: string = utilitySymbols.includes(symbol) ? '#aeaeae'
                            : selectedOp === symbol ? '#fff'
                            : orangeButtons.includes(symbol) ? '#f58d2e'
                            : '#3a3a3a'
  return (
    <TouchableOpacity onPress={pressAction}
      style={[
        globalStyles.calcButton,
        {backgroundColor: bgColor},
        symbol === '0' ? globalStyles.zeroButton : null,
      ]}
    >
      <Text
        style={{ color: textColor, fontSize: 30 }}>
          {symbol}
      </Text>
    </TouchableOpacity>
  )
}

