import { shallowMount } from '@vue/test-utils'
import PageNotFound from '../PageNotFound'

describe('PageNotFound', () => {
  const wrapper = shallowMount(PageNotFound)

  it('contains PageNotFound component svg', () => {
    expect(wrapper.findComponent(PageNotFound)).toBeTruthy()
  })
})

