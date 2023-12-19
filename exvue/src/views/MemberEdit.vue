<script>
  export default {
    data() {
      return {
        member: {}  // 회원객체
      }
    },
    methods: {
      del(){
        fetch('/myapp/rest/members/' + this.member.memId, {
          method: 'DELETE',
        }).then(response => response.json())
        .then(data=>{	// response.json();의 결과가 인자로 전달
          console.log(data);
          alert(data.num + '명의 회원 삭제 성공');
          this.$router.push('/member/list') // 명령어로 화면(주소) 이동
        }).catch(function(error) {
          console.log(error);
          alert('회원 삭제 실패');
        });
      },

      save(){
        fetch('/myapp/rest/members/' + this.member.memId, {
          method: 'PATCH',
          headers : { 'Content-Type' : 'application/json' },	// 요청메시지 본문 내용의 데이터 형신을 서버에게 알림
          body: JSON.stringify(this.member)	// 제이슨으로 변환
        }).then(response => response.json())
        .then(data=>{	// response.json();의 결과가 인자로 전달
          console.log(data);
          alert(data.num + '명의 회원 변경 성공')
          this.$router.push('/member/list') // 명령어로 화면(주소) 이동
        }).catch(function(error) {
          console.log(error);
          alert('회원 변경 실패');
        });
      }
    },
    mounted() {
      fetch('/myapp/rest/members/' + this.$route.params.id, {
        method: 'GET',
      }).then(response => response.json())
      .then(data=>{	// response.json();의 결과가 인자로 전달
        console.log(data);
        this.member =data;
      }).catch(function(error) {
        console.log(error);
        alert('회원 상세정보 조회 실패');
      });
    }, 
  }
</script>

<template>
  <h1> 회원정보변경 </h1>

  <form id="stuForm" action="">
    <div>아이디 :		<br><input type="text"      v-model="member.memId" readonly><br></div>
    <div>이름 : 		<br><input type="text" 		  v-model="member.memName" ><br></div>
    <div>포인트 : 	<br><input type="number" 	  v-model="member.memPoint" ><br><hr></div>
    <input id="save" type="button" value="저장" @click="save">
    <input id="del" type="button" value="삭제" @click="del">
    <input id="cancel" type="button" value="취소" >
  </form>
</template>
