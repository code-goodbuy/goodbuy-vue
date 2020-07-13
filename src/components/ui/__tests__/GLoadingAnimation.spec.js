import { shallowMount } from '@vue/test-utils'
import GLoadingAnimation from '../GLoadingAnimation'
import GLogoBlack from '@/assets/logo/GLogoBlack.vue'
import GLogoWhite from '@/assets/logo/GLogoWhite.vue'

describe('GLoadingAnimation', () => {
  it('renders correct slots', () => {
    const wrapper = shallowMount(GLoadingAnimation, {
      slots: {
        description: 'description',
      },
    })
    
    expect(wrapper.text()).toContain('description')
  })

  it('contains black logo on default state', () => {
    const wrapper = shallowMount(GLoadingAnimation)
    
    expect(wrapper.findComponent(GLogoBlack)).toBeTruthy()
  })

  it('contains white logo on prop', () => {
    const wrapper = shallowMount(GLoadingAnimation, {
      propsData: {
        whiteLogo: true,
      },
    })
    
    expect(wrapper.findComponent(GLogoWhite)).toBeTruthy()
  })
})