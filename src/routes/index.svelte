<svelte:head>
	<title>News</title>
</svelte:head>

<script>
    import NewsCard from '../components/NewsCard.svelte'


    let history = [{
        id: 1,
        title: 'Открытие',
        version: '0.0.1',
        text: 'Открытие личного блога. Добавлена личная информация, построена связь с firebase, реализован базовый функционал блога и новостей.'
    }]
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

	@media (max-width: 480px) {
		h1 {
			font-size: 3em;
		}
	}
</style>

<div class="container">
    <h1>НОВОСТНАЯ ЛЕНТА</h1>
    {#if history.length>0}
    {#each history as h}
        <NewsCard title={h.title} version={h.version} text={h.text}/>
    {/each}
    {:else}
        <h3>Здесь пока ничего нет</h3>
    {/if}
</div>
