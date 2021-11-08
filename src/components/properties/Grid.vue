<template>
  <div class="example">
    <div class="example_item">I'm box one</div>
    <div class="example_item">I'm box two</div>
    <div class="example_item">I'm box three</div>
    <div class="example_item">I'm box four</div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  border: 1px solid;
  width: 100%;
  height: 100%;
  min-height: 40rem;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  transition: var(--transition-duration) var(--transition-timing-function);
}

.example_item {
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: var(--clr-accent);
  border-radius: var(--border-radius);

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  &:nth-child(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }

  &:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }
}
</style>
