// @ts-nocheck
import { writable } from "svelte/store";

function createNotes(){
    const { subscribe, set, update } = writable([]);

    const add_note = (note) => {
        update((notes) => {
            let id;
            if(!notes.length){
                id = 0;

            }else{
                let lastNid = notes[notes.length - 1].id;
                id = lastNid + 1;
            }

            return [...notes, {id, ...note}]
        });
    }

    return {
        subscribe,
        add: add_note,
        delete: (id) => update((notes) => notes.filter(note => note.id !== id)),
        populate: (data) => set(data)
    }

}

export const notes = createNotes();