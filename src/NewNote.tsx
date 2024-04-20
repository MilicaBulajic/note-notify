import { NoteData } from "./App"
import NoteForm from "./NoteForm"

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
}

function NewNote({ onSubmit }: NewNoteProps) {
    return (
        <>
            <div>NewNote</div>
            <NoteForm onSubmit={onSubmit} />
        </>
    )
}

export default NewNote