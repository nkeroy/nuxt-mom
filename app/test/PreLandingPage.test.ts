import {vi, describe, it, expect} from 'vitest'
import PreLandingPage from '../pages/PreLandingPage.vue'
import {mountSuspended} from "@nuxt/test-utils/runtime";
import {RouterLink} from "#vue-router";
import {NuxtLink} from "#components";

describe('PreLandingPage', () => {
    it('should render text content', async () => {
        const wrapper = await mountSuspended(PreLandingPage)
        const content = wrapper.get('[data-test="content"]')
        expect(wrapper.text()).toContain("Beware of scams")
    })

    it('should show button for change language to English and have correct target link', async () => {
        const wrapper = await mountSuspended(PreLandingPage, {

        })
        const link = wrapper.get('[data-test="english-button"]')
        // Checking nuxt link text rendered
        expect(link.text()).toBe('English')
        const component = link.getComponent(NuxtLink)
        // checking link target is correct?
        expect(component.props().to).toBe('/enquiry/landingpage')
    })

    it('should show button for change language to Chinese and have correct target link', async () => {
        const wrapper = await mountSuspended(PreLandingPage, {

        })
        const link = wrapper.get('[data-test="chinese-button"]')

        // Checking nuxt link text rendered
        expect(link.text()).toBe('Chinese')
        const component = link.getComponent(NuxtLink)
        // checking link target is correct?
        expect(component.props().to).toBe('/enquiry/landingpage')
    })
})