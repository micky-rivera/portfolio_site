export {};

declare global {

    type Project = {
        title: string,
        desc: string,
        imgUrl: string,
        gitUrl: string,
    };

    type Projects = Project[];

    interface ProjectsProps {
        data: Projects;
    };

    interface ProjectCardProps {
        data: Projects;
    };
    
    interface HomeProps {
        data: Projects;
    };
};
