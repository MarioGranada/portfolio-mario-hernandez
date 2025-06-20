import ProjectsList from '@/src/components/Pages/Home/ProjectsList';
import getFirebaseData from '@/src/components/Pages/Home/helpers/getFirebaseData';
import Image from 'next/image';
import Link from 'next/link';

const Home = async () => {
  const { data } = await getFirebaseData();
  const { projects } = data;

  return (
    <>
      <section className="flex gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Image
            src="/assets/images/portfolio_photo1.jpeg"
            width={100}
            height={100}
            alt="Mario Hernandez Porfolio Photo"
            className="clip-path-circle self-center"
          />
          <div>
            <h1 className="prose">Hi! Welcome to my site!</h1>
            <p>
              My name is Mario Hernandez. I am a software developer with a
              passion for creating innovative solutions. I have a strong
              background in software development and have worked on a wide range
              of projects.
            </p>
            <Link href="/about">Want to read more?</Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full">
        <h2>Github contribution graph</h2>
      </section>
      <section className="flex w-full">
        <ProjectsList projects={projects} />
      </section>
    </>
  );
};

export default Home;
