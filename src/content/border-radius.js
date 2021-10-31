// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'border-radius',
  componentName: 'BorderRadius',
  syntax: '',
  inputs: [
    {
      id: 'border-top-left-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '15',
      label: 'border-top-left-radius',
      options: ['5', '10', '15', '30', '40', '50']
    },
    {
      id: 'border-top-right-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '50',
      label: 'border-top-right-radius',
      options: ['5', '10', '15', '30', '40', '50']
    },
    {
      id: 'border-bottom-right-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '30',
      label: 'border-bottom-right-radius',
      options: ['5', '10', '15', '30', '40', '50']
    },
    {
      id: 'border-bottom-left-radius',
      type: Enums.INPUT_TYPES.SELECT,
      value: '5',
      label: 'border-bottom-left-radius',
      options: ['5', '10', '15', '30', '40', '50']
    }
  ],
  method: values => {
    return `${values['border-top-left-radius']}px ${values['border-top-right-radius']}px ${values['border-bottom-right-radius']}px ${values['border-bottom-left-radius']}px`
  }
}
