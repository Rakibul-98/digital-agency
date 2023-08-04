import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className='rounded-lg opacity-70 hover:opacity-100 shadow-2xl hover:shadow-none'>
            <a target='_blank' rel='noReferrer' href={project.link}><img className='border border-gray-100 rounded-lg' src={project.img} alt="" /></a>
        </div>
    );
};

export default ProjectCard;