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
        const link = wrapper.findComponent(NuxtLink)
        // Checking nuxt link text rendered
        expect(link.text()).toBe('English')
        // checking link target is correct
        expect(link.props().to).toBe('/enquiry/landingpage')


    })
})