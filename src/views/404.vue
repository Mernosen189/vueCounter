<template>
    <div class="error-container">
        <div class="error-div">
              <h2> 404 - Page Not Found </h2>
              <router-link to="/" class="home"> Home</router-link>
        </div>
    </div>
</template>

<style scoped>
.error-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.error-div{
    width: 70vw;
    margin:auto; 
    height:25vh;
    display:flex;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 2px 2px 10px lightgray;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    padding: 5px;
    text-align: center;
    font-family:  'Alegreya', serif;;
}
.home{
    color: black;
    font-weight: 800;
    font-size: 18px;
    text-decoration: none;
}
</style>