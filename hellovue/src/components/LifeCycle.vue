<script>
    export default{
        // 생명주기(Life Cycle) : 컴포넌트 객체가 생성되고 소멸될때까지 특정 단계마다 자동으로 실행되는 메서드들
        beforeCreate(){ console.log('LifeCycle beforeCreate!') },
        created(){ console.log('LifeCycle created!') },
        beforeMount(){ console.log('LifeCycle beforeMount!') },
        mounted(){ console.log('LifeCycle mounted!') },
        beforeUpdate(){ console.log('LifeCycle beforeUpdate!') },
        updated(){ console.log('LifeCycle updated!') },
        beforeUnmount(){ console.log('LifeCycle beforeUnmount!') },
        unmounted(){ console.log('LifeCycle unmounted!') }
    }
</script>

<template>
    <hr>
    <h1>LifeCycle 컴포넌트</h1>
</template>