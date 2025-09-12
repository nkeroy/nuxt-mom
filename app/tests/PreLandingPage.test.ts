import {describe, it, expect} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import PreLandingPage from '../pages/PreLandingPage.vue'

describe('PreLandingPage', () => {
    it('should render text content', () => {
        const wrapper = mount(PreLandingPage)
        const content = wrapper.get('[data-test="content"]')
        expect(wrapper.text()).toContain("Beware of scams")
    })

    it('should show button to change language to English', () => {
        const wrapper = mount(PreLandingPage)
        const button = wrapper.get('[data-test="english-button"]')
        expect(button.text()).toBe('English')
    })

    it ('should emit event and redirect to landing page if English button is clicked', () => {
        const wrapper = mount(PreLandingPage)
        const button = wrapper.get('[data-test="english-button"]')
        button.trigger('click')

        expect(wrapper.emitted()).toHaveProperty('set-language')

        const setLanguageEvent = wrapper.emitted('set-language')

        expect(setLanguageEvent).toHaveLength(1);
        expect(setLanguageEvent[0]).toEqual(['en']);
    })
})
