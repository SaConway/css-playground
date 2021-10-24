// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  name: 'border',
  componentName: 'Border',
  syntax: 'border-width border-style border-color',
  inputs: [
    {
      id: 'border-width',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '5',
      label: 'border-width'
    },
    {
      id: 'border-style',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'solid',
      label: 'border-style',
      options: ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
    },
    {
      id: 'border-color',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: 'border-color'
    }
  ],
  method: values => {
    return `${values['border-width']}px ${values['border-style']} ${values['border-color']}`
  }
}
