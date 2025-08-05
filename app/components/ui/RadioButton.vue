<template>
  <label class="radio-container">
    <input
      class="radio"
      type="radio"
      name="name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <div class="radio-view">
      <p class="radio-label">{{ value }}</p>
    </div>
  </label>
</template>

<script setup>
const props = defineProps(["name", "value", "modelValue"]);
</script>

<style lang="scss" scoped>
.radio-container {
  width: 100%;
  &:last-child {
    .radio-view {
      border-radius: 0 8px 8px 0;
      border-left: none;
    }
  }
  &:first-child {
    .radio-view {
      border-radius: 8px 0 0 8px;
      border-right: none;
    }
  }
}
.radio {
  display: none;
  &:checked + .radio-view {
    background-color: #2196f3;
    border-color: #2196f3;
    .radio-label {
      color: #ffffff;
    }
  }
}
.radio-view {
  border: 1px solid #9abbce;
  border-radius: 0;
  transition: 0.3s;
  padding: 20px;
  cursor: pointer;
}
.radio-label {
  color: #4a4a4a;
  font-size: 20px;
  text-align: center;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: 500;
}
</style>
