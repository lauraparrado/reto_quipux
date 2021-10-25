<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a v-if="router=='Home'"  href="#">
            <img class="w-75" src="@/assets/logo.png">
        </a>
        <a v-else class="navbar-brand navbar__house" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
            </svg>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarText">
            <ul v-if="router!='Home'" class="navbar__nav">
                <li class="navbar__item">
                    <a class="navbar__link" href="#">EMPRESAS</a>
                    <div class="line"></div>
                </li>
                <li v-if="router=='Articulo'" class="navbar__item">
                    <a class="navbar__link" href="#">ARTÍCULO</a>
                    <div class="line"></div>
                </li>
                <li v-else class="navbar__item">
                    <a class="navbar__link" href="#">NOMBRE EMPRESA</a>
                    <div class="line"></div>
                </li>
            </ul>
            <div class="navbar__profile navbar-tex ml-auto">
                <img src="@/assets/user.png">
                
                <div class="dropdown">
                    <button>Usuario Apellido</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                    <div class="navbar__profile__content">
                        <a href="#">Profile</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>

        </div>
        
    </nav>
</template>
<script>
export default {
    name:"navbar",
    props:{
        router:{
            type:String,
            required:true
        },
    }
}
</script>