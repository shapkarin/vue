<template>
	<input
		:class="{ 'sp-input': true, 'sp-input-large': large, 'sp-input-error': error, ...classNames }"
		:value="value || modelValue"
		@input="onInput"
		:name="name"
		:placeholder="placeholder"
		:disabled="disabled"
		@focus="focus"
		@blur="blur"
		:autofocus="autoFocus"
	/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Input component.
 */
export default defineComponent({
	name: 'SpInput',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		name: {
			type: String,
		},
		placeholder: {
			type: String,
		},
		value: {
			type: String,
		},
		disabled: {
			type: Boolean,
		},
		large: {
			type: Boolean,
		},
		focus: {
			type: Function,
			default: null,
		},
		blur: {
			type: Function,
			default: null,
		},
		class: {
			type: String,
			default: '',
		},
		autoFocus: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	computed: {
		onInput(event) {
			if (this.value) return null
			return this.$emit('update:modelValue', event.value)
		},
		classNames() {
			return this.class.split(' ').reduce((acc, value) => ({ ...acc, [value]: true }), {})
		},
	},
})
</script>
