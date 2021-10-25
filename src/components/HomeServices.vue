<template>
    <div class="home-services">
        <h4 class="title">{{title}}</h4>
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