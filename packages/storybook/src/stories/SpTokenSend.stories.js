// TODO: add docs with needed list of vuex state modules

import { SpTokenSend } from '@starport/vue'
import margin from '../utils/marginDecorator'
import useWallet from '../utils/useWallet'

import store from '../store'

export default {
	title: 'Example/SpTokenSend',
	component: SpTokenSend,
	decorators: [() => ({ template: '<div style="width: 842px"><h1>Need auth</h1><br/><story/></div>' }), margin],
	argTypes: {
		address: {
			type: 'text'
		}
	}
}

const Template = (args) => ({
	components: { SpTokenSend },
	setup() {
		// const { address } = useWallet()

		return { args }
	},
	template: `<SpTokenSend v-bind="args" />`
})

const { address } = useWallet()

export const WithAddressProp = Template.bind({})
console.log({ address })
WithAddressProp.args = {
	address: address.value
}
