<script setup>
import spotifyGet from '../assets/axiosGet.js';
import spotifyPost from '../assets/axiosPost.js';
const login = () => {
  const rotaPost = `api/token`;
  const body = {
  };
  spotifyPost(rotaPost);
  const rota = `authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_URL}`;
  spotifyGet(rota);
};
</script>

<template>
  <main class="flex gap-20 flex-col justify-center items-center bg-zinc-900 h-screen">
    <img src="../assets/imgs/spotify.png" alt="">
    <div class="flex w-full gap-2 flex-col items-center ">
      <h1 class="text-white">Clique em Login para acessar os shows dos seus artistas favoritos!!</h1>
      <button v-on:click="login" class="text-black bg-green-500 w-32 p-2 rounded-3xl hover:scale-105 ">Entrar</button>
    </div>
  </main>
</template>
