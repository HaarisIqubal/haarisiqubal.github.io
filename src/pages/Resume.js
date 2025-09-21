import React from 'react'
import { Typewriter ,Cursor} from 'react-simple-typewriter'
import resume from '../static/resume.pdf'
import { Helmet } from 'react-helmet'
import ScrollToTop from '../utils/ScrollToTop'

const experiences = [
   {
    period: 'Mar 2025 - Current',
    title: 'Working Student at Siemens Healthineers A.G.',
    location: 'Erlangen, Germany',
    department: 'Magnetic Resonance R&D Hardware and System Control and Receive',
    bullets: [
        "Collaborating with the hardware and software research department on FPGA development workflows, focusing on streamlining the toolchain for efficient FPGA design and testing.","Leveraging tools such as FuseSOC, Edalize, and Vunit to facilitate FPGA product development, ensuring smooth and optimized toolchain operation."
    ]
   },
   {
    period: '2022 - Current',
    title: 'Youtube Content Creator',
    location: 'New Delhi, India',
    bullets: [
      'Have around million of views on my channel with over 2k+ subscribers.',
      'Create videos for topics like Web Development, Data Science, Machine Learning, and many more.'
    ],
    link: { href: 'https://youtube.com/c/recoding', text: 'View Here' }
  },
  {
    period: '2018 - 2020',
    title: 'Full Stack Developer @ TekSolSys',
    location: 'New Delhi, India',
    bullets: [
      'Developed websites and web application for clients.',
      'Built CMS and E‑Commerce projects across different domains.'
    ]
  },
  {
    period: '2016 - 2018',
    title: 'Technical Writer @ Tech Awareness',
    location: 'New Delhi, India',
    bullets: [
      'Wrote articles about new technologies and release trends.',
      'Performed article editing, SEO and graphics.'
    ]
  }
]

const project = [
    {
        period: 'Oct 2024 - Mar 2025',
        location: 'Erlangen, Germany',
        title: 'Point Prevalence Analysis App for Infectious Disease Stewardship',
        department: 'University Hospital Erlangen',
        bullets: [
            "Developing a mobile app to assist infectious disease specialists in point prevalence analysis, supporting antimicrobial stewardship efforts.",
"Organized and led Scrum team meetings, ensuring Agile development practices to enhance team collaboration and productivity.", "Collaborated with healthcare professionals to translate complex medical workflows into app features, enabling streamlined data entry, analysis, and reporting.","Focused on reducing workloads for infectious disease experts, improving patient outcomes, and facilitating education for non-specialist physicians."
        ]
    },
    {
        period: 'Jun 2024 - Nov 2024',
        location: 'Erlangen, Germany',
        title: 'Development of a Human-Robot Interaction Platform for ROS2-based Systems',
        department: 'FAU / FAPS',
        bullets: [
            'Developed a cross-platform web interface in React.js for intuitive interaction with ROS2 robotic systems.',
            'Built a Node.js backend with RESTful APIs to manage communication between frontend and ROS2.',
            'Tech stack: Node.js, React, Passport and Roslib.'
        ]
    },
    {
        period: 'Apr 2024 - Jun 2024',
        title: 'Teach a Pen to Read: Gamification for Handwriting Recognition',
        location: 'Nürnberg, Germany',
        department: 'Schwan-Stabilo / FAU',
        bullets: [
            'Developed a prototype using Unity and STABILO’s API, and conducted user testing.'
        ]
    }
]

const education = [
  {
    period: '2023 - Current',
    title: "Master's Science in E-Mobility @ Friedrich–Alexander University",
    description:
      `Currently pursuing my Master's at Friedrich–Alexander University Erlangen-Nürnberg.
      Majors include Artificial Intelligence / Autonomous Driving, E‑Powertrain and Sustainable Mobility & Production Technology.
      Studied Machine Learning, Deep Learning, Computer Vision, Pattern Recognition, Computational Neuroscience, Mechatronics, Power Electronics, Energy Storage, Supply Chain and Robotics.`
  },
  {
    period: '2017 - 2021',
    title: "Bachelor's Technology in Mechatronics @ Delhi Institute of Tool Engineering",
    description:
      `Completed my Bachelor's at Delhi Institute of Tool Engineering, Delhi India.
      Majors included Electronics, Control, Instrumentation, Automation and Mechanical.
      Studied Signal Systems, DSP, Power Electronics, Automation & Control, Mechanics, Kinematics, PLCs, Embedded Systems and Programming.`
  }
]

const internships = [
  {
    period: 'Sept 2020 - Oct 2020',
    title: 'Data Scientist Intern @ The Spark Foundation',
    bullets: [
      'Performed exploratory data analysis on provided datasets.',
      'Solved supervised and unsupervised learning problems with graphical analysis.'
    ]
  },
  {
    period: 'Jul 2018 - Aug 2018',
    title: 'Embedded System & IOT Trainee @ i3indiya Technologies',
    bullets: [
      'Project based training on PIC microcontrollers.',
      'Interfaced switches, relays, LEDs, LCD and more — built an IoT project.'
    ]
  }
]

