<template lang="html">
  <div class="input-view">
    <div class="header" @click="onClickBack">
      <BackArrowIcon/>
    </div>
    <div class="error-message">
      {{ message }}
    </div>
    <div class="content">
    </div>
    <div class="footer">
      <GTitle v-if="name" long>
        <slot slot="title">{{ inputName }}</slot>
      </GTitle>
      <GInput v-else placeholder="Name" v-model="inputName"/>

      <GTitle v-if="brand" truncate>
        <slot slot="title">{{ inputBrand }}</slot>
      </GTitle>
      <GInput v-else placeholder="Brand" v-model="inputBrand"/>

      <GTitle v-if="!showCategorySelect" truncate>
        <slot slot="title">{{ inputCategory }}</slot>
      </GTitle>
      <GSelect v-else v-model="inputCategory" :options="options"/>

      <GTitle>
        <slot slot="title">{{ inputCode }}</slot>
      </GTitle>

      <GButton class="back-button" @click="onClickSubmit">
        <slot slot="title">Submit</slot>
      </GButton>
    </div>
  </div>
</template>

<script>
import GInput from '@/components/ui/GInput.vue'
import GButton from '@/components/ui/GButton.vue'
import GSelect from '@/components/ui/GSelect.vue'
import GTitle from '@/components/ui/GTitle.vue'
import BackArrowIcon from '@/assets/common/BackArrowIcon.vue'
import FeedbackService from '@/FeedbackService'

export default {
  name: 'ProductInputSlide',
  components: {
    GInput,
    GButton,
    GSelect,
    BackArrowIcon,
    GTitle,
  },
  data() {
    return {
      inputName: this.name,
      inputBrand: this.brand,
      inputCode: this.code,
      inputCategory: this.category,
      options: this.categories,
      message: '',
      showCategorySelect: true,
    }
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    if (this.inputCategory !== 'Category') {
      this.showCategorySelect = false
    }
  },
  methods: {
    onClickBack() {
      this.$emit('closeProductInput')
    },
    onClickSubmit() {
      if (this.isAllDataEntered()) {
        FeedbackService.updateProduct(this.inputName, this.inputBrand, this.inputCategory, this.inputCode)
        .then(() => (
          this.$router.push({
            name: 'instant-feedback'
          })
        ))
      } else {
        this.message = 'Please provide data for all fields'
      }
    },
    isAllDataEntered() {
      return (
        this.inputName !== '' &&
        this.inputBrand !== '' &&
        this.inputCategory !== 'Category' &&
        this.inputCode !== ''
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.input-view {
  .error-message {
    margin-top: 1rem;
    width: 100%;
    color: #FF6455;
    text-align: center;
  }

  background-color: white;

  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .header {
    margin-left: .5rem;
  }
  .footer {
    width: 100%;

    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .back-button {
      display: block;
      margin: 1rem auto;

      button {
        margin: 2rem;
        align-self: center;
      }
    }
  }
}
</style>
