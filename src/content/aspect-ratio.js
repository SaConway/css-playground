// UTILS
import Enums from '@/utils/enums'

export default {
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
}
