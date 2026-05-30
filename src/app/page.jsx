async function Home() {
  const testData = await new Promise((res, rej) => {
    setTimeout(() => {
      if (true) res("SUCCESS!");
      else rej("ERROR!");
    }, 3000);
  });

  return <div>Home Page!</div>;
}

export default Home;
