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
      type: Enums.INPUT_TYPES.SELECT,
      value: '2',
      label: 'offset-x',
      options: ['0', '1', '2', '4', '8', '16']
    },
    {
      id: 'offset-y',
      type: Enums.INPUT_TYPES.SELECT,
      value: '8',
      label: 'offset-y',
      options: ['0', '1', '2', '4', '8', '16']
    },
    {
      id: 'blur-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '8',
      label: 'blur-radius',
      options: ['1', '2', '4', '8', '16', '32']
    },
    {
      id: 'spread-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '2',
      label: 'spread-radius',
      options: ['1', '2', '4', '8', '16', '32']
    },
    {
      id: 'color',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: 'color'
    }
  ],
  method: values => {
    return {
      'box-shadow': `${values['offset-x']}px ${values['offset-y']}px ${values['blur-radius']}px ${values['spread-radius']}px ${values['color']}`
    }
  }
}
