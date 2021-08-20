import { SpAssets } from '@starport/vue'

import margin from '../utils/marginDecorator'
// import useBalances from '../utils/useBalances'

export default {
	title: 'Example/SpAssets',
	component: SpAssets,
	decorators: [margin],
	argTypes: {
		address: {
			type: 'text'
		}
	}
}

const Template = (args) => ({
	components: { SpAssets },
	setup() {
		return { args }
	},
	template: `<SpAssets v-bind="args" />`
})

// not reactive!
// const { balances } = useBalances()

export const BalancesFixture = Template.bind({})
BalancesFixture.args = {
	balances: [
		{ denom: 'stake', amount: 100000 },
		{ denom: 'token', amount: 200000 }
	]
}
