// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'grid',
  componentName: 'Grid',
  inputs: [
    {
      id: 'justify-items',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'start',
      label: 'justify-items',
      options: ['start', 'end', 'center', 'stretch']
    },
    {
      id: 'align-items',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'center',
      label: 'align-items',
      options: ['start', 'end', 'center', 'baseline']
    },
    {
      id: 'justify-content',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'start',
      label: 'justify-content',
      options: ['center', 'stretch', 'space-between', 'space-around', 'space-evenly']
    },
    {
      id: 'align-content',
      type: Enums.INPUT_TYPES.SELECT,
      value: 'center',
      label: 'align-content',
      options: ['center', 'space-between', 'space-around', 'space-evenly']
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
      'justify-items': `${values['justify-items']}`,
      'align-items': `${values['align-items']}`,
      'justify-content': `${values['justify-content']}`,
      'align-content': `${values['align-content']}`,
      gap: `${values['gap']}px`
    }
  }
}
