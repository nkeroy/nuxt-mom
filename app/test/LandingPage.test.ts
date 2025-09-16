import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import LandingPage from "../pages/enquiry/LandingPage.vue";

describe('LandingPage', () => {
    it('should render text content', () => {
        const wrapper = mount(LandingPage)
        const content = wrapper.get('[data-test="content"]')
        expect(content.text()).toEqual("This is the landing page in English")

    })
})
