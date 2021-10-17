// UTILS
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
        type: 'number',
        value: '1',
        label: 'width'
      },
      {
        id: 'height',
        type: 'number',
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
        type: 'color',
        value: Colors.RED.value,
        label: 'outline-color'
      },
      {
        id: 'outline_style',
        type: 'select',
        value: 'dashed',
        label: 'outline-style',
        options: ['dotted', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
      },
      {
        id: 'outline_width',
        type: 'number',
        value: '5',
        label: 'outline-width'
      }
    ],
    method: values => {
      return `${values['outline_color']} ${values['outline_style']} ${values['outline_width']}px`
    }
  }
}
