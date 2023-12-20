<script>
    import { onDestroy } from 'svelte';
    import { courses } from '$lib/courseStore.js';
    import { selectedId } from "$lib/selectStore";

    // @ts-ignore
    /**
	 * @type {number | null | undefined}
	 */
    let selectedCourse = 0;

    // @ts-ignore
    function changeHandler(event) {
        const selectedIndex = event.target.selectedIndex;
        // @ts-ignore
        selectedCourse = selectedIndex;
        // @ts-ignore
        selectedId.update(prev => prev = selectedCourse); 
    } 

    onDestroy(() => {
        selectedId.set(null)
    });
</script>

<!-- Alasvetovalikko -->
<select on:change={changeHandler}>
  {#each $courses as course}
    <option value={course.id}>{course.nimi}</option>
  {/each}
</select>

{#if selectedCourse !== undefined && selectedCourse !== null}
  <p>Valittu objekti: {$courses[selectedCourse].nimi} {$courses[selectedCourse].id}</p>
{/if}
{#if selectedCourse === null || selectedCourse === undefined}
  <p>Valittu objekti: All</p>
{/if}

<style>
  select{
    margin-bottom: 20px;
  }
</style>
