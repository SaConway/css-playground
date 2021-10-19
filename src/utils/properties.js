// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  ASPECT_RATIO: {
    name: 'aspect-ratio',
    path: 'aspect-ratio',
    componentName: 'AspectRatio',
    syntax: 'width / height',
    initialValue: '1',
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
    path: 'outline',
    componentName: 'Outline',
    syntax: 'outline-color outline-style outline-width',
    initialValue: `${Colors.RED.value} dashed 5px`,
    inputs: [
      {
        id: 'outline_color',
        type: Enums.INPUT_TYPES.COLOR,
        value: Colors.RED.value,
        label: 'outline-color'
      },
      {
        id: 'outline_style',
        type: Enums.INPUT_TYPES.SELECT,
        value: 'dashed',
        label: 'outline-style',
        options: ['dotted', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
      },
      {
        id: 'outline_width',
        type: Enums.INPUT_TYPES.NUMBER,
        value: '5',
        label: 'outline-width'
      }
    ],
    method: values => {
      return `${values['outline_color']} ${values['outline_style']} ${values['outline_width']}px`
    }
  },
  TEXT_DECORATION: {
    name: 'text-decoration',
    path: 'text-decoration',
    componentName: 'TextDecoration',
    syntax: 'text-decoration-line text-decoration-style text-decoration-color text-decoration-thickness',
    initialValue: `underline wavy ${Colors.AMBER.value} 5px`,
    inputs: [
      {
        id: 'text_decoration_line',
        type: Enums.INPUT_TYPES.SELECT,
        value: 'underline',
        label: 'text-decoration-line',
        options: ['underline', 'overline', 'line-through']
      },
      {
        id: 'text_decoration_style',
        type: Enums.INPUT_TYPES.SELECT,
        value: 'wavy',
        label: 'text-decoration-style',
        options: ['solid', 'double', 'dotted', 'dashed', 'wavy']
      },
      {
        id: 'text_decoration_color',
        type: Enums.INPUT_TYPES.COLOR,
        value: Colors.AMBER.value,
        label: 'text-decoration-color'
      },
      {
        id: 'text_decoration_thickness',
        type: Enums.INPUT_TYPES.NUMBER,
        value: '5',
        label: 'text-decoration-thickness'
      }
    ],
    method: values => {
      return `${values['text_decoration_line']} ${values['text_decoration_style']} ${values['text_decoration_color']} ${values['text_decoration_thickness']}px`
    }
  }
}
