import store from '../store'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default function () {
	const s = useStore()

	console.log({ s })

	const chainName = computed(() => store.getters['common/env/chainName'])
	const apiTendermint = computed(() => store.getters['common/env/apiTendermint'])
	const apiCosmos = computed(() => store.getters['common/env/apiCosmos'])
	const apiWS = computed(() => store.getters['common/env/apiWS'])

	return { chainName, apiTendermint, apiCosmos, apiWS }
}
