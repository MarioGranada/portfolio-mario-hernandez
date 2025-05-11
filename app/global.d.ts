interface Document {
  startViewTransition(callback: () => void): void;
}

type Project = {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  inProjectroute: string;
  tags: string[];
  mainStack: string;
  isTopProject: boolean;
};
