// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  ASPECT_RATIO: {
    name: 'aspect-ratio',
    componentName: 'AspectRatio',
    syntax: 'width / height',
    inputs: [
      {
        id: 'width',
        type: Enums.INPUT_TYPES.NUMBER,
        value: '1',
        label: 'width'
      },
      {
        id: 'height',
        type: Enums.INPUT_TYPES.NUMBER,
        value: '1',
        label: 'height'
      }
    ],
    method: values => {
      return `${values['width']} / ${values['height']}`
    }
  },
  OUTLINE: {
    name: 'outline',
    componentName: 'Outline',
    syntax: 'outline-color outline-style outline-width',
    inputs: [
      {
        id: 'outline-color',
        type: Enums.INPUT_TYPES.COLOR,
        value: Colors.RED.value,
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
  },
  TEXT_DECORATION: {
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
        type: Enums.INPUT_TYPES.NUMBER,
        value: '3',
        label: 'text-decoration-thickness'
      }
    ],
    method: values => {
      return `${values['text-decoration-line']} ${values['text-decoration-style']} ${values['text-decoration-color']} ${values['text-decoration-thickness']}px`
    }
  }
}
