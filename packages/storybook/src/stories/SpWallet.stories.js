import { SpWallet } from '@starport/vue'
import margin from './marginDecorator'

export default {
	title: 'Example/SpWallet',
	component: SpWallet,
	decorators: [margin],
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
