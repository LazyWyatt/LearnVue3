<script>
import { h } from 'vue'
export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    return h('div', { class: 'app' }, [
      h('h2', null, `當前計數: ${this.counter}`),
      h(
        'button',
        {
          onClick: () => this.counter++,
        },
        '+1'
      ),
      h(
        'button',
        {
          onClick: () => this.counter--,
        },
        '-1'
      ),
    ])
  },
}
</script>

<style scoped></style>
