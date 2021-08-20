import { computed, ref, watch } from 'vue'

import store from '../store'
import useWallet from './useWallet'

export default async function () {
	const { address } = useWallet()
	const loggedIn = computed(() => store.getters['common/wallet/loggedIn'])
	// const balances = ref()
	const balances = computed(() => store.getters['cosmos.bank.v1beta1/getAllBalances'])
	const fetchBalances = (address) => store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', { params: { address } })

	watch(
		address,
		async (newVale) => {
			if (newVale) {
				await fetchBalances(newVale)
			}
		},
		{ immediate: true }
	)

	return { balances }
}