export default function Resume() {
  return (
    <>
    <ScrollToTop />
    <Helmet>
        <title>_resume</title>
    </Helmet>

    <div className='flex items-center justify-center'>
    <div className='section-width'>
    <div>
        <div className='section-heading pt-4'>
            &#123;
            <Typewriter  words={["_Resume"]} typeSpeed={200} />
            <Cursor />
            &#125;
        </div>
        <p className='body-color text-center'>
            a snapshot of my skills, experiences, and achievements.
        </p>
        <div className='flex items-center justify-center pt-4'>
        <a href={resume} className='button-style' download>
            Download
        </a>
        </div>
    </div>

    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        <Typewriter words={["Skills"]} typeSpeed={200} />
        &gt;
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 items-start pl-2 pr-2'>
            <div>
                <h4 className='text-white text-xl code-font'>Web Development</h4>
                <div className='flex flex-wrap'>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_bootstrap</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_tailwind</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_javascript</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_react</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_next.js</p>
                </div>
            </div>
            <div>
                <h4 className='text-white text-xl code-font'>iOS Development</h4>
                <div className='flex flex-wrap'>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_swift</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_swift_ui</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_core_data</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_ui_kit</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_user_notification</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_core_location</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_map_kit</p>
                </div>
            </div>
            <div>
                <h4 className='text-white text-xl code-font'>ML / DL</h4>
                <div className='flex flex-wrap'>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_python</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_numpy/_pandas</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_tensorflow/_pytorch</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_sklearn</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_open_cv</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_numba/_cython</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_py_qt_5</p>
                </div>
            </div>
            <div>
                <h4 className='text-white text-xl code-font'>Other</h4>
                <div className='flex flex-wrap'>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_figma</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_microsoft_office_suite</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_graphics_designing</p>
                    <p className='text-gray-800 code-font bg-slate-200 rounded-lg p-2 m-2 hover:bg-slate-800 hover:text-gray-200'>_final_cut_pro</p>
                </div>
            </div>
        </div>
        
    </div>

    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        <Typewriter words={["Experience"]} typeSpeed={200} />
        &gt;
        </div>

        <div className='grid items-center justify-center pl-2 pr-2'>
          {experiences.map((exp, i) => (
            <div key={i} className='grid md:grid-cols-4 border rounded border-gray-400 p-2 mt-2'>
                <div>
                    <p className='text-gray-400'>{exp.period}</p>
                    <p className='text-white'>{exp.location}</p>
                    </div>
              <div className='text-primary-color code-font text-xl '>
                &#123;
                <Typewriter words={[exp.title]} typeSpeed={200} />
                &#125;
                {
                    exp.department &&
                    <p className='text-white'>
                        Department: {exp.department}
                    </p>
                }
                
              </div>
              <p className='md:col-span-2 body-color'>
                {exp.bullets.map((b, bi) => (
                  <span key={bi}>
                    • {b}
                    <br />
                  </span>
                ))}
              </p>
              {exp.link && (
                <div className='flex flex-row-reverse md:col-span-4'>
                  <a className='button-style' href={exp.link.href}>{exp.link.text}</a>
                </div>
              )}
            </div>
          ))}
        </div>
        
    </div>
    
    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        <Typewriter words={["Projects"]} typeSpeed={200} />
        &gt;
        </div>

        <div className='grid items-center justify-center pl-2 pr-2'>
          {project.map((proj, i) => (
            <div key={i} className='grid md:grid-cols-4 border rounded border-gray-400 p-2 mt-2'>
                <div>
                    <p className='text-gray-400'>{proj.period}</p>
                    <p className='text-white'>{proj.location}</p>
                    </div>
              <div className='text-primary-color code-font text-xl '>
                &#123;
                <Typewriter words={[proj.title]} typeSpeed={200} />
                &#125;
                {
                    proj.department &&
                    <p className='text-white'>
                        Department: {proj.department}
                    </p>
                }
                
              </div>
              <p className='md:col-span-2 body-color'>
                {proj.bullets.map((b, bi) => (
                  <span key={bi}>
                    • {b}
                    <br />
                  </span>
                ))}
              </p>
              {proj.link && (
                <div className='flex flex-row-reverse md:col-span-4'>
                  <a className='button-style' href={proj.link.href}>{proj.link.text}</a>
                </div>
              )}
            </div>
          ))}
        </div>
        
    </div>

    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        <Typewriter words={["Education"]} typeSpeed={200} />
        &gt;
        </div>
        <div className='grid items-center justify-center pl-2 pr-2'>
          {education.map((edu, i) => (
            <div key={i} className='grid md:grid-cols-4 border rounded border-gray-400 p-2 mt-2'>
              <p className='text-gray-400'>{edu.period}</p>
              <h5 className='text-primary-color text-xl code-font'>{edu.title}</h5>
              <p className='md:col-span-2 body-color'>{edu.description}</p>
            </div>
          ))}
        </div>
        
    </div>

    <div>
        <div className='section-heading pt-[50px]'>
        &lt;
        <Typewriter words={["Internship"]} typeSpeed={200} />
        &gt;
        </div>
        <div className='grid items-center justify-center pl-2 pr-2'>
          {internships.map((it, i) => (
            <div key={i} className='grid md:grid-cols-4 border rounded border-gray-400 p-2 mt-2'>
              <p className='text-gray-400'>{it.period}</p>
              <h5 className='text-primary-color text-xl code-font'>{it.title}</h5>
              <p className='md:col-span-2 body-color'>
                {it.bullets.map((b, bi) => (
                  <span key={bi}>
                    • {b}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}
