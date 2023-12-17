import { writable } from 'svelte/store';

function createCourses(){
    let og_courses = [
    {nimi: "All"},
    {nimi: "Jeppis"},
    {nimi: "Jebulis"},
    {nimi: "Ok"}
    ];
    // @ts-ignore
    const { subscribe, set, update } = writable(og_courses);

    return {
        subscribe,
        // @ts-ignore
        add: (course) => update((courses) => [...courses, course]),
        reset: () => set([])
    }
}

export const courses = createCourses();