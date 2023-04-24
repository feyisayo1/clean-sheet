<template>
    <section class="wrapper">
     
      <div class="content">
         <p>ABOUT ME</p>
         <h3>Hello, I'm</h3> 
         <!-- <h2>Ogunleye</h2> -->
         <h2>Ogunleye David</h2>
         <h4>Frontend Developer</h4>
         <h5>I am a frontend developer. I can provide clean code and pikel perfect design. <br/>
         I can also make the website more & more interactive with web animations <br/>
         A responsive design makes your website accessible to all users, regardless of their devices</h5> 
         <a href="#" class="btn">Download CV</a>

         <div class="social">
            <a href="#" target="_blank">
               <font-awesome-icon :icon="['fab', 'github']" size="2xl" style="color: #950740;" />
            </a>
            <a href="#" target="_blank">
               <font-awesome-icon :icon="['fab', 'twitter']" size="2xl" style="color: #950740; "  />
            </a>
            <a href="#" target="_blank">
               <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" style="color: #950740;" />
            </a>
         </div>


      </div>
      <div class="pic">
         <img src="../assets/me.jpg" alt="">
      </div>
    </section>
   

</template>

<Script>

</Script>

<style scoped>


.social font-awesome-icon:hover{
   color: white;
}
 .wrapper{
    padding-block: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
 }
 .content{
    width: 40%;
 }
 .content p{
    text-transform: uppercase;
    font-weight: 600;
    color: #950740;
    font-size: 40px;
 }
 .content h3{
    font-weight: 500;
    color: white;
    font-size: 30px;
    padding-top: 10px;
 }
 .content h2{
    font-weight: 400;
    color: white;
    font-size: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
 }
 .content h4{
    font-weight: 300;
    color: white;
    font-size: 25px;
    padding-top: 10px;
    /* padding-bottom: 10px; */
 }
 .content h5{
    font-weight: 100;
    color: white;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
 }
 .pic{
    width: 40%;
 }
 .pic img{
    border-radius: 50%;
    width: 100%;
 }

 .social{
   display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 40%;
 }

 .btn{
   margin: 20px 0px;
   display: inline-block;
    background: #950740;
    color: #fff;
    padding: 0.7rem 1.3rem;
    border-radius: 0.5rem;
}

.btn:hover{
   background-color: #fff;
   color: black;
}



@media only screen and (max-width:1024px){
   .pic{
      width: 40%;
   }

   .content{
      width: 55%;
   }

   .content p{
         font-size: 30px;
      }
      .content h3{
         font-size: 20px;
      }
      .content h2{
         font-size: 50px;
      }
      .content h4{
         font-size: 15px;
      }
      .content h5{
         font-size: 15px;
      }  

      .card-details{
         width: 30%;
      }
}
  


@media only screen and (max-width: 768px){
   .wrapper{
        flex-direction: column-reverse;
      }
   .pic{
      width: 40%;
      margin-bottom:20px;
   }
   .content{
      width: 100%;
   }

   @media only screen and (max-width:480px) {
      .wrapper{
        flex-direction: column-reverse;
      }

      .pic{
         width: 70%;
         margin-bottom: 15px;
      }
      .content{
         width: 100%;
      }
      .content p{
         font-size: 30px;
      }
      .content h3{
         font-size: 20px;
      }
      .content h2{
         font-size: 50px;
      }
      .content h4{
         font-size: 15px;
      }
      .content h5{
         font-size: 15px;
      }
   
     }
}
</style>