// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  name: 'text-decoration',
  componentName: 'TextDecoration',
  syntax: 'text-decoration-line text-decoration-style text-decoration-color text-decoration-thickness',
  inputs: [
    {
      id: 'text-decoration-line',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'underline',
      label: 'text-decoration-line',
      options: ['underline', 'overline', 'line-through']
    },
    {
      id: 'text-decoration-style',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'wavy',
      label: 'text-decoration-style',
      options: ['solid', 'double', 'dotted', 'dashed', 'wavy']
    },
    {
      id: 'text-decoration-color',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: 'text-decoration-color'
    },
    {
      id: 'text-decoration-thickness',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'thick',
      label: 'text-decoration-thickness',
      options: ['thin', 'medium', 'thick']
    }
  ],
  method: values => {
    return {
      'text-decoration': `${values['text-decoration-line']} ${values['text-decoration-style']} ${values['text-decoration-color']} ${Enums.THICKNESS[values['text-decoration-thickness']]}`
    }
  }
}
