import { SpBlocksTable } from '@starport/vue'

import vuePropsToKnobs from 'vue-props-to-knobs'
import { boolean, number, text, array, object, select } from '@storybook/addon-knobs'

const propsToKnobs = vuePropsToKnobs({ boolean, number, text, array, object, select })

export default {
	title: 'Example/SpBlocksTable',
	component: SpBlocksTable
}

export const exampleWithKnobs = () => ({
	components: { SpBlocksTable },
	props: propsToKnobs(SpBlocksTable),
	template: `<SpBlocksTable v-bind="$props" />`
})
