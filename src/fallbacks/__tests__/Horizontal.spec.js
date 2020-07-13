import { shallowMount } from '@vue/test-utils'
import Horizontal from '../Horizontal'
import TurnIcon from '@/assets/common/TurnIcon.vue'

describe('Horizontal', () => {
  const wrapper = shallowMount(Horizontal)

  it('contains horizontal component svg', () => {
    expect(wrapper.findComponent(TurnIcon)).toBeTruthy()
  })
})

