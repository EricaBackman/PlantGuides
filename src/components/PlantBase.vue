<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- Bootstrap card -->
    <div class="col">
        <div class="card" style="width: 18rem">
            <img
                :src="plantFetch.img"
                class="card-img-top"
                alt="Bild på grön växt"
            />
            <div class="card-body">
                <h4 class="card-title">{{ plantFetch.name }}</h4>
                <div v-if="reveal" >
                    <p class="card-text">
                    {{ plantFetch.description }}
                </p>
                <a href="#" class="btn btn-dark btn-sm" @click="revealguide"
                    >Close Guide</a
                 >
                <router-link :to="`/${plantFetch.id}`"><input type="button" class="btn btn-dark btn-sm" value="Read more"></router-link>
                </div>
                <a v-if="!reveal" href="#" id="open-btn" class="btn btn-dark btn-sm" @click="revealguide"
                    >Open Guide</a
                >
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return { reveal: false }
        },
        props: {
            plantFetch: {
                required: true,
                type: Object
            }
        },
        methods: {
            revealguide: function (e) {
                e.preventDefault()
                this.reveal = !this.reveal
            }
        }
    }
</script>
<style scoped>
    .col {
        display: flex;
        justify-content: center;

        padding: 0 5vw;
    }
    .card-title {
        font-family: 'Philosopher', sans-serif;
    }

    .card {
        margin-top: 8vw;
    }
</style>
