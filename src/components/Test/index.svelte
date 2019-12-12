<script>
  import Header from './Header';
  import Main from './Main';

  let verbs;
  let currentCategoryName = "not chosen";
  let pointsCount = 0;

  $: pointsCountText = verbs ? `${pointsCount} / ${verbs.length}` : pointsCount;

  function onCategoryClick (name, selectedVerbs) {
    verbs = selectedVerbs;
    currentCategoryName = name;
    pointsCount = 0;
  }
</script>

<style>
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
<p><b>Points:</b> {pointsCountText}</p>
{#if verbs}
  <Main verbs={verbs} onRightAnswer={() => { pointsCount++; }} />
{/if}
