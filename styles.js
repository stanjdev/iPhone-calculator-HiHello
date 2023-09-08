import { StyleSheet, Dimensions } from "react-native"

const {width: SCREENWIDTH, height: SCREENHEIGHT} = Dimensions.get('screen')

const WHITE = '#fff'
const BLACK = '#000'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT * 0.24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 74,
    fontWeight: '200',
  },
  textColor: {
    color: WHITE,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  calcButton: {
    backgroundColor: 'blue',
    height: SCREENWIDTH / 5,
    width: SCREENWIDTH / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  zeroButton: {
    width: SCREENWIDTH * 0.42,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  selectedOperatorBg: {
    backgroundColor: WHITE,
  },
})
