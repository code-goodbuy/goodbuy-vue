import { shallowMount } from '@vue/test-utils'
import GButton from '../GButton'

describe('GButton', () => {
  it('renders title slot', () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        title: 'title',
      },
    })
    expect(wrapper.text()).toContain('title')
  })

  it('emits event on click', () => {
    const wrapper = shallowMount(GButton)
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('renders correct feedback buttons on feedback prop', () => {
    const wrapper = shallowMount(GButton, {
      propsData: {
        feedback: true,
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(3)
    expect(wrapper.text()).toContain('+')
    expect(wrapper.text()).toContain('-')
  })

  it('has black class on main button on black prop', () => {
    const wrapper = shallowMount(GButton, {
      propsData: {
        black: true,
      },
    })
    expect(wrapper.find('button').classes()).toContain('black')
  })
})