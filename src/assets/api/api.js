import { axios } from 'axios'
import { ref,  onMounted  } from 'vue'

const moviesGenres = ref([])
const tvGenres = ref([])

onMounted(async () => {
  let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWI0M2JkNjcxZjkzZWVmMDA2YzA5MDU3MzY1ZTIxNCIsIm5iZiI6MTcyMjkxMTQ0MS40MTMyMTUsInN1YiI6IjY2YjE4OWNjZWFkN2M0ZTgyMzI1ZmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRiXL_s8BVxlmy-OzEJD-xkR-UTvMsoO-zGzY1ZOSmg`
    },
  },
);
    moviesGenres.value = response.data.genres;
    response = await axios.get(
        'https://api.themoviedb.org/3/genre/tv/list?language=pt-BR',
        {
            headers:{
                Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWI0M2JkNjcxZjkzZWVmMDA2YzA5MDU3MzY1ZTIxNCIsIm5iZiI6MTcyMjkxMTQ0MS40MTMyMTUsInN1YiI6IjY2YjE4OWNjZWFkN2M0ZTgyMzI1ZmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRiXL_s8BVxlmy-OzEJD-xkR-UTvMsoO-zGzY1ZOSmg'
            },
        },
    );
    tvGenres.value = response.data.genres;
})
