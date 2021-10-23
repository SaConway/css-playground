// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  name: 'outline',
  componentName: 'Outline',
  syntax: 'outline-color outline-style outline-width',
  inputs: [
    {
      id: 'outline-color',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: 'outline-color'
    },
    {
      id: 'outline-style',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'dashed',
      label: 'outline-style',
      options: ['dotted', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
    },
    {
      id: 'outline-width',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '5',
      label: 'outline-width'
    }
  ],
  method: values => {
    return `${values['outline-color']} ${values['outline-style']} ${values['outline-width']}px`
  }
}
