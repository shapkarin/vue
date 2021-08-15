import SpInput from '../../../vue/src/components/SpInput'
import margin from './marginDecorator'

export default {
	title: 'Example/SpInput',
	component: SpInput,
	decorators: [margin, () => ({ template: '<div style="width: 42em;"><story/></div>' })],
	argTypes: {
		disabled: {
			description: 'Disable input.',
			type: 'boolean',
			defaultValue: false
		},
		placeholder: {
			description: 'Placeholder',
			type: 'string',
			defaultValue: 'placeholder'
		},
		blur: { action: 'blur', defaultValue: null },
		focus: { action: 'focus', defaultValue: null }
	},
	parameters: {
		actions: {
			handles: ['blur', 'click .btn']
		}
	}
}

const Template = (args) => ({
	components: { SpInput },
	setup() {
		return { args }
	},
	template: `<SpInput v-bind="args" /><style>.some-class { background: 'red' }<style>`
})

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
	large: true
}

export const WilLabel = Template.bind({})
WilLabel.args = {
	label: 'Example'
}

export const BorderRadius = Template.bind({})
BorderRadius.args = {
	radius: '2em'
}

export const Group = (args) => ({
	components: { SpInput },
	description: 'Some description',
	setup() {
		return { args }
	},
	template: `<div class="sp-form-group"><SpInput v-bind="args" /><SpInput v-bind="args" /><SpInput v-bind="args" /></div>`
})

export const AddClass = (args) => ({
	components: { SpInput },
	description: 'Some description',
	setup() {
		return { args }
	},
	template: `<pre>
  .example-class-border-gold {
    border-color: gold;
  }
  .example-class-color-greeb {
    color: green;
  }</pre>
	<SpInput v-bind="args" />`
})
AddClass.args = {
	class: 'example-class-border-gold example-class-color-greeb'
}

export const Blur = Template.bind({})
Blur.args = {
	blur: () => alert('blur')
}

export const Focus = Template.bind({})
Focus.args = {
	focus: () => {
		alert('blur')
		return
	}
}
export const AutoFocus = Template.bind({})
AutoFocus.args = {
	autoFocus: true
}
export const Error = Template.bind({})
Error.args = {
	error: true
}
