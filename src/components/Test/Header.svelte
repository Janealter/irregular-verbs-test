<script>
  import verbsByCategories from '../../lib/verbs';
  import Button from '../Button';

  function onCategoryClick (name) {
    let verbs = [];
    if (name === 'all') verbs = getAllVerbs(verbsByCategories);
    else verbs = verbsByCategories.find(({ name: categoryName }) => categoryName === name).verbs;
    handleCategoryClick(name, verbs);
  }

  function getAllVerbs (verbsByCategories) {
    return verbsByCategories.reduce((acc, { verbs }) => {
      return [...acc, ...removeSameVerbs(verbs, acc)];
    }, []);
  }

  function removeSameVerbs (verbsToRemove, verbs) {
    return verbsToRemove.filter(verb => !verbs.some(vrb => vrb[0] === verb[0]));
  }

  export let handleCategoryClick;
</script>

<style>
  header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  @media (max-width: 1080px) {
    header {
      justify-content: center;
    }
  }
  p {
    margin: 15px 0;
  }
  :global(.test-header-button) {
    margin: 5px;
  }
</style>

<header>
  <p><b>Choose category:</b></p>
  <Button class="test-header-button" title="Все" onClick={() => { onCategoryClick('all'); }}>ALL</Button>
  {#each verbsByCategories as { name, desc, verbs }}
    <Button class="test-header-button" title={desc} onClick={() => { onCategoryClick(name); }}>{name}</Button>
  {/each}
</header>
