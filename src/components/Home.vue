<template>
  <div>
    <br />
    <div class="text-center">
      <b-nav-form>
        <b-button size="sm" class="my-2 my-sm-10 danger" v-b-modal.addNote>Add Note</b-button>
      </b-nav-form>
    </div>
    <br />
    <div>
      <b-container class="bv-row" fluid>
        <b-row class="mb-3">
          <b-card
            v-for="(note,index) in notes"
            :key="note"
            :title="note.title"
            :img-src="imageUrl"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mr-50"
          >
            <b-card-text>{{note.actual_note}}.</b-card-text>

            <b-button
              variant="primary"
              v-on:click="getTextInEditForm(index)"
              v-b-modal.editNote
            >Edit Note</b-button>&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
            <b-button variant="danger" v-on:click="deleteNote(index)">Delete</b-button>
          </b-card>
        </b-row>
      </b-container>
      <b-modal id="addNote" hide-footer title="Add Note">
        <b-form @submit="onSubmit">
          <b-form-group
            id="title-input"
            label="Title"
            label-for="Title"
            description="Add Your Note Title"
          >
            <b-form-input
              id="Title"
              type="text"
              placeholder="Enter Note Title"
              required
              v-model="title"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="note-input"
            label="Note"
            label-for="note"
            description="Add Your Note Here"
          >
            <b-form-textarea
              id="textarea"
              v-model="noteText"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-button class="mt-3" variant="outline-success" block type="submit">Add Note</b-button>
          <b-button class="mt-2" variant="outline-warning" block type="reset">Clear</b-button>
          <b-button
            class="mt-2"
            variant="outline-danger"
            block
            v-on:click="cancel('addNote')"
          >Cancel</b-button>
        </b-form>
      </b-modal>
      <!-- TODO: Edit Modal Started -->
      <b-modal id="editNote" hide-footer title="Edit Note">
        <b-form @submit="editNote">
          <b-form-group
            id="title-input"
            label="Title"
            label-for="Title"
            description="Add Your Note Title"
          >
            <b-form-input
              id="Title"
              type="text"
              placeholder="Enter Note Title"
              required
              v-model="editFormData.edit_title"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="note-input"
            label="Note"
            label-for="note"
            description="Add Your Note Here"
          >
            <b-form-textarea
              id="textarea"
              v-model="editFormData.edit_text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-button class="mt-3" variant="outline-danger" block type="submit">Add Note</b-button>
          <b-button
            class="mt-2"
            variant="outline-warning"
            block
            v-on:click="cancel('editNote')"
          >Cancel</b-button>
        </b-form>
      </b-modal>
      <!-- Edit model ended -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")),
      title: "",
      noteText: "",
      imageUrl:
        "https://picsum.photos/600/300/?image=" +
        Math.floor(Math.random() * 25),
      editFormData: {
        edit_title: "",
        edit_text: "",
        index_of_note: ""
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let all_saved_notes = JSON.parse(localStorage.getItem("notes"));
      console.clear();
      console.log(all_saved_notes);
      console.log(this.title);
      console.log(this.noteText);
      let note = { title: this.title, actual_note: this.noteText };
      console.log(note);
      all_saved_notes.push(note);
      console.log(JSON.stringify(all_saved_notes));
      localStorage.setItem("notes", JSON.stringify(all_saved_notes));
      self.notes = JSON.parse(localStorage.getItem("notes"));
      this.notes.push(note);
      this.title = "";
      this.noteText = "";
      this.$bvModal.hide("addNote");
    },
    editNote(e) {
      e.preventDefault();
      console.clear();
      let notes = JSON.parse(localStorage.getItem("notes"));
      let note_to_be_edited = notes[this.editFormData.index_of_note];
      note_to_be_edited.title = this.editFormData.edit_title;
      note_to_be_edited.actual_note = this.editFormData.edit_text;
      notes[this.editFormData.index_of_note] = note_to_be_edited;
      localStorage.setItem("notes", JSON.stringify(notes));
      this.notes = JSON.parse(localStorage.getItem("notes"));
    },
    deleteNote(id) {
      console.clear();
      let notes = JSON.parse(localStorage.getItem("notes"));
      notes.splice(id, 1);
      this.notes = notes;
      localStorage.setItem("notes", JSON.stringify(notes));
      console.log(notes, id);
    },
    getTextInEditForm(ind) {
      console.clear();
      let arry_of_the_note_which_need_to_be_edited = JSON.parse(
        localStorage.getItem("notes")
      )[ind];
      this.editFormData.edit_title =
        arry_of_the_note_which_need_to_be_edited.title;
      this.editFormData.edit_text =
        arry_of_the_note_which_need_to_be_edited.actual_note;
      this.editFormData.index_of_note = ind;
      console.log(arry_of_the_note_which_need_to_be_edited);
      console.log(ind);
    },
    cancel(id) {
      console.log(id);
      this.$bvModal.hide(id);
    },
    clear() {
      (this.title = ""), (this.noteText = "");
    }
  },
  mounted() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }
};
</script>
<style scoped>
* {
  /* background-color: coral; */
}
.card {
  /* align: center; */
  margin-left: 10px;
  background-color: #28a745 !important;
  color: aliceblue;
}
</style>