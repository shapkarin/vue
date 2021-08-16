import { SpAmountSelect } from '@starport/vue'
import margin from '../utils/marginDecorator'

export default {
	title: 'Example/SpAmountSelect',
	component: SpAmountSelect,
	decorators: [margin],
	argTypes: {
		address: {
			type: 'text'
		}
	}
}

const Template = (args) => ({
	components: { SpAmountSelect },
	setup() {
		return { args }
	},
	template: `<SpAmountSelect v-bind="args" />`
})

export const Primary = Template.bind({})
Primary.args = {
	address: 'cosmos1l8f7dcdmvvrpsqw44xz48re95gve88sdk2tyls'
}
