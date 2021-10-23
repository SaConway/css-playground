// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  name: 'box-shadow',
  componentName: 'BoxShadow',
  syntax: 'offset-x offset-y blur-radius spread-radius color',
  inputs: [
    {
      id: 'offset-x',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '10',
      label: 'offset-x'
    },
    {
      id: 'offset-y',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '5',
      label: 'offset-y'
    },
    {
      id: 'blur-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '5',
      label: 'blur-radius'
    },
    {
      id: 'spread-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '3',
      label: 'spread-radius'
    },
    {
      id: 'color',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: 'color'
    }
  ],
  method: values => {
    return `${values['offset-x']}px ${values['offset-y']}px ${values['blur-radius']}px ${values['spread-radius']}px ${values['color']}`
  }
}
