<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
  <q-btn>
    {{ label }}
  </q-btn>
</template>

<script lang="ts">
import './button.css'
import { Options, Vue } from 'vue-class-component'

class Props {
  label!: {
    type: string
    required: true
  }
  primary: {
    type: boolean
    default: false
  }
  size: {
    type: string
    default: ''
  }
  backgroundColor: {
    type: string
    default: ''
  }
}
@Options({
  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String
    }
  },
  emits: ['click']
})
export default class MyButton extends Vue.with(Props) {
  // props: {
  //   label: {
  //     type: String,
  //     required: true
  //   },
  //   primary: {
  //     type: Boolean,
  //     default: false
  //   },
  //   size: {
  //     type: String,
  //     validator: function (value) {
  //       return ['small', 'medium', 'large'].indexOf(value) !== -1
  //     }
  //   },
  //   backgroundColor: {
  //     type: String
  //   }
  // },

  // emits: ['click'],

  get classes() {
    return {
      'storybook-button': true,
      'storybook-button--primary': this.primary,
      'storybook-button--secondary': !this.primary,
      [`storybook-button--${this.size || 'medium'}`]: true
    }
  }
  get style() {
    return { backgroundColor: this.backgroundColor }
  }

  onClick() {
    this.$emit('click')
  }
}
</script>
