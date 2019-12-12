<script>
  import Button from './components/Button';
  import Test from './components/Test';
  import VerbsList from './components/VerbsList';

  let mode = 'not chosen';

  function onModeClick (modeName) {
    mode = modeName;
  }
</script>

<style>
  :global(html) {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 20px;
    height: 100%;
  }
  :global(body) {
    height: 100%;
    margin: 0;
    overflow-y: scroll;
  }
  :global(#root) {
    height: 100%;
    padding: 10px;
  }
  :global(*) {
    box-sizing: border-box;
  }
  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  @media (max-width: 1080px) {
    nav {
      justify-content: center;
    }
  }
  p {
    margin: 0;
    padding: 15px 0;
  }
  :global(.mode-button) {
    margin: 5px;
  }
</style>

<nav>
  <p><b>Mode:</b></p>
  <Button class="mode-button" onClick={() => { onModeClick('test'); }} isSelected={mode === 'test'}>test</Button>
  <Button class="mode-button" onClick={() => { onModeClick('verbs-list'); }} isSelected={mode === 'verbs-list'}>verbs list</Button>
</nav>
{#if mode === 'test'}
  <Test />
{/if}
{#if mode === 'verbs-list'}
  <VerbsList />
{/if}
