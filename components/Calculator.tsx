import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import Display from './Display'
import CalcButton from './CalcButton'
import { symbols, operatorSymbols } from './symbols'
import { globalStyles } from '../styles'

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [leftValue, setLeftValue] = useState<string>('')
  const [rightValue, setRightValue] = useState<string>('')
  const [selectedOperator, setSelectedOperator] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [justEvaluated, setJustEvaluated] = useState<boolean>(false)

  const allClear = () => {
    setLeftValue('')
    setRightValue('')
    setSelectedOperator('')
    setAnswer('0')
    setJustEvaluated(false)
  }

  const calculateAnswer = () => {
    const evaluatedAnswer = eval(leftValue + selectedOperator + rightValue)
    setAnswer(evaluatedAnswer)
    setLeftValue(evaluatedAnswer)
    setRightValue('')
    setSelectedOperator('')
    setJustEvaluated(true)
  }

  const setOperator = (symbol: string) => {
    if (symbol === '÷') {
      setSelectedOperator('/')
    } else if (symbol === 'x') {
      setSelectedOperator('*')
    } else {
      setSelectedOperator(symbol)
    }
  }

  const buttonPress = (symbol: string) => {
    if (symbol === 'AC') {
      allClear()
    } else if (symbol === '+/-') {
      setDisplayValue((prevValue) => String(Number(prevValue) * -1))
    } else if (symbol === '%') {
      setDisplayValue((prevValue) => String(Number(prevValue) * 0.01))
    } else if (operatorSymbols.includes(symbol)) {
      if (rightValue) {
        calculateAnswer()
      } else {
        // store the left value, prepping it
        setLeftValue(displayValue)
      }
      setOperator(symbol)
    } else if (symbol === '=') {
      calculateAnswer()
    } else if (selectedOperator) {
      setRightValue((prevValue) => prevValue += symbol)
    } else {
      if (justEvaluated || displayValue === '0') {
        setDisplayValue('')
        setJustEvaluated(false)
      }
      setDisplayValue((prevValue) => prevValue += symbol)
    }
  }

  useEffect(() => {
    // if utility buttons are pressed after operator button is selected
    if (!rightValue) {
      setLeftValue(displayValue)
    } else if (leftValue && selectedOperator) {
      setRightValue(displayValue)
    }
  }, [displayValue])

  useEffect(() => {
    setDisplayValue(rightValue)
  }, [rightValue])

  useEffect(() => {
    setDisplayValue(answer)
  }, [answer])

  const buttons = symbols.map((symbol) => <CalcButton
                                            key={symbol}
                                            symbol={symbol}
                                            pressAction={() => buttonPress(symbol)}
                                            selectedOperator={selectedOperator}
                                          />)


  return (
    <View>
      <Display displayValue={displayValue} />
      <View style={globalStyles.buttonsContainer}>
        {buttons}
      </View>
    </View>
  )
}

