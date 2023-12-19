<script>
  export default {
    data(){
      return {
        type: 0,
        ok: false,
        items: [{ message: 'Foo', no:1 }, { message: 'Bar', no:2 }],
        myObject: {
          title: 'Vue에서 목록을 작성하는 방법',
          author: '홍길동',
          publishedAt: '2016-04-10'
        },
      };
    }
  }
</script>

<template>
  <hr>
  <h1>TheWelcome 컴포넌트</h1>
  <div v-if="type === 1"> A </div>
  <div v-else-if="type === 2"> B </div>
  <div v-else-if="type === 3"> C </div>
  <div v-else>  A/B/C 아님 </div>
  <button type="button" @click="type++;"> type증가:{{ type }} </button>
  <button type="button" @click="type--;"> type감소:{{ type }} </button>

  <h1 v-if="ok"> if 안녕! </h1>
  <h1 v-show="ok"> show 안녕! </h1>
  <ul>
    <li v-for="item in items" :key="item.no"> {{ item.message }} </li>
  </ul>

  <ul>
    <li v-for="(item, index) in items"> {{ index }} : {{ item.message }} </li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  <span v-for="n in 10">{{ n }}</span>


</template>
