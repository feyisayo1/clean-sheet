<template  >
    <div class="wrapper" id="services" name="services">
        <div class="services">
        <h2>Services</h2>
        <p>Our Services</p>
    </div>
    <div class="cards">
           <div v-for="detail in details" :key="detail.id" class="card-details">
                <img :src="detail.img" alt="">
                <p>{{ detail.text }}</p>
                <h3>Learn more</h3>
           </div>
        </div>
    </div>

    <!-- skills section  -->
    <div  id="skills" name="skills">
        <h1>Skills</h1>
    </div>
    <div class="skills">
        <div class="skills-card" >
            <font-awesome-icon :icon="['fab', 'html5']"  size="2xl" bounce/>
            <p>HTMLS</p>

        </div>
        <div class="skills-card" >
            <font-awesome-icon :icon="['fab', 'css3']" size ="2xl" bounce/>
            <p>CSS3</p>

        </div>
        <div class="skills-card" >
            <font-awesome-icon :icon="['fab', 'js']" size ="2xl" bounce/>
            <p>JavaScript</p>

        </div>
        <div class="skills-card" >
            <font-awesome-icon :icon="['fab', 'vuejs']" size ="2xl" bounce/>
            <p>VueJs</p>

        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default{
    setup(){
        const state = ref({
            details: [
                {id:1 , text: 'Web development', img: 'code.PNG'},
                {id:2 , text: 'Backend development',  img: require ('@/assets/data.png')},
                {id:3 , text: 'App development', img: require ('@/assets/android.png')}
            ],

            skills: [
                {id: 1, }
            ]
        });

        return {
      details: state.value.details,
    };
    }
}
</script>

<style scoped>
h1{
    text-align: center;
    color: #950740;
}
.skills{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 30px 30px;
}

.skills-card{
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    text-align: center;
    box-shadow: rgba(14, 55, 54, 0.15) 0px 2px 7px;
    padding: 50px;
    border-radius: 0.5rem;
    border-bottom: 1px solid #950740;
    color: #950740;
}

.skills-card:hover{
    background-color: #950740;
    color: white;
}
.wrapper{
    padding-block: 5%;
}
.services{
    text-align: center;
}
.services h2 {
    color: #950740;
    font-size: 30px;
    font-weight: 800;
}
.services p {
    color: #950740;
    font-size: 20px;
    font-weight: 400;
}

.cards{
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(200px, auto)); */
    /* justify-content: center; */
    /* margin-top: 2rem; */
    /* gap: 1rem; */
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    /* margin-top: 10px; */
}


.card-details{
    /* width: 260px; */
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    text-align: center;
    box-shadow: rgba(14, 55, 54, 0.15) 0px 2px 7px;
    padding: 50px;
    border-radius: 0.5rem;
    border-bottom: 1px solid #950740;
    color: #950740;

}
.card-details:hover{
    background-color: #950740;
    color: white;
}

.card-details p{
    margin: 10px 0px;
}
@media only screen and (max-width:1024px){
    .card-details, .skills-card {
        padding:30px;
    }

    /* .skills-card{
        padding: 30px;
    } */

}

@media only screen and (max-width: 768px) {
    .card-details{
        width: 100%;
        padding: 30px;
        margin-bottom: 20px;

      }

      .cards{
        flex-direction: column;
        /* width: 40%; */
      }

      .skills{
        width: 100%;
        flex-direction: column;

      }
      .skills-card{
        width: 100%;
        margin-bottom: 20px;

      }

}

@media only screen and (max-width:480px) {
      .cards{
        flex-direction: column;
      }
      .card-details{
        margin-bottom: 15px;
        width: 100%;

      }
     }
@media only screen and (max-width: 480px) {
    .skills{
        flex-direction: column;
    }
    .skills-card {
        margin-bottom:20px ;
    }
}

</style>