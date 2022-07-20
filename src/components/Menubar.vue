<!-- eslint-disable no-unused-vars -->
<template>
    <div id="app">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Help?</li>
            </ul>
    </div>
</template>

<script>
        export default {
            name:"menu-bar",
        }
</script>

<style>
body{
    margin: 0;
    padding: 0;
}

ul{
    background: rgb(210, 99, 99);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -60px;
    padding: 15px;
    color: white;
}
ul li{
    list-style: none;
}
ul li:hover{
    color: aquamarine;
    cursor:pointer;
}

.result h1{
    color: aqua;
}
#app{
    width: 100%;
   
}
</style>