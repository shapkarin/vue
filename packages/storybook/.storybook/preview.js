import { app } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import vueLib from '@starport/vue'
import store from '../src/store'
import router from '../src/router'

import '../../vue/src/styles/app.scss'
import '../src/scss/app.scss'

app.config.globalProperties._depsLoaded = true
app.use(store).use(router).use(vueLib)


async function beforeStory() {
	return store.dispatch('common/env/init')

	// force login
	// const signer = window.getOfflineSigner(rootGetters['common/env/chainId'])
	// await store.dispatch('common/wallet/connectWithKeplr', signer)
}

beforeStory().then(() => console.log('init story'))


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
	viewport: {
		viewports: INITIAL_VIEWPORTS
	}
}
