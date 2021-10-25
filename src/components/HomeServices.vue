<template>
    <div class="home-services my-2">
        <h5 class="title">{{title}}</h5>
        <p class="description">{{description}}</p>
        <button class="button my-3">{{textButton}}</button>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        textButton:{
            type:String,
            required:true,
        }
    }
}
</script>