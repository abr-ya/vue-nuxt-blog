<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumb">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput v-model="editedPost.prevText">
      Preview Text
    </AppControlInput>
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea"
    >
      Content
    </AppControlInput>
    <AppButton type="submit">
      Save
    </AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedPost: this.post
        ? this.post
        : { author: '111', title: '', thumb: '', prevText: '', content: '' }
    }
  },
  methods: {
    onSave () {
      // save the post
      // eslint-disable-next-line no-console
      console.log(this.editedPost)
      this.$emit('submit', this.editedPost)
    },
    onCancel () {
      // navigate back
      this.$router.push('/admin/')
    }
  }
}
</script>

<style scoped>

</style>
