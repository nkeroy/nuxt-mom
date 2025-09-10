import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import PreLandingPage from '../pages/PreLandingPage.vue'

describe('PreLandingPage', () => {
    it('should render text content', () => {
        const wrapper = mount(PreLandingPage)
        expect(wrapper.text()).toContain("Beware of scams")
    })
})
