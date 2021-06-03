<template>
  <div>
    <h3 v-if="!question.question">Loading question.....</h3>
    <v-card v-else class="mx-auto pa-5" max-width="500" tile>
      <v-list>
        <v-subheader>
          <h3>{{ editedQuestion }}</h3>
        </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, idx) in answers"
            :key="item"
            :class="[idx == correctIndex && isSubmit ? 'green' : '', 'lighten-2']"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn :color="btnOption.color" class="mx-auto d-block" @click="handleClick">{{ btnOption.text }}</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: () => ({
        question: '',
        correct_answer: '',
        incorrect_answers: [],
      }),
    },
  },
  data() {
    return {
      selectedItem: null,
      isSubmit: false,
    };
  },
  computed: {
    answers() {
      return this.shuffle([this.question.correct_answer, ...this.question.incorrect_answers]);
    },
    correctIndex() {
      return this.answers.indexOf(this.question.correct_answer);
    },
    editedQuestion() {
      return this.question.question.replaceAll('&quot;', '"');
    },
    btnOption() {
      return {
        color: this.isSubmit ? 'error' : 'success',
        text: this.isSubmit ? 'Next' : 'Submit',
      };
    },
  },
  watch: {
    answers() {
      this.selectedItem = null;
      this.isSubmit = false;
    },
  },
  methods: {
    shuffle(array) {
      const length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      let index = -1;
      const lastIndex = length - 1;
      const result = [...array];
      while (++index < length) {
        const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
        const value = result[rand];
        result[rand] = result[index];
        result[index] = value;
      }
      return result;
    },
    isCorrect() {
      return this.correctIndex == this.selectedItem;
    },
    handleClick() {
      if (!this.isSubmit) {
        this.$emit('handleNext', this.isCorrect());
        this.isSubmit = !this.isSubmit;
      } else {
        this.$emit('handleNext');
      }
    },
  },
};
</script>

<style></style>
