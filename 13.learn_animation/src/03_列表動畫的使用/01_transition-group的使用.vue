<template>
  <div>
    <button @click="addNum">添加數字</button>
    <button @click="removeNum">刪除數字</button>
    <button @click="shuffleNum">數字大風吹</button>

    <transition-group name="wyatt">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        // this.numbers.push(this.numCounter++)
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.numbers.splice(this.randomIndex(), 1)
      },
      shuffleNum() {
        this.numbers = _.shuffle(this.numbers)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length)
      }
    }
  }
</script>

<style scoped>
  .item {
    margin: 10px;
    display: inline-block
  }

  .wyatt-enter-from,
  .wyatt-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .wyatt-enter-active,
  .wyatt-leave-active {
    transition: all 1s ease;
  }

  .wyatt-leave-active {
    position: absolute;
  }
  .wyatt-move {
    transition: transform 1s ease;
  }
</style>