import { shallowMount } from '@vue/test-utils'
import GListElement from '../GListElement'

describe('GListElement', () => {
  it('renders slots correctly', () => {
    const wrapper = shallowMount(GListElement, {
      slots: {
        index: '1',
        title: 'title',
        content: 'content',
      },
    })
    
    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('title')
    expect(wrapper.text()).toContain('content')
  })
})