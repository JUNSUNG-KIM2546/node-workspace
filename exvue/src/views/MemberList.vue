<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    data() {
      return {
        memberList: [] // 회원목록 데이터(회원객체들의 배열)
      };
    },
    mounted(){
      fetch('/myapp/rest/members', {
        method: 'GET',
      }).then(response => response.json())
      .then(data=>{	// response.json();의 결과가 인자로 전달
        console.log(data);
        this.memberList = data;

      }).catch(function(error) {
        console.log(error);
        alert('회원목록 조회 실패');
      });
    }
  }
</script>

<template>
  <h1> 회원목록 </h1>
  <RouterLink to="/member/new">
    <button type="button" id="add" >추가</button>
  </RouterLink>
  <table id="stuTable">
      <thead>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>포인트</th>
          <th>처리</th>
        </tr>
      </thead>

      <tbody>
          <tr v-for="m in memberList" :key="m.memId" >
            <td class="no">{{ m.memId }}</td> 
            <td class="name">{{ m.memName }}</td> 
            <td class="score">{{ m.memPoint }}</td> 
            <td>
              <RouterLink :to="'/member/edit/' + m.memId">
                <button type="button" class="edit">변경</button>
              </RouterLink>
            </td>
          </tr>
      </tbody>
  </table>
</template>
