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
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
    }
  ],
  method: values => {
    return `${values['justify-content']}`
  }
}
