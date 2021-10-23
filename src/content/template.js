// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

export default {
  name: '',
  componentName: '',
  syntax: '',
  inputs: [
    {
      id: '',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '',
      label: ''
    },
    {
      id: '',
      type: Enums.INPUT_TYPES.SELECT,
      value: '',
      label: '',
      options: []
    },
    {
      id: '',
      type: Enums.INPUT_TYPES.COLOR,
      value: Colors.AMBER.value,
      label: ''
    }
  ],
  method: values => {
    return `${values['input-id']}`
  }
}
