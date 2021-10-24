// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'border-radius',
  componentName: 'BorderRadius',
  syntax: '',
  inputs: [
    {
      id: 'border-top-left-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '70',
      label: 'border-top-left-radius'
    },
    {
      id: 'border-top-right-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '150',
      label: 'border-top-right-radius'
    },
    {
      id: 'border-bottom-right-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '20',
      label: 'border-bottom-right-radius'
    },
    {
      id: 'border-bottom-left-radius',
      type: Enums.INPUT_TYPES.NUMBER,
      value: '0',
      label: 'border-bottom-left-radius'
    }
  ],
  method: values => {
    return `${values['border-top-left-radius']}px ${values['border-top-right-radius']}px ${values['border-bottom-right-radius']}px ${values['border-bottom-left-radius']}px`
  }
}
