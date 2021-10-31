import { ref, watch } from 'vue';

export default function(title = "默認的網站名稱") {
  const titleRef = ref(title);

  watch(titleRef, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  return titleRef
}