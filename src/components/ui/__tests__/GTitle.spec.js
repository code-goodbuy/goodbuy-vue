import { shallowMount } from '@vue/test-utils'
import GTitle from '../GTitle'

describe('GTitle', () => {
  it('initializes with correct slots', () => {
    const wrapper = shallowMount(GTitle, {
      slots: {
        title: 'title',
      },
    })
    
    expect(wrapper.text()).toContain('title')
  })
})