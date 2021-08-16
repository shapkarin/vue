import { SpWallet } from '@starport/vue'
import margin from '../utils/marginDecorator'

export default {
	title: 'Example/SpWallet',
	component: SpWallet,
	decorators: [margin, () => ({ themplate: '<div style="width: 242px"><story/></div>' })],
	argTypes: {
		address: {
			type: 'text'
		}
	}
}

const Template = (args) => ({
	components: { SpWallet },
	setup() {
		return { args }
	},
	template: `<SpWallet v-bind="args" />`
})

export const Primary = Template.bind({})
