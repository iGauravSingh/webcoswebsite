import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import CourseCard from './CourseCard'

const courseData = [
  {id: 1, title: 'MERN Stack', tech: ['React', 'Node', 'Mongodb', 'Express'], desc: 'Use Mern Stack to Develop Full Stack APp.', image: '/coursepage/five.jpg'},
  {id: 2, title: 'MEAN Stack', tech: ['Angular', 'Node', 'Mongodb', 'Express'], desc: 'Use Angular to design Full Stack App.', image: '/coursepage/four.jpg'},
  {id: 3, title: 'MEVN Stack', tech: ['Vue', 'Node', 'Mongodb', 'Express'], desc: 'Use Vue to Design Full Stack web App.', image: '/coursepage/eleven.jpg'},
  {id: 4, title: 'LAMP Stack', tech: ['Linux', 'Apache', 'MySQL', 'PHP'], desc: 'Leverege LAMP Stack to design wen app.', image: '/coursepage/eight.jpg'},
  {id: 5, title: 'Mobile App', tech: ['React Native', 'Node', 'Mongodb', 'Express'], desc: 'Design mobile apps for android nad apple.', image: '/coursepage/three.jpg'},
  {id: 6, title: 'Python', tech: ['Python'], desc: 'Master Python by making 10 apps.', image: '/coursepage/three.jpg'},
  {id: 7, title: 'Backend Master', tech: ['Node', 'Django', 'Go','Spring Boot', 'System Design'], desc: 'Become a Expert Backend Masters.', image: '/coursepage/six.jpg'},
  {id: 8, title: 'Frontend Master', tech: ['React', 'React Native', 'Angular', 'Fluter'], desc: 'Become a front end wizard by desiging awwwards like website.', image: '/coursepage/one.jpg'},
  {id: 9, title: 'Cloud Master', tech: ['AWS', 'GCP'], desc: 'Prepare for AWS Certified Solutions Architect.', image: '/coursepage/twelve.jpg'},
  {id: 10, title: 'Microservices Expert', tech: ['AWS','Docker', 'Kubernetes'], desc: 'Learn new design strategy for api using micoservices architecture.', image: '/coursepage/ten.jpg'},
  {id: 11, title: 'IoT', tech: ['Embedded','IoT', 'mqtt', 'AWS IoT core'], desc: 'Embedded and IoT ', image: '/coursepage/seven.jpg'},
]

const page = () => {
  return (
    <>
    <Navbar />
    <div className=' mb-12 px-11'>
        <h3 className=' mt-8 text-2xl text-slate-950 tracking-widest mb-7 text-center'>Our Courses</h3>

        
        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-3 justify-center'>
          {courseData.map((item) => (
            <div key={item.id} className=' w-full flex justify-center'>
              <CourseCard id={item.id} title={item.title} tech={item.tech} desc={item.desc} image={item.image} />
            </div>
          ))}
        
        </div>
        </div>
    <Footer />
    
    </>
  )
}



export default page