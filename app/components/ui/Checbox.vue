<template>
  <label class="checkbox-container">
    <input
      class="checkbox"
      type="checkbox"
      name="name"
      :checked="props.modelValue"
      @change="emit('update:modelValue', $event.target.checked)"
    />
    <div class="checkbox-view">
      <div class="checked-view">
        <img src="~/assets/images/shape.svg" alt="" />
      </div>
    </div>
    <p class="checkbox-label">{{ value }}</p>
  </label>
</template>

<script setup>
const props = defineProps(["name", "value", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.checkbox-container {
  display: flex;
}
.checkbox {
  display: none;
  &:checked + .checkbox-view {
    border-color: #2196f3;
    .checked-view {
      opacity: 1;
    }
  }
}
.checkbox-view {
  border: 1px solid #9abbce;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  transition: 0.3s;
  margin-right: 10px;
  cursor: pointer;
}
.checked-view {
  margin: auto;
  opacity: 0;
  transition: 0.3s;
}
.checkbox-label {
  color: #4a4a4a;
  font-size: 18px;
  cursor: pointer;
}
</style>
