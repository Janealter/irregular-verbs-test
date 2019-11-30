<script>
  import Header from './components/Header';
  import Main from './components/Main';

  let verbs;
  let currentCategoryName = "not chosen";
  let pointsCount = 0;

  function onCategoryClick (name, selectedVerbs) {
    verbs = selectedVerbs;
    currentCategoryName = name;
    pointsCount = 0;
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
  }
  :global(#root) {
    height: 100%;
    padding: 10px;
  }
  :global(*) {
    box-sizing: border-box;
  }
  p {
    margin: 0;
    padding: 15px 0;
  }
  @media (max-width: 1080px) {
    p {
      text-align: center;
    }
  }
</style>

<Header handleCategoryClick={onCategoryClick} />
<p><b>Current category:</b> {currentCategoryName}</p>
<p><b>Points:</b> {pointsCount}</p>
{#if verbs}
  <Main verbs={verbs} onRightAnswer={() => { pointsCount++; }} />
{/if}
