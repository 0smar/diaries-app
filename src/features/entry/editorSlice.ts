import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entry } from '../../interfaces/entry.interface';
import { defaultCipherList } from 'constants';

interface EditorState {
  canEdit: Boolean;
  currentlyEditing: Entry | null;
  activeDiaryId: string | null;
}

const initialState: EditorState = {
  canEdit: false,
  currentlyEditing: null,
  activeDiaryId: null,
}

const editor = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCanEdit(state, { payload }: PayloadAction<boolean>) {
      state.canEdit = payload != null ? payload : !state.canEdit;
    },
    setCurrentlyEditing(state, { payload }: PayloadAction<Entry | null>) {
      state.currentlyEditing = payload;
    },
    setActiveDiaryId(state, { payload }: PayloadAction<string>) {
      state.activeDiaryId = payload;
    },
  },
});

export const { setCanEdit, setCurrentlyEditing, setActiveDiaryId } = editor.actions;
export default editor.reducer;