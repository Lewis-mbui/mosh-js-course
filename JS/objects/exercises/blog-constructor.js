// Draft of a Post that has not been posted yet
let post = new BlogPost('a', 'b', 'c');
console.log(post);

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}