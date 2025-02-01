<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  render() {
    return (
      <div>
        <h1>{this.$props.msg}</h1>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Documentation
          </a>
          |
          <a href="https://cn.vuejs.org" target="_blank">
            Vue 2 Documentation
          </a>
        </p>

        <p>
          Edit
          <code>src/components/HelloWorld.vue</code>
          {' '}
          to test hot module replacement.
        </p>
      </div>
    )
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
