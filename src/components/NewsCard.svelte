<script>
    export let title;
    export let version;
    export let text;
</script>

<style>
    .cust-image{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
</style>

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