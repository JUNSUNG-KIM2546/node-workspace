<script>
  export default{
    data(){
      return {
        message1: '',
        message2: '',
        checked : false,
        checkedNames: [],
        picked : '',
        selected: '',
        toggle: '',
        msg: '',
        x: 0,
        y: 0,
      };
    },
    watch: {  // watch 객체에 감시하고 싶은 속성명과 동일한 이름의 메서드 정의
      msg(newVal, oldVal){  // msg 속성값이 변경되면, 이 메서드 자동 실행
        console.log('msg 속성값이 ', oldVal, '->', newVal);
      }
    }
  }
</script>

<template>
  <hr>
  <h1>WelcomeItem 컴포넌트</h1>

  <p>메세지 : {{ message1 }}</p>
  <input v-model="message1" placeholder="메세지 입력하기" />


  <span>여러 줄 메세지:</span>
  <p style="white-space: pre-line;">메세지 : {{ message2 }}</p>
  <textarea v-model="message2" placeholder="여러 줄을 추가해보세요"></textarea>


  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>


  <div>체크된 이름: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
  <label for="jack">젝</label>

  <input type="checkbox" id="john" value="존" v-model="checkedNames">
  <label for="john">존</label>

  <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
  <label for="mike">마이크</label>


  <div>선택한 것: {{ picked }}</div>

  <input type="radio" id="one" value="하나" v-model="picked" />
  <label for="one">하나</label>

  <input type="radio" id="two" value="둘" v-model="picked" />
  <label for="two">둘</label>


  <div>선택됨: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">다음 중 하나를 선택하세요</option>
    <option value="A">가</option>
    <option value="B">나</option>
    <option value="C">다</option>
  </select>


  {{ toggle }}
  <input type="checkbox" v-model="toggle" true-value="Y" false-value="N" />


  <!-- "input" 대신 "change" 이벤트 후에 동기화됨 -->
  <pre>[{{ msg }}]</pre>
  <input v-model="msg" /> <!-- "input" 이벤트 후에 동기화 -->
  <input v-model.lazy="msg" />  <!-- "input" 대신 "change" 이벤트 후에 동기화 -->
  <input v-model.trim="msg" />

  <p>
    <input v-model.number="x" /> + <input v-model.number="y" /> = {{ x+y }}
  </p>


</template>

<style scoped>

</style>
