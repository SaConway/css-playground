<template>
  <main class="property_layout">
    <!-- TITLE -->
    <h1 class="property_title">{{ title }}</h1>

    <!-- OUTPUT CODE -->
    <div>
      <pre class="property_output_code">{{ declaration }}</pre>

      <button :class="['copy_btn', showCopySuccess ? 'success' : '']" @click="copyToClipboard">Copy to clipboard</button>
    </div>

    <!-- INPUT -->
    <div class="property_input">
      <template v-for="input in property.inputs" :key="input.id">
        <!-- NUMBER INPUT -->
        <base-input v-if="input.type === Enums.INPUT_TYPES.NUMBER" :id="input.id" :type="input.type" :value="input.value" :label="input.label" @input="onInput(input.id, $event)" />

        <!-- SELECT INPUT -->
        <base-select v-if="input.type === Enums.INPUT_TYPES.SELECT" :id="input.id" :options="input.options" :selected="input.value" :label="input.label" @change="onInput(input.id, $event)" />

        <!-- COLOR INPUT -->
        <color-picker v-if="input.type === Enums.INPUT_TYPES.COLOR" :id="input.id" :value="input.value" :label="input.label" @change="onInput(input.id, $event)" />
      </template>
    </div>

    <!-- VISUAL OUTPUT -->
    <component :is="currentPropertyComponent" :value="value" />
  </main>
</template>

<script>
// HELPERS
import { defineAsyncComponent } from 'vue'

// UTILS
import Enums from '@/utils/enums'

// COMPONENTS
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import ColorPicker from '@/components/ColorPicker'

export default {
  name: 'PropertyLayout',
  components: {
    BaseInput,
    BaseSelect,
    ColorPicker
  },
  data() {
    return {
      Enums,
      showCopySuccess: false,
      values: {}
    }
  },
  computed: {
    property() {
      return this.$attrs.property
    },
    value() {
      return this.property.method(this.values)
    },
    title() {
      return `${this.property.name}: ${this.property.syntax};`
    },
    declaration() {
      return `${this.property.name}: ${this.value};`
    },
    currentPropertyComponent() {
      const name = this.property.componentName
      return defineAsyncComponent(() => import(`@/components/${name}`))
    }
  },
  watch: {
    property() {
      this.setValues()
      this.showCopySuccess = false
    }
  },
  methods: {
    setValues() {
      this.property.inputs.forEach(input => {
        this.values[input.id] = input.value
      })
    },
    onInput(inputId, value) {
      this.values[inputId] = value
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.output).then(() => {
        this.showCopySuccess = true
        setTimeout(() => (this.showCopySuccess = false), 3000)
      })
    }
  },
  mounted() {
    this.setValues()
  }
}
</script>

<style lang="scss" scoped>
.property_layout {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  display: grid;
  gap: 6rem;
  padding: 3rem;
}

.property_input {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  gap: 2rem 1rem;
}

.property_title {
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.property_output_code {
  border-left: 2px solid var(--clr-primary);
  padding: 2rem;
  background-color: var(--clr-accent);
}

.copy_btn {
  position: relative;
  display: block;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  margin-left: auto;
  background-color: var(--clr-base);
  color: var(--clr-primary);
  border: 1px solid;
  border-radius: var(--border-radius);
  font-size: var(--fs-300);

  &:hover {
    background-color: var(--clr-accent);
  }

  // COPIED SUCCESS MESSAGE
  &::before {
    content: 'copied!';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  &.success::before {
    animation: 200ms slide ease forwards;

    @keyframes slide {
      to {
        transform: translate(calc(-100% - 1rem), -50%);
      }
    }
  }
}
</style>
