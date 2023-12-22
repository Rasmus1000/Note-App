<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';
    import { courses } from '$lib/courseStore.js';
    import { selectedId } from "$lib/selectStore";

    // @ts-ignore
    /**
	 * @type {number | null | undefined}
	 */
    let selectedCourse = 0;

    onMount(() => {
        selectedId.update(prev => prev = selectedCourse);
    });

    function changeHandler(event) {
        const selectedIndex = event.target.selectedIndex;
        selectedCourse = selectedIndex;
        selectedId.update(prev => prev = selectedCourse); 
    } 

    onDestroy(() => {
        selectedId.set(null)
    });
</script>

<!-- Alasvetovalikko -->
<select on:change={changeHandler}>
  {#each $courses as course}
    <option value={course.id}>{course.name}</option>
  {/each}
</select>

<style>
  select{
    margin-bottom: 20px;
  }
</style>
