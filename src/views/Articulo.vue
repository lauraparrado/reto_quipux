<template>
  <div class="container-fluid articulos pb-1">
    <div class="row">
      <div class="col-12 col-md-5 articulos__contacto">
        <div class="container-fluid info mt-4 px-0">
          <div class="py-4 pl-4">
            <h6 class="font-weight-bold text-left">INFORMACIÓN DEL CONTACTO</h6>
          </div>

          <div class="d-inline-block text-center pb-5">
            <h6 class="font-weight-bold">Dirección</h6>
            <div class="w-50 d-inline-block">
              <p>{{ this.contacto.default.direccion }}</p>
            </div>
            <h6 class="font-weight-bold">Correo electrónico</h6>
            <p>{{ this.contacto.default.correo }}</p>
            <h6 class="font-weight-bold">Sitio Web</h6>
            <p>{{ this.contacto.default.website }}</p>
            <h6 class="font-weight-bold">Red social</h6>
            <p v-for="red in this.contacto.default.redes" :key="red">
              {{ red.social }}
            </p>
            <h6 class="font-weight-bold">
              Direcció de correspondencia de video
            </h6>
            <div class="w-50 d-inline-block">
              <p>{{ this.contacto.default.correspondencia }}</p>
            </div>

            <h6 class="font-weight-bold">Número de teléfonos</h6>
            <p>Fijo</p>
            <p>
              {{ this.contacto.default.telefonos[0].numero }}
            </p>
            <p>Celular</p>
            <p>
              {{ this.contacto.default.telefonos[1].numero }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7 articulos__galeria">
        <div class="container-fluid cart-carousel mt-4 mb-4 px-0">
          <div class="articulos__galeria__card">
            <div class="articulos__galeria__card__carousel ">
              <div
                v-for="articulo in this.articulos.default"
                :key="articulo.id"
                class="carousel"
              >
                <div v-if="articulo.id == '1'" class="item main">
                  <img :src="articulo.imagen" class="image" alt="..." />
                </div>
                <div v-else class="item">
                  <img :src="articulo.imagen" class="image" alt="..." />
                </div>
              </div>
            </div>
            <div class="articulos__galeria__card__navigation">
              <div class="prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-chevron-compact-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                  />
                </svg>
              </div>
              <div class="next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-chevron-compact-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid cart-art px-0 d-flex flex-wrap">
          <div
            v-for="articulo in this.articulos.default"
            :key="articulo.id"
            class="col-6 col-sm-3 col-md-4 col-lg-3"
          >
            <ItemArt
              :image="articulo.imagen"
              :title="articulo.titulo"
              :description="articulo.descripcion"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as dataContacto from "../jsonfile/info-contacto.json";
import * as dataArticulo from "../jsonfile/articulos.json";
import ItemArt from "../components/ItemArt.vue";

export default {
  name: "Articulo",
  components: { ItemArt },
  data() {
    return {
      contacto: dataContacto,
      articulos: dataArticulo,
    };
  }
};
</script>