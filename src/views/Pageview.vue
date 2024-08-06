<script setup>
import API from '@/assets/api/api.js'

mGtvG = API
</script>

<template>
    <template>
        <h1>Gêneros de filmes</h1>
        <ul>
          <li v-for="genre in moviesGenres" :key="genre.id">
            {{ genre.name }} 
          </li>
        </ul>
        <hr />
        <h1>Gêneros de programas de TV</h1>
        <ul>
          <li v-for="genre in TVGenres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
      </template>
</template>

<style scoped>

</style>