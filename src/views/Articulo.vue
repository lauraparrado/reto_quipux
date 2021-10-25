<template>
    <div class="container-fluid articulos">
        <div class="row">
            <div class="col-5 articulos__contacto">
                <div class="container-fluid info my-5 px-0 ">
                    <h6 class="font-weight-bold text-left">INFORMACION DE CONTACTO</h6>
                    <div class="my-4 d-inline-block">
                        <h6 class="font-weight-bold">Dirección</h6>
                        <p>{{this.contacto.default.direccion}}</p>
                        <h6 class="font-weight-bold">Correo electrónico</h6>
                        <p>{{this.contacto.default.correo}}</p>
                        <h6 class="font-weight-bold">Sitio Web</h6>
                        <p>{{this.contacto.default.website}}</p>
                        <h6 class="font-weight-bold">Redes sociales</h6>
                        <p v-for="red in this.contacto.default.redes" :key="red">
                            {{red.social}}
                        </p>
                        <h6 class="font-weight-bold">Direcció de correspondencia de video</h6>
                        <p>{{this.contacto.default.correspondencia}}</p>
                        <h6 class="font-weight-bold">Número de teléfonos</h6>
                        <p v-for="telefono in this.contacto.default.telefonos" :key="telefono">
                            {{telefono.numero}}
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="col-7  articulos__galeria">
                <div class="container-fluid cart-carousel my-5 px-0 ">
                    <div class="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div v-for="articulo in this.articulos.default" :key="articulo.id" class="carousel-item active">
                                    <img :src="articulo.imagen" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as dataContacto from "../jsonfile/info-contacto.json";
import * as dataArticulo from "../jsonfile/articulos.json";

export default {
    data(){
        return{
            contacto:dataContacto,
            articulos:dataArticulo
        }
    },
    created(){
        this.initData();
    },
    methods: {
        initData(){
            console.log(this.articulos.default);
        }
    },
    
}
</script>