import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { path } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const PathCard = ({ path }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={path.date}
      iconStyle={{ background: path.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={path.icon}
            alt={path.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{path.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {path.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {path.points.map((point, index) => (
          <li
            key={`path-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Path = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Courses & Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a self-taught front-end developer, I find this section crucial as it
        reflects my journey and the challenges I've faced. Despite these
        challenges, my passion for front-end development persisted. I embraced
        each obstacle as an opportunity for growth, actively engaging in
        tutorials and collaborations to enhance my skills and knowledge.
      </motion.p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {path.map((path, index) => (
            <PathCard key={`path-${index}`} path={path} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Path, 'path');
