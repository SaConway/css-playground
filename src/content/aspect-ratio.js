// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'aspect-ratio',
  componentName: 'AspectRatio',
  syntax: 'width / height',
  inputs: [
    {
      id: 'width',
      type: Enums.INPUT_TYPES.SELECT,
      value: '16',
      label: 'width',
      options: ['1', '2', '3', '4', '9', '16']
    },
    {
      id: 'height',
      type: Enums.INPUT_TYPES.SELECT,
      value: '9',
      label: 'height',
      options: ['1', '2', '3', '4', '9', '16']
    }
  ],
  method: values => {
    return {
      'aspect-ratio': `${values['width']} / ${values['height']}`
    }
  }
}
