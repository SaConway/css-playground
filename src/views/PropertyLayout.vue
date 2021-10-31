<template>
  <main v-if="property" class="property_layout">
    <!-- TITLE -->
    <h1 class="property_title">{{ property.name }}</h1>

    <!-- INPUTS -->
    <div class="property_input">
      <template v-for="input in property.inputs" :key="input.id">
        <base-input :id="input.id" :options="input.options || colors" :selected="values[input.id]" :label="input.label" :type="input.type" @change="onInput(input.id, $event)" />
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
import BaseInput from '@/components/BaseInput'

export default {
  name: 'PropertyLayout',
  components: {
    BaseInput
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
  max-width: 100rem;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  gap: 6rem;
  padding: 3rem;
  align-items: flex-start;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
}

.property_input {
  display: grid;
  gap: 3rem;

  @media (min-width: 900px) {
    grid-column: 1;
  }
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
  grid-column: 1 / -1;

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
