// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'flex',
  componentName: 'Flex',
  inputs: [
    {
      id: 'flex-direction',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'row',
      label: 'flex-direction',
      options: ['row', 'column']
    },
    {
      id: 'justify-content',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'space-between',
      label: 'justify-content',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
    },
    {
      id: 'align-items',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'center',
      label: 'align-items',
      options: ['flex-start', 'flex-end', 'center', 'stretch']
    },
    {
      id: 'gap',
      type: Enums.INPUT_TYPES.SELECT,
      value: '10',
      label: 'gap',
      options: ['0', '5', '10', '15']
    }
  ],
  method: values => {
    return {
      'flex-direction': `${values['flex-direction']}`,
      'justify-content': `${values['justify-content']}`,
      'align-items': `${values['align-items']}`,
      gap: `${values['gap']}px`
    }
  }
}
