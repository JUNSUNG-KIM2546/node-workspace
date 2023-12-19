<script>
  export default {
    data() {
      return {
        member: {}  // 회원객체
      }
    },
    methods: {
      save(){
        fetch('/myapp/rest/members', {
          method: 'POST',
          headers : { 'Content-Type' : 'application/json' },	// 요청메시지 본문 내용의 데이터 형신을 서버에게 알림
          body: JSON.stringify(this.member)	// 제이슨으로 변환
        }).then(response => response.json())
        .then(data=>{	// response.json();의 결과가 인자로 전달
          console.log(data);
          alert(data.num + '명의 회원 저장 성공')
          this.$router.push('/member/list') // 명령어로 화면(주소) 이동
        }).catch(function(error) {
          console.log(error);
          alert('회원 추가 실패');
        });
      }
    }
  }
</script>

<template>
  <h1> 회원추가 </h1>

  <form id="stuForm" action="">
    <div>아이디 :		<br><input type="text"      v-model="member.memId" ><br></div>
    <div>패스워드 :	<br><input type="password" 	v-model="member.memPass"><br></div>
    <div>이름 : 		<br><input type="text" 		  v-model="member.memName" ><br></div>
    <div>포인트 : 	<br><input type="number" 	  v-model="member.memPoint" ><br><hr></div>
    <input id="save" type="button" value="저장" @click="save">
    <input id="del" type="button" value="삭제" >
    <input id="cancel" type="button" value="취소" >
  </form>
</template>
