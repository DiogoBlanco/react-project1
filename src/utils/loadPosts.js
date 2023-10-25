export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts"); // Busca dados na url
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos"); // Busca dados na url
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]); // espera as promisses
  const postsJson = await posts.json(); // espera e converte em json
  const photosJson = await photos.json(); // espera e converte em json
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }; // mapeia os posts, joga em um array e atribui um cover para cada post
  });
  return postsAndPhotos;
};
