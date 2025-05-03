const Home = async () => {
  const projects = await fetch(
    'https://portfolio-db-43961-default-rtdb.firebaseio.com/projects.json'
  );
  const data = await projects.json();
  console.log('in here oe projects', data);
  return (
    <div>
      Main profile image full rounded short description with read more link to
      about Github contribution graph List of projects with image, title, short
      description, link to project
      {data.map((item: Record<string, string>) => (
        <div key={item.name}> {item.name} </div>
      ))}
    </div>
  );
};

export default Home;
