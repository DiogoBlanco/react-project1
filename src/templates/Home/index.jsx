import "./styles.css";

import { Component } from "react";

import { Posts } from "../../components/Posts";

import { Button } from "../../components/Button";

import { loadPosts } from "../../utils/loadPosts";

import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts(); // atualiza os posts quando a página for montada
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage), // muda o estado dos posts
      allPosts: postsAndPhotos,
    }); // muda o estado dos posts
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        {!!searchValue && (
          <>
            <h1>Search value: {searchValue}</h1>
          </>
        )}
        <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>Não existem posts</p>}
        <div className="button-container">
          {!searchValue && (
            <Button
              text={"Load More Posts"}
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
