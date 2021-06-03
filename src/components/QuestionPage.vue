<template>
  <div>
    <the-header :score="{ score, total }" />
    <questions :question="questions[curIndex]" @handleNext="handleNext" />
  </div>
</template>

<script>
import Questions from './Questions';
import TheHeader from './Header';
export default {
  name: 'QuestionPage',
  components: {
    Questions,
    TheHeader,
  },

  data: () => ({
    questions: [],
    curIndex: 0,
    score: 0,
    total: 0,
  }),

  mounted() {
    this.fetchQuestion();
  },
  methods: {
    /**
     * be called when user click Next btn in Question component
     * @param {boolean} isCorrect the correctness of the user's answer
     */
    handleNext(isCorrect) {
      // if there is no argument => get next question
      if (isCorrect == undefined) {
        this.curIndex++;
        return;
      }

      this.total++;
      if (isCorrect) this.score++;
      // load more questions
      if (this.curIndex == 8) {
        this.fetchQuestion();
      }
    },
    /**
     * fetch questiosn and push to data.duestions
     */
    fetchQuestion() {
      fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple')
        .then(res => res.json())
        .then(data => {
          this.questions.push(...data.results);
        });
    },
  },
};
</script>

<style></style>
