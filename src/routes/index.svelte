<svelte:head>
	<title>News</title>
</svelte:head>

<script context="module">
import {db} from "../fb.js"
// import "firebase/firestore"
 	export async function preload(page, session) {
 	    let history = [];

        let fblist = await db.collection("history").get();
 		fblist.forEach((doc)=>{
 		    history.push(doc.data())
        });

 		history.sort(( a, b ) => b.id - a.id);
 		return {history: history};
 	}
</script>

<script>
    import NewsCard from '../components/NewsCard.svelte'
    import { fly } from 'svelte/transition';
    export let history;


    // let history = [{
    //     id: 1,
    //     title: 'Открытие',
    //     version: '0.0.1',
    //     text: 'Открытие личного блога. Добавлена личная информация, построена связь с firebase, реализован базовый функционал блога и новостей.'
    // }]
</script>

<style>
	/*h2{*/
		/*text-align: center;*/
		/*margin: 0 auto;*/
	/*}*/

	/*h1 {*/
		/*font-size: 2.8em;*/
		/*text-transform: uppercase;*/
		/*font-weight: 700;*/
		/*margin: 0 0 0.5em 0;*/
	/*}*/

	/*img {*/
		/*width: 100%;*/
		/*max-width: 400px;*/
		/*margin: 0 0 1em 0;*/
	/*}*/

	.container{
	    /*min-height: 100vh;*/
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 3em;
		}
	}
	@media (max-width: 360px) {

	}
</style>

<div class="container"  in:fly="{{ delay: 1000, x: -500, duration: 500 }}"
                        out:fly="{{ delay: 0, x: 500, duration: 500 }}">
    <h1>НОВОСТНАЯ ЛЕНТА</h1>
    {#if history.length>0}
    {#each history as h}
        <NewsCard title={h.title} version={h.version} text={h.text}/>
    {/each}
    {:else}
        <h3>Здесь пока ничего нет</h3>
    {/if}
</div>
