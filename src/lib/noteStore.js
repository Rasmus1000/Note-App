// @ts-nocheck
import { writable } from "svelte/store";
//import og_notes from "./notes.json";

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

            //let {text, timestamp, nimi, id} = note;
            //let course = {nimi, id};
            return [...notes, {id, ...note}]
        });
    }

    return {
        subscribe,
        //add: (note) => update((notes) => [...notes, note]),
        add: add_note,
        delete: (id) => update((notes) => notes.filter(note => note.id !== id)),
        reset: () => set([]),
        populate: (data) => set(data)
    }

}

export const notes = createNotes();