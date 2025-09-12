import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import PreLandingPage from '../pages/PreLandingPage.vue'

describe('LandingPage', () => {
    it('should render text content', () => {
        const wrapper = mount(PreLandingPage)
        const content = wrapper.get('[data-test="content"]')
        expect(wrapper.text()).toContain("Beware of scams")
    })
})
