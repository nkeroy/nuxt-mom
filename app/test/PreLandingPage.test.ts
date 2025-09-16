import {vi, describe, it, expect} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import PreLandingPage from '../pages/PreLandingPage.vue'
import {mountSuspended} from '@nuxt/test-utils/runtime'

describe('PreLandingPage', () => {
    it('should render text content', async () => {
        const wrapper = await mount(PreLandingPage)
        const content = wrapper.get('[data-test="content"]')
        expect(wrapper.text()).toContain("Beware of scams")
    })

    it('should show button to change language to English', async () => {
        const wrapper = await mountSuspended(PreLandingPage)
        const button = wrapper.get('[data-test="english-button"]')
        expect(button.text()).toBe('English')
    })

    it ('should emit event and redirect to landing page if English button is clicked', async () => {
        const mockedRoute = {
            path: '/pre-landing-page'
        }
        const mockRouter = {
            push: vi.fn()
        };

        const wrapper = await mountSuspended(PreLandingPage, {
            global: {
                mocks: {
                    $route: mockedRoute,
                    $router: mockRouter
                }
            }
        })
        expect(wrapper.findComponent({ name: 'NuxtLink' }).exists()).toBe(true);

        const button = wrapper.get('[data-test="english-button"]')
        button.trigger('click')
    })
})
