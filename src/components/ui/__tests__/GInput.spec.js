import { createLocalVue, shallowMount } from '@vue/test-utils'
import GInput from '../GInput'
import VueScreenSize from 'vue-screen-size'
import VueInputAutowidth from 'vue-input-autowidth'

const localVue = createLocalVue()
localVue.use(VueInputAutowidth)

describe('GInput', () => {
  it('emits event on input', () => {
    const wrapper = shallowMount(GInput, {
      propsData: {
        placeholder: 'placeholder',
      },
      VueScreenSize,
      localVue,
    })
    wrapper.find('input').setValue('test-input')
    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('renders correct placeholder', () => {
    const wrapper = shallowMount(GInput, {
      propsData: {
        placeholder: 'placeholder',
      },
      VueScreenSize,
      localVue,
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('placeholder')
  })

  it('renders correct value', () => {
    const wrapper = shallowMount(GInput, {
      propsData: {
        placeholder: 'placeholder',
        value: 'value',
      },
      VueScreenSize,
      localVue,
    })
    expect(wrapper.find('input').element.value).toBe('value')
  })
})