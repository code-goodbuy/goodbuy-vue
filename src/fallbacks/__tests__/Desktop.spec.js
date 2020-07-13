import { shallowMount } from '@vue/test-utils'
import Desktop from '../Desktop'

describe('Desktop', () => {
  const wrapper = shallowMount(Desktop)

  it('links to instagram channel', () => {
    const a = wrapper.find('a')
    expect(a.text()).toBe('instagram')
    expect(a.attributes().href === 'https://www.instagram.com/goodbuy.official/').toBe(true)
  })
})

