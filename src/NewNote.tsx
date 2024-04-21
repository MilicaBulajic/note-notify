import { NoteData, Tag } from "./App"
import NoteForm from "./NoteForm"

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
    return (
        <>
            <div>NewNote</div>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
        </>
    )
}

export default NewNote