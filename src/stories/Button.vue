<template>
  <q-btn type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </q-btn>
</template>

<script lang="ts">
import './button.css'
import { reactive, computed } from 'vue'
import { Vue, Options, prop } from 'vue-class-component'
class Prop {
  label!: ''
  primary?: false
  size?: ''
  backgroundColor?: ''
}

@Options({
  props: {
    label: prop({ required: true, default: 'lab' }),
    primary: prop({ default: false }),
    size: prop({ default: '' }),
    backgroundColor: prop({ default: '' })
  },
  emits: ['click']
})
export default class MyButton extends Vue.with(Prop) {
  // name: 'my-button',
  //
  // props: {
  //   label: {
  //     type: String,
  //     required: true,
  //   },
  //   primary: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   size: {
  //     type: String,
  //     validator: function (value) {
  //       return ['small', 'medium', 'large'].indexOf(value) !== -1;
  //     },
  //   },
  //   backgroundColor: {
  //     type: String,
  //   },
  // },
  //
  // emits: ['click'],
  //

  get classes() {
    return {
      'storybook-button': true,
      'storybook-button--primary': this.primary,
      'storybook-button--secondary': !this.primary,
      [`storybook-button--${this.size || 'medium'}`]: true
    }
  }
  get style() {
    return {
      backgroundColor: this.backgroundColor
    }
  }
  onClick() {
    this.$emit('click')
  }
  // }
  // },
}
</script>
