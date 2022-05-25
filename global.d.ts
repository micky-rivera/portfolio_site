export {};

declare global {

    type Project = {
        title: string,
        desc: string,
        img: string,
        githubUrl: string,
        demoUrl: string
    };

    type Projects = Project[];

    interface ProjectsProps {
        data: Projects;
    };

    interface ProjectCardProps {
        project: Project;
    };
    
    interface HomeProps {
        data: Projects;
    };
};
