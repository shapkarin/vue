import { SpTokenSend } from '@starport/vue'
import margin from '../utils/marginDecorator'
import useWallet from '../utils/useWallet'

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
		return { args }
	},
	template: `<SpTokenSend v-bind="args" />`
})

export const Primary = Template.bind({})

const { address } = useWallet()
console.log({ address })

Primary.args = {
	address
}
