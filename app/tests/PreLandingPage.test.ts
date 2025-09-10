import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import App from '../app.vue'

describe('PreLandingPage', () => {
    it('should render NuxtWelcome component', () => {
        const wrapper = mount(App)
        expect(wrapper.findComponent({name: 'NuxtWelcome'}).exists()).toBe(true)
    })

    it('should render NuxtRouteAnnouncer', () => {
        const wrapper = mount(App)
        expect(wrapper.findComponent({name: 'NuxtRouteAnnouncer'}).exists()).toBe(true)
    })
})
