import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title:"SaaS Landing Page",
    description:"A beautiful landing page app using React and Tailwind",
    img: "https://picsum.photos/200/300?random=1",
    tags:["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title:"SaaS Landing Page ",
    description:"A beautiful landing page app using React and Tailwind",
    img: "https://picsum.photos/200/300?random=2",
    tags:["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 1,
    title:"SaaS Landing Page",
    description:"A beautiful landing page app using React and Tailwind",
    img: "https://picsum.photos/200/300?random=3",
    tags:["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "#",
  }
]
const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>Featured <span className='text-primary'> Projects</span></h2>
      
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>Here are some of my recent projects. Each Project was carefully crafted with attention to detail, performance and user experience
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {projects.map((project,key)=>(
            <div key = {key} className = 'group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden '>
                <img src ={project.img} alt = {project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4 '>
                  {project.tags.map((tag, k)=>(
                    <span key = {k} className='px-2 py-1 text-xs font-medium rounded-full bg-secondary-foreground border bg-primary/20'>{tag}</span>
                  ))}
                </div>
              
                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                <div className='flex justify-between items-center'> 
                  <div className='flex space-x-3'>
                    <a href={project.demoURL} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    target='_blank'>
                      <ExternalLink size={20}/>
                    </a>
                    <a href={project.githubURL} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    target='_blank' >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className='text-center mt-12'>
          <a href="https://github.com/vinitagurani" className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>
            Check My Gitbub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection