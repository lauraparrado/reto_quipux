<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12 col-lg-8 pt-5 mt-5 home__services">
        <div class="my-5">
          <span class="question">¿Qué quieres buscar?</span>
          <p>Encuentra la información que desees consultar ...</p>
        </div>
        <div class="container-fluid d-flex flex-wrap home__search px-0">
          <div class="col-12 col-sm-5 col-md-4 col-lg-3 px-0">
            <div class="home__search__select d-flex aling-items-center">
              <select>
                <option>Todos los servicios</option>
              </select>
              <div class="icon ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-9 col-sm-6 col-md-7 col-lg-8 px-0">
            <input class="home__search__input" type="text" placeholder="Que servicio queires consultar">
          </div>
          <div class="col-3 col-sm-1 home__search__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>
        <div class="container my-5">
          <div class="row home__services__chart">
            <div class="col-12 col-sm-4">
              <HomeServices 
                :title="'Certificado'"
                :description="'Conoce los beneficios que tenemos para ti al registrarte'"
                :textButton="'+ beneficios'"  
              />
            </div>
            <div class="col-12 col-sm-4">
              <HomeServices 
                :title="'Crear cuenta'"
                :description="'Conoce los beneficios que tenemos para ti al registrarte'"
                :textButton="'Ver todo'"  
              />
            </div>
            <div class="col-12 col-sm-4">
              <HomeServices 
                :title="'Top trámites'"
                :description="'Conoce los tramites más solicitados'"
                :textButton="'Ver todo'"  
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 py-5 px-5 home__tramites">
        <div class="d-flex justify-content-center justify-content-lg-start ">
          <img src="@/assets/resource-1.png">
        </div>
        

        <div class="home__tramites__enunciado">
          <span>SERVICIOS QUIPUX</span>
        </div>
        
        <div class="mt-4 home__tramites__detail">
          <div class="py-4 pl-4">
            <span>Trámites en tu mano</span>
            <p>Ahora podras hacer todos tus trámites desde la comodida de tu casa, desde cualquier dispositivo computadora, tablet o movil</p>
            <div class="mt-2">
              <span>1/4</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeServices from "../components/HomeServices.vue"
export default {
  name: 'Home',
  components: {
    HomeServices
  },

  data(){
    return{
    
    }
  }
}
</script>
