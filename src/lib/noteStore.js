// @ts-nocheck
import { writable } from "svelte/store";
import og_notes from "./notes.json";

function createNotes(){
    const { subscribe, set, update } = writable(og_notes);

    const add_note = (note) => {
        update((notes) => {
            let nid;
            if(!notes.length){
                nid = 0;

            }else{
                let lastNid = notes[notes.length - 1].nid;
                nid = lastNid + 1;
            }

            //let {text, timestamp, nimi, id} = note;
            //let course = {nimi, id};
            return [...notes, {nid, ...note}]
        });
    }

    return {
        subscribe,
        //add: (note) => update((notes) => [...notes, note]),
        add: add_note,
        delete: (nid) => update((notes) => notes.filter(note => note.nid !== nid)),
        reset: () => set([])
    }

}

export const notes = createNotes();