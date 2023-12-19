<script>
import LifeCycle from './LifeCycle.vue';

// export default 구문을 사용하여 현재 컴포넌트 객체를 정의
  export default {
    data() {
        return {
            msg: "Hello Vue! @.@",
            rawHtml: "<span style=\"color: red\">이것은 빨간색이어야 합니다.</span>",
            dynamicId: "mydiv",
            ok: false,
            attrObj: {
                id: "container",
                class: "wrapper"
            },
            count: 0,

            firstName: 'John',
            lastName: 'Doe',

            isActive: true,
            hasError: false,

            activeColor: 'red',
            fontSize: 30,
        };
    },
    computed: { // computed 객체에 정의한 메서드가 현재 컴포넌트의 계산된 속성이 된다.
      fullName(){ // 메서드의 반환값이 계산된 속성의 속성값이 된다.
        console.log('computed fullName 실행')
        return this.firstName + " " + this.lastName;
      }
    },

    methods: {  // methods 객체에 정의한 메서드가 현재 컴포넌트의 메서드가 된다.
      getfullName(){ 
        console.log('computed getfullName 실행')
        return this.firstName + " " + this.lastName;
      },
      increment() {
        this.count++
      }
    },
    mounted() { // 현재 컴포넌트가 화면에(DOM)에 출력된 후 자동실행되는 생명주기 메서드
      this.count++;
      this.increment()  // 메서드는 생명 주기 훅 또는 다른 메서드에서 호출할 수 있습니다!
    },

    components: { LifeCycle }
}
</script>

<template>
  <hr>
  <h1>HelloWorld 컴포넌트</h1>

  <!-- 템플릿에서 이중 중괄호 내부에 사용하는 식별자는 현재 컴포넌트의 속성명 -->
  <span>메세지: {{ msg }}</span>
  <p>텍스트 보간법 사용: {{ rawHtml }}</p>
  <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId"></div>
  <button  @click="increment" :disabled="ok">버튼</button>
  <div v-bind="attrObj"></div>

  <p v-if="ok">이제 이것을 볼 수 있습니다.</p>
  <LifeCycle v-if="ok"></LifeCycle>
  <button @click="ok = !ok">ok토글</button>

  <h1>{{ count }}</h1>
  <!-- v-on:이벤트명="메서드명" 또는 v-on:이벤트명="자바스크립트명령문"을 사용하여 이벤트 발생시 수행할 작업을 설정 가능 -->
  <button v-on:click="increment">{{ count }}</button>
  <button @click="increment">{{ count }}</button>
  <p>{{ firstName }} {{ lastName }}</p>
  <p>{{ firstName + ' ' + lastName }}</p>

  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>

  <p>{{ getfullName() }}</p>
  <p>{{ getfullName() }}</p>
  <p>{{ getfullName() }}</p>

  <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>

  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">커져라!</div>
  <button type="button" @click="fontSize++;">폰트사이즈증가</button>
  <button type="button" @click="fontSize--;">폰트사이즈감소</button>

</template>

<style scoped>
</style>
