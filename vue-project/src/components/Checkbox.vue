<template>
  <div class="checkboxContainer">
    <input id="checkbox" type="checkbox" class="checkbox" />
    <label for="checkbox" class="label">{{ label }}</label>

    <span class="count">{{ count }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    count: Number,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.checkboxContainer {
  display: grid;
  grid-template-columns: 20px auto auto;
  align-items: center;
  padding-right: 16px;
}

.checkbox {
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 3px;
}

.checkbox:checked + label::before {
  background-color: $color-brand;
}

.checkbox:hover + label::before {
  border: 1px solid $color-brand;
}

.checkbox:disabled + label::before {
  border: 1px solid $color-border;
}

.label {
  margin-left: 12px;
  font-family: PTSans, sans-serif;
  font-size: 14px;
}

.count {
  font-family: PTSans, sans-serif;
  font-size: 12px;
  color: $second;
  justify-self: end;
}
</style>
