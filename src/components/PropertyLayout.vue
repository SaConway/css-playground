<template>
  <main class="property_layout">
    <!-- TITLE -->
    <h1 class="property_title">{{ title }}</h1>

    <!-- OUTPUT CODE -->
    <div>
      <pre class="property_output_code">{{ declaration }}</pre>

      <button :class="['copy_btn', { success: showCopySuccess }]" @click="copyToClipboard">Copy to clipboard</button>
    </div>

    <!-- INPUT -->
    <div class="property_input">
      <slot name="input" />
    </div>

    <!-- VISUAL OUTPUT -->
    <slot name="output" />
  </main>
</template>

<script>
export default {
  name: 'PropertyLayout',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    syntax: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showCopySuccess: false
    }
  },
  computed: {
    title() {
      return `${this.name}: ${this.syntax};`
    },
    declaration() {
      return `${this.name}: ${this.value};`
    }
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.output).then(() => {
        this.showCopySuccess = true
        setTimeout(() => (this.showCopySuccess = false), 3000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.property_layout {
  max-width: 60rem;
  height: fit-content;
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
  font-family: sans-serif;
  letter-spacing: 1px;
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
