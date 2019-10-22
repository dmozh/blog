<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';
    const dispatch = createEventDispatcher();

    let width;

    let visible_menu = false;

    function changeVisible() {
      visible_menu = !visible_menu;
    }

	export let segment;
    // on:mouseclick = "{visible_menu = !visible_menu}"
</script>

<style lang="scss">

    @keyframes fadeIn{
        0% {
            opacity: 0;
        }
        10% {
            opacity: 0.1;
        }
        25% {
            opacity: 0.25;
        }
        35% {
            opacity: 0.45;
        }
        50% {
            opacity: 0.5;
        }
        65%{
            opacity: .65;
        }
        75% {
            opacity: 0.75;
        }
        85% {
            opacity: .85;
        }
        100% {
            opacity: 1;
        }
    }
    .visible{
        transform: none;
    }
	nav {
	    z-index: 10;
	    position: fixed;
	    display: flex;
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		justify-content: space-between;
		transform: translate(0,calc(-100% - 1rem));
        transition: transform 0.2s;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: flex;
		clear: both;
	}

	li {
		display: flex;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-flex;
	}

	.selected::after {
        opacity: 0;
        animation: fadeIn .5s 1;
        animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
        animation-delay: .1s; /* Задержка перед началом */
    	transition: .5s;
	    /*transition-timing-function: ease-out;*/
	    padding: 0 5px 0 5px;
		position: absolute;
		content: '';
		width: calc(100%);
		height: 4px;
		background-color: #95a7ff;
		display: flex;
		left: 0;
		bottom: -1px;


	}

	a {
		text-decoration: none;
	    display: flex;
	}

	.cust {
	    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        /*background: #d5abe2;*/
        margin-bottom: 5px;
	}

    .img-container{
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-container:hover{
        background: rgba(0,0,0,0.1);
    }

	.img-container>img{
	    max-width: 35px;
	    max-height: 35px;
	}

	.menu{
	    display: flex;
	    position: fixed;
	    top: 56px;
	    left: 0;
	    width: 150px;
	    z-index: 1000;
	    background: #ee8386;
	}

	@media (max-width: 450px) {
	    ul {
            margin: 0;
            padding: 0;
        }

        /* clearfix */
        ul::after {
            content: '';
            display: flex;
            clear: both;
        }

        li {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            float: left;
        }
	}
</style>


<svelte:window bind:innerWidth="{width}"/>
{#if width < 768}
<nav class="cust visible">
    <div class="img-container"><img on:click = '{changeVisible}' src="menu_icon.png"></div>
    {#if visible_menu == true}
        <div transition:fly="{{ x: -150, duration: 1000 }}" class="menu">
            <ul>
                <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>БЛОГ НИР</a></li>
                <li><a class='{segment === undefined ? "selected" : ""}' href='.'>НОВОСТИ</a></li>
                <li><a class='{segment === "about" ? "selected" : ""}' href='about'>ОБ АВТОРЕ</a></li>
                <!--<li><a class='{segment === "about" ? "selected" : ""}'>УЧЕБНЫЙ<br>МАТЕРИАЛ</a></li>-->
                <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                     the blog data when we hover over the link or tap it on a touchscreen -->
            </ul>
        </div>
    {/if}
</nav>
{:else}
<nav class="cust visible">
	<ul>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>БЛОГ НИР</a></li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>НОВОСТИ</a></li>
		<!--<li><a class='{segment === "about" ? "selected" : ""}'>УЧЕБНЫЙ МАТЕРИАЛ</a></li>-->
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	</ul>
	<ul>
	    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>ОБ АВТОРЕ</a></li>
    </ul>
</nav>
{/if}