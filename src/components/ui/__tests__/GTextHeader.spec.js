import { shallowMount } from '@vue/test-utils'
import GTextHeader from '../GTextHeader'

describe('GTextHeader', () => {
  it('initializes with correct slots', () => {
    const wrapper = shallowMount(GTextHeader, {
      slots: {
        title: 'title',
        content: 'content',
      },
    })
    
    expect(wrapper.text()).toContain('title')
    expect(wrapper.text()).toContain('content')
  })
})