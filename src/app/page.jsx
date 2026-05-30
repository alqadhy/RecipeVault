async function Home() {
  const testData = await new Promise((res) => {
    setTimeout(() => res("DONE!"), 10000);
  });

  return <div>Home Page!</div>;
}

export default Home;
