import { App as Application } from 'vue'
import SpInput from './SpInput.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpInput)
	},
}

export default SpInput
