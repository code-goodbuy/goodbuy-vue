import { shallowMount } from '@vue/test-utils'
import OldDevice from '../OldDevice'

describe('OldDevice', () => {
  const wrapper = shallowMount(OldDevice)

  it('contains horizontal component svg', () => {
    expect(wrapper).toBeTruthy()
  })
})

