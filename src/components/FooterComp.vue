<template>
    <div class="footer">
        <div class="container">
          <p>  @2023 AltStore | All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterBar',
        
    }
</script>

<style  scoped>
.footer {
    background-color: #f8f9fa;
    height: 10vh;
 border-top: 1px solid grey;



}
.container {
    width: 95%;
    margin: 0 auto;
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 100%;
}

p {
    font-size: 1rem;
    font-weight: 700;
    color: black;
}

</style>