import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  project: Project;
};

const ProjectListItem: FC<Props> = ({ project }) => {
  return (
    <li className="flex flex-col">
      <Link href={project.url} className=" relative rounded-lg">
        <Image
          src="/assets/images/stock_photo.jpg"
          width={375}
          height={375}
          className="aspect-16/9 w-full mx-auto max-w-sm rounded-lg object-cover"
          alt={project.name}
        />
      </Link>

      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p className="flex gap-4">
        <Link href={project.url}>Live Demo</Link>
        <Link href={project.githubUrl}>GitHub</Link>
      </p>
    </li>
  );
};

export default ProjectListItem;
