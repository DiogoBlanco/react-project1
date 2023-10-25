import "./App.css";
import { Component } from "react";

import { Posts } from "./components/Posts";
import { loadPosts } from "./utils/loadPosts";

export default class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts(); // atualiza os posts quando a página for montada
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos }); // muda o estado dos posts
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}
