<template>
    <div class="container-fluid empresa pb-1">
        <div class="row">
            <div class="col-5">
                <div class="container-fluid info bg-white mt-5 px-0 ">
                    <div class="py-5 pl-4">
                        <h6 class="font-weight-bold text-left">INFORMACIÓN DE LA EMPRESA</h6>
                    </div>
                    
                    <div class="d-inline-block text-center pb-5">
                        <h6 class="font-weight-bold">Nombre</h6>
                        <p>Quipux S.A.S</p>
                        <h6 class="font-weight-bold">Fecha de creación</h6>
                        <p>1995/05/06</p>
                        <h6 class="font-weight-bold">Dirección</h6>
                        <div class="w-50 d-inline-block">
                            <p>Carrera 43A No. 3 Sur-130 Ed. Milla de Oro Distrito de negocios Torre 1 Piso 12</p>
                            <p>Medellin - Colombia</p>
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
                        <h6 class="font-weight-bold">Sitio Web</h6>
                        <p>www.quipux.com/site</p>
                    </div>
                </div>
                
            </div>
            <div class="col-7  empresa__contacto">
                <div class="container-fluid info bg-white mt-5 px-0">
                    <div class="py-5 pl-4">
                        <h6 class="font-weight-bold text-left">INFORMACIÓN DEL CONTACTO</h6>
                    </div>
                    <div class="row">
                        <div class="col-6 d-inline-block ">
                            <div class="pt-5">
                                <h6 class="font-weight-bold">Dirección</h6>
                                <div class="w-50 d-inline-block">
                                    <p>{{this.contacto.default.direccion}}</p>
                                </div>
                            </div>
                            <div class="pt-5">
                                <h6 class="font-weight-bold ">Correo electrónico</h6>
                                <p>{{this.contacto.default.correo}}</p>
                            </div>
                            <div class="pt-5">
                                <h6 class="font-weight-bold">Sitio Web</h6>
                                <p>{{this.contacto.default.website}}</p>
                            </div>
                            <div class="py-5">
                                <h6 class="font-weight-bold">Red social</h6>
                                <p v-for="red in this.contacto.default.redes" :key="red">
                                    {{red.social}}
                                </p>
                            </div> 
                        </div>
                        <div class="col-6 d-inline-block empresa__contacto__col">
                            <h6 class="font-weight-bold">Direcció de correspondencia de video</h6>
                            <div class="w-50 d-inline-block">
                                <p>{{this.contacto.default.correspondencia}}</p>
                            </div>
                            <div class="py-5">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as dataContacto from "../jsonfile/info-contacto.json";

export default {
    name:"Empresa",
    data(){
        return{
            contacto:dataContacto,
        }
    },
    
}
</script>