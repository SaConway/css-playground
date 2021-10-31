<template>
  <main v-if="property" class="property_layout">
    <header>
      <!-- TITLE -->
      <h1 class="property_title">{{ property.name }}</h1>
    </header>

    <!-- INPUT -->
    <div class="property_input">
      <template v-for="input in property.inputs" :key="input.id">
        <!-- SELECT INPUT -->
        <base-select v-if="input.type === Enums.INPUT_TYPES.SELECT" :id="input.id" :options="input.options" :selected="values[input.id]" :label="input.label" @change="onInput(input.id, $event)" />

        <!-- COLOR INPUT -->
        <base-select v-if="input.type === Enums.INPUT_TYPES.COLOR" :id="input.id" :options="colors" :selected="values[input.id]" :label="input.label" :type="Enums.INPUT_TYPES.COLOR" @change="onInput(input.id, $event)" />
      </template>
    </div>

    <!-- OUTPUT CODE -->
    <component :is="currentPropertyComponent" :value="value" />

    <!-- VISUAL OUTPUT -->
    <button :class="['copy_btn', showCopySuccess ? 'success' : '']" @click="copyToClipboard">Copy Declaration</button>
  </main>
</template>

<script>
// HELPERS
import { defineAsyncComponent } from 'vue'

// UTILS
import Enums from '@/utils/enums'
import Colors from '@/utils/colors'

// COMPONENTS
import BaseSelect from '@/components/BaseSelect'

export default {
  name: 'PropertyLayout',
  components: {
    BaseSelect
  },
  data() {
    return {
      Enums,
      colors: Object.values(Colors).map(color => color.value),
      showCopySuccess: false,
      property: null,
      values: {}
    }
  },
  computed: {
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
      return defineAsyncComponent(() => import(`@/components/properties/${name}`))
    }
  },
  watch: {
    $route() {
      this.init()
    }
  },
  methods: {
    async init() {
      this.property = await this.getProperty()
      this.values = this.getValues()
      this.showCopySuccess = false
    },
    async getProperty() {
      const name = this.$route.name
      const propertyModule = await import(`@/content/${name}`)
      return propertyModule.default
    },
    getValues() {
      const values = {}

      this.property.inputs.forEach(input => {
        values[input.id] = input.value
      })

      return values
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
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.property_layout {
  width: 100%;
  max-width: 75rem;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  gap: 6rem;
  padding: 3rem;
}

.property_input {
  display: grid;
  gap: 4rem;
}

.property_title {
  font-size: var(--fs-500);
  text-decoration: var(--clr-accent) wavy underline;
  text-underline-offset: 2px;
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
