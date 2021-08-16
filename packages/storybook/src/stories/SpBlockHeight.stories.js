import { SpBlockHeight } from '@starport/vue'

import vuePropsToKnobs from 'vue-props-to-knobs'
import { boolean, number, text, array, object, select } from '@storybook/addon-knobs'

const propsToKnobs = vuePropsToKnobs({ boolean, number, text, array, object, select })

export default {
	title: 'Example/SpBlockHeight',
	component: SpBlockHeight
}

export const exampleWithKnobs = () => ({
	components: { SpBlockHeight },
	props: propsToKnobs(SpBlockHeight),
	template: `<SpBlockHeight v-bind="$props" />`
})
