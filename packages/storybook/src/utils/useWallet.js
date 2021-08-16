import store from '../store'
import { watch, ref } from 'vue'

export default function () {
	const address = ref('')
	const loggedIn = store.getters['common/wallet/loggedIn']

	watch(loggedIn, () => {
		address.value = store.getters['common/wallet/address']
	})

	return { address }
}
