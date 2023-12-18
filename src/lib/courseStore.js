import { writable } from 'svelte/store';
import og_courses from '$lib/courses.json'

function createCourses(){
    // @ts-ignore
    const { subscribe, set, update } = writable(og_courses);


    // @ts-ignore
    const add_course = (course) => {
        update((courses) => {
            let id = courses.length - 1;
            return [...courses, {nimi: course, id: id}]
        })
    }

    return {
        subscribe,
        // @ts-ignore
        //add: (course) => update((courses) => [...courses, course]),
        add: add_course,
        reset: () => set([])
    }
}

export const courses = createCourses();