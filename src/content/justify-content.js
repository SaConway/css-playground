// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'justify-content',
  componentName: 'JustifyContent',
  inputs: [
    {
      id: 'justify-content',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'space-between',
      // label: 'justify-content',
      options: ['start', 'end', 'flex-start', 'flex-end', 'center', 'left', 'space-between', 'space-around', 'space-evenly', 'stretch']
    }
  ],
  method: values => {
    return `${values['justify-content']}`
  }
}
