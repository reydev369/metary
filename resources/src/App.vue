<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div>
        <h1>Bienvenido a Metary 3</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterView/>
    </div>
</template>

