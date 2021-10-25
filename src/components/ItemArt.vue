<template>
    <div class="item-art d-flex flex-wrap justify-content-center">
        <div class="item-art__image py-3"><img :src="image"></div>
        <p class="item-art__title">{{title}}</p>
        <p class="item-art__description">{{description}}</p>
    </div>
</template>
<script>
export default {
name:"itemart",

props:{
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}
}
</script>