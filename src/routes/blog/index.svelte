<script context="module">
	export async function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
	}
</script>

<script>
    import { fly } from 'svelte/transition';
    let width;

	export let posts;
	let theme = "Автоматизированная система компьютерных исследований 'Компьютерная семиография'"
</script>

<style>

    .container{
        /*min-height: 100vh;*/
    }

	.card{
	}

    .cust-img-cont{
        align-items: center;
        display: flex;
    }

    .date{
        font-size: 10pt;
    }
	@media (max-width: 480px) {
        h1 {
            font-size: 3rem;
        }
        h2 {
            font-size: 2rem;
        }
        h3{
            font-size: 1.6rem;
        }
        h4{
            font-size: 1.3rem;
        }

        img{
            width: 100px;
            height: 100px;
        }
        .date{
            font-size: 8pt;
        }
    }

    .cu{
        display: flex;
        justify-content: space-between;
    }
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>


<svelte:window bind:innerWidth="{width}"/>
<div class="container" in:fly="{{ delay: 500, y: 500, duration: 500 }}"
                       out:fly="{{ delay: 0, y: -500, duration: 500 }}">
    <h1>Научная деятельность</h1>
    <h2>Тема работы: {theme}</h2>
    <h3>Ход работы:</h3>
    {#if posts.length>0}
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li> -->
		<div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <h4>{post.title}</h4>
              <!--<p>{post.description}</p>-->
              {#if width<480}
                <div class="date">{post.date}</div>
              {:else}
                <div class="date">Была добавлена {post.date}</div>
              {/if}
            </div>
            <div class="card-action cu">
              <a  href='blog/{post.slug}'>В полную</a>

            </div>
          </div>
          <div class="card-image cust-img-cont">
              <img src="courses_icon.png">
            </div>
        </div>
	{/each}
	{:else}
	    <div>
	        <h4>Здесь пока ничего нет :(</h4>
        </div>
    {/if}
</div>
