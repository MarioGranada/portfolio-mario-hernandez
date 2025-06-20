import { FC } from 'react';
import ProjectListItem from './Project';

type Props = {
  projects: Project[];
};

const ProjectsList: FC<Props> = ({ projects }) => {
  return (
    <div className="flex flex-col w-full">
      <h1>Projects</h1>
      {projects.length === 0 && (
        <p className="text-center">Ups... 404 here! &#128521;</p>
      )}
      {projects.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item) => (
            <ProjectListItem key={item.name} project={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsList;
