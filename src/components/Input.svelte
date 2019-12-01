<script>
  export let name;
  export let error;
</script>

<style>
  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 6px;
    transition: all 200ms;
  }
  input:focus {
    outline: none;
    border-color: lightskyblue;
  }
  p {
    color: darkred;
    margin: 0;
    margin-top: 10px;
  }
</style>

<div class={$$props.class}>
  <input name={name} autocomplete="off"/>
  {#if error}
    <p>{error}</p>
  {/if}
</div>
