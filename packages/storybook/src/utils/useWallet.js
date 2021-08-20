import store from '../store'
import { watch, ref, computed } from 'vue'

export default function () {
	const address = ref('')
	const client = computed(() => store.getters['common/env/client'])

	watch(
		client,
		async (newAddress) => {
			if (newAddress) {
				address.value = store.getters['common/wallet/address']
			}
		},
		{ immediate: true }
	)
	return { address }
}
