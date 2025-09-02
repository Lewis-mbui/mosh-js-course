// method --> object
// function --> global (window)

/*
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag); // The call-back function's this references window object
    });
  }
}; */

// Solution
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this); //passed the object into the forEach Method
  }
};

video.showTags();