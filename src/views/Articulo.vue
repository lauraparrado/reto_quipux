<template>
    <div class="container-fluid articulos pb-1">
        <div class="row">
            <div class="col-12 col-md-5 articulos__contacto">
                <div class="container-fluid info mt-4 px-0 ">
                    <div class="py-4 pl-4">
                        <h6 class="font-weight-bold text-left">INFORMACIÓN DEL CONTACTO</h6>
                    </div>
                    
                    <div class="d-inline-block text-center pb-5">
                        <h6 class="font-weight-bold">Dirección</h6>
                        <div class="w-50 d-inline-block">
                            <p>{{this.contacto.default.direccion}}</p>
                        </div>
                        <h6 class="font-weight-bold">Correo electrónico</h6>
                        <p>{{this.contacto.default.correo}}</p>
                        <h6 class="font-weight-bold">Sitio Web</h6>
                        <p>{{this.contacto.default.website}}</p>
                        <h6 class="font-weight-bold">Red social</h6>
                        <p v-for="red in this.contacto.default.redes" :key="red">
                            {{red.social}}
                        </p>
                        <h6 class="font-weight-bold">Direcció de correspondencia de video</h6>
                        <div class="w-50 d-inline-block">
                            <p>{{this.contacto.default.correspondencia}}</p>
                        </div>
                        
                        <h6 class="font-weight-bold">Número de teléfonos</h6>
                        <p>Fijo</p>
                        <p>
                            {{this.contacto.default.telefonos[0].numero}}
                        </p>
                        <p>Celular</p>
                        <p>
                            {{this.contacto.default.telefonos[1].numero}}
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="col-12 col-md-7  articulos__galeria">
                <div class="container-fluid cart-carousel mt-4 mb-4 px-0 ">
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
                
                <div class="container-fluid cart-art px-0 d-flex flex-wrap">
                    <div v-for="articulo in this.articulos.default" :key="articulo.id" class="col-6 col-sm-3 col-md-4 col-lg-3">
                        <ItemArt :image="articulo.imagen" :title="articulo.titulo" :description="articulo.descripcion" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as dataContacto from "../jsonfile/info-contacto.json";
import * as dataArticulo from "../jsonfile/articulos.json";
import ItemArt from "../components/ItemArt.vue"

export default {
    name:"Articulo",
    components:{ItemArt},
    data(){
        return{
            contacto:dataContacto,
            articulos:dataArticulo
        }
    },
    
}
</script>