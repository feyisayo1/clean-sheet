<template>
    <footer id="contact" name="contact">
        <form action="mailto:ogunleyeadejare34@gmail.com" class="form">
            <h1>Contact</h1>
            <p>connect with me</p>
            <input type="text" placeholder="your name">
            <input type="email" placeholder="your email">
            <textarea name="" id="" cols="30" rows="10" placeholder="enter your message here"></textarea>
            <button type="submit">send</button>
        </form>

        <p>
            Designed & Built by David✨
        </p>
    </footer>
</template>

<script>

</script>

<style scoped>
*{
    background-color: #1a1a1d;
}
    h1, p{
        text-align: center;
        color: #920720;

    }

    form{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        /* width: 650px; */
        padding-block: 2%;
        /* background-color: #dde1e7; */
    }
    .form input{
        padding: 10px 20px;
        margin: 10px 0px;
        border-radius: 10px;
        outline: none;
        width: 30%;
        border: none;
        color: #000;
        background-color: #dde1e7;
        box-shadow: inset 2px 2px 5px #babecc,
                    inset -5px -5px 10px #ffffff73;
        font-size: 20px;
        /* border: none; */
    }
    .form button{
        /* width: 10%; */
        padding: 10px 20px;
        background: #dde1e7;
        border-radius: 10px;
        border: none;
        margin-top: 10px;
        /* outline: none; */
        color: #920720;
        font-size: 20px;

        box-shadow: -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104,121,0.288);
    }
    .form button:hover{
        background-color: #920720;
        color: #fff;
    }
    .form textarea {
        padding: 10px 20px;
        margin: 10px 0px;
        border-radius: 10px;
        outline: none;
        width: 30%;
        border: none;
        color: #000;
        background-color: #dde1e7;
        box-shadow: inset 2px 2px 5px #babecc,
                    inset -5px -5px 10px #ffffff73;
        font-size: 20px;

    }



    @media only screen and (max-width:1024px){
        .form input, .form textarea{
            width: 50%;
        }
    }

    @media only screen and (max-width: 768px) {
        .form input{
        width: 50%;
      }
      .form textarea {
        width: 50%;
      }


      
    @media only screen and (max-width: 480px){
        .form input{
            width: 80%;
        }
        .form textarea{
            width: 80%;
        }
        .form button {
            /* width: 0%; */
        }
    }
    }
</style>