/*
// Method 1:
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });
  }
}; */

//video.showTags();

/*
// Method 2: Using function methods
function playVideo(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(this);
}

playVideo.call({ name: 'mosh' }, 1, 2)
playVideo.apply({ name: 'mosh' }, [1, 2]);  // Pass arguments as arrays
playVideo.bind({ name: 'Lewis' })();  //Returns a function that will always point to the passed object
//playVideo();


const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }.bind(this));
  }
};

video.showTags();
*/

// Method 3 (Starting from ES6: Arrow functions)
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }); // Arrow function inherits "this" from the containing function
  }
};

video.showTags();