const paths = {
  home() {
    return "/";
  },
  topic(topic: string) {
    return `/topics/${topic}`;
  },
  createPost(topic: string) {
    return `/topics/${topic}/posts/new`;
  },
  post(post: string, topic: string) {
    return `/topics/${topic}/posts/${post}`;
  },
};
export default paths;
