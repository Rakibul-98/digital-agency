import React from 'react';
import SecTitle from '../Shared/SecTitle/SecTitle';
import ProjectsMenu from './ProjctsMenu/ProjectsMenu';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
    const projects = [
        { id: 1, img: "https://i.ibb.co/m9zJMq8/p1.png", link: "https://portfolio-rakibul.netlify.app/" },
        { id: 2, img: "https://i.ibb.co/vQBy8Nv/p2.png", link: "https://grocery-shop-70585.web.app/" },
        { id: 3, img: "https://i.ibb.co/bQRY0Nc/p3.png", link: "https://bookish-43bb7.web.app/" },
        { id: 4, img: "https://i.ibb.co/Sd1yqB0/p4.png", link: "https://coffee-shop-0-by-rakibul.netlify.app/" },
        { id: 5, img: "https://i.ibb.co/rM3RbBH/p5.png", link: "https://restaurant-rakibul.netlify.app/" },
        { id: 6, img: "https://i.ibb.co/PQDG4BT/p6.png", link: "https://pizza-shop-by-rakibul.netlify.app/" },
    ]

    return (
        <div id='work' className="bg-[url('https://i.ibb.co/wg0jBQ4/bg2.png')] bg-no-repeat">
            <div className='w-10/12 mx-auto py-20'>
                <SecTitle text={"some of our finest work"} title={"projects"}></SecTitle>
                <ProjectsMenu></ProjectsMenu>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10'>
                    {
                        projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;