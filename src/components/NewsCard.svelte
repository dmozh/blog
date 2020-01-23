<script>
    export let title;
    export let version;
    export let text;


    let width;
</script>

<style>
    .cust-image{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    @media (max-width: 360px) {
        h4{
            font-size: large;
        }
        h5{
            font-size: medium;
        }
    }

</style>

<svelte:window bind:innerWidth="{width}"/>
{#if width<500}
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <h4>{title}</h4>
          <h5>Версия сайта: {version}</h5>
          <p>{text}</p>
        </div>
      </div>

    </div>
{:else}
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <h4>{title}</h4>
          <h5>Версия сайта: {version}</h5>
          <p>{text}</p>
        </div>
      </div>
      <div class="card-image cust-image">
          <img src="new_icon.png">
        </div>
    </div>
{/if}