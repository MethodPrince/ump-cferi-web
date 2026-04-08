import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedSectionProgram, setSelectedSectionProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [showSubProgramModal, setShowSubProgramModal] = useState(false);
  const [selectedSubProgram, setSelectedSubProgram] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Handle hash links for smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Toggle dropdown
  const toggleDropdown = (sectionId) => {
    if (openDropdown === sectionId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(sectionId);
    }
  };

  // Program Categories/Sections with detailed programs
  const programCategories = [
    {
      id: 'incubation-programs',
      title: 'Incubation Programs',
      icon: '',
      color: '#5b60ae',
      description: 'Comprehensive support for startups at every stage',
      programs: [
        { 
          id: 'renting-facilities',
          name: 'Renting Facilities', 
          description: 'Access to affordable workspace and facilities for your startup.',
          fullDetails: 'State-of-the-art facilities including co-working spaces, meeting rooms, and specialized equipment available at subsidized rates for student entrepreneurs. Located at the UMPCFERI hub on Mbombela Campus.',
          benefits: ['Affordable rates', 'Flexible terms', 'Access to equipment', 'Networking opportunities'],
          contact: 'facilities@umpcferi.ac.za'
        },
        { 
          id: 'industry-development',
          name: 'Mentorship', 
          description: 'Industry-specific mentorship and networking opportunities.',
          fullDetails: 'Connect with industry experts, attend sector-specific workshops, and gain insights into market trends. Program includes mentorship from established professionals in your field.',
          benefits: ['Industry mentors', 'Sector workshops', 'Market insights', 'Professional network'],
          contact: 'industry@umpcferi.ac.za'
        },
        { 
          id: 'industry-development',
          name: 'Business Compliance Planning & Registration', 
          description: 'Industry-specific mentorship and networking opportunities.',
          fullDetails: 'Connect with industry experts, attend sector-specific workshops, and gain insights into market trends. Program includes mentorship from established professionals in your field.',
          benefits: ['Industry mentors', 'Sector workshops', 'Market insights', 'Professional network'],
          contact: 'industry@umpcferi.ac.za'
        },
        { 
          id: 'business-plan',
          name: 'Business Plan Development', 
          description: 'Expert guidance in creating comprehensive business plans.',
          fullDetails: 'One-on-one coaching to develop a robust business plan that attracts investors. Covers market analysis, financial projections, and operational strategies.',
          benefits: ['Expert coaches', 'Investor-ready plans', 'Financial modeling', 'Market research support'],
          contact: 'businessplan@umpcferi.ac.za'
        },
        { 
          id: 'record-keeping',
          name: 'Coaching onRecord Keeping & Accounting', 
          description: 'Training in financial management and bookkeeping.',
          fullDetails: 'Workshops and training sessions on financial literacy, bookkeeping, tax compliance, and using accounting software for small businesses.',
          benefits: ['Financial literacy', 'Bookkeeping skills', 'Tax compliance', 'Software training'],
          contact: 'finance@umpcferi.ac.za'
        },
        { 
          id: 'market-strategy',
          name: 'Coaching on Market Strategy Development', 
          description: 'Strategic guidance on market positioning and growth.',
          fullDetails: 'Develop effective market entry and growth strategies. Learn about customer acquisition, branding, pricing strategies, and competitive analysis.',
          benefits: ['Market positioning', 'Growth strategies', 'Customer acquisition', 'Competitive analysis'],
          contact: 'marketing@umpcferi.ac.za'
        }
      ]
    },
    {
      id: 'Student funding-competitions',
      title: 'Entrepreneurship Development Programs',
      icon: '',
      color: '#cd3136',
      description: 'Opportunities to win funding and recognition for your ideas',
      programs: [
      /*  { 
          id: 'Embedding Entreneurship',
          name: 'Embedding Entreneurship into the curriculum', 
          description: 'Annual gathering for students to showcase innovative ideas.',
          fullDetails: 'A platform for students to present their innovative projects and business ideas to a panel of judges, industry experts, and potential investors.',
          benefits: ['Showcase ideas', 'Expert feedback', 'Investment opportunities', 'Peer learning'],
          contact: 'indaba@umpcferi.ac.za',
          deadline: 'September 2025'
        },*/
        { 
          id: 'staff-capacity',
          name: 'Staff Entrepreneurship Capacity Building', 
          description: 'Programs to equip staff with entrepreneurial skills.',
          fullDetails: 'Workshops and training sessions designed to help university staff develop entrepreneurial mindsets and skills, enabling them to better support student entrepreneurs.',
          benefits: ['Skill development', 'Mentor training', 'Curriculum integration', 'Research opportunities'],
          contact: 'staff@umpcferi.ac.za'
        },
         { 
          id: 'UNIIC',
          name: 'UNIIC', 
          description: 'Programs to equip staff with entrepreneurial skills.',
          fullDetails: 'Workshops and training sessions designed to help university staff develop entrepreneurial mindsets and skills, enabling them to better support student entrepreneurs.',
          benefits: ['Skill development', 'Mentor training', 'Curriculum integration', 'Research opportunities'],
          contact: 'staff@umpcferi.ac.za'
        },
        // EDHE Programme with Student Indaba INSIDE it
        { 
          id: 'edhe-programme',
          name: 'EDHE Programme', 
          description: 'Entrepreneurship Development in Higher Education - National Platform',
          fullDetails: `The EDHE Programme is people-focused. It is intended to develop the entrepreneurial capacity of students, academics and leaders. The intention is for students to be more successful in terms of becoming economically active during and after their tertiary education. Entrepreneurial activity during their studies could enable students to generate an additional income and fast-track the process of becoming economically active. Upon graduation, students would be able to consider entrepreneurship as a career, either as a first choice, or as an alternative, especially if they have difficulty in finding employment.`,
          
          fullDescription: `Background on the EDHE Programme

Within the context of graduate and youth unemployment, the resources available at universities, the national drive for SMEs and the need for third-stream income at universities, the imperative to drive student and graduate entrepreneurship has been growing steadily. In response, a platform for Entrepreneurship Development in Higher Education (EDHE) was established at the end of 2016 from within the University Education Branch of the Department Higher Education and Training. The EDHE Programme has since been included in the University Capacity Development Programme (UCDP) of the Department Higher Education and Training.

The goals of the EDHE Programme are:

• Student entrepreneurship, i.e. mobilising the national student and graduate resource to create successful enterprises that will ultimately lead to both wealth and job creation.
• Entrepreneurship development in academia, i.e. support academics in instilling an entrepreneurial mindset within all students and graduates through the offering of relevant knowledge, transferral of practical skills and the application of business principles, not only to a specific discipline, but across disciplines.
• Developing entrepreneurial universities, i.e. creating a conducive environment that will enable universities to adapt strategically and embark on projects whereby third-stream income can be generated through innovative business ideas.

The EDHE Programme is people-focused. It is intended to develop the entrepreneurial capacity of students, academics and leaders. The intention is for students to be more successful in terms of becoming economically active during and after their tertiary education. Entrepreneurial activity during their studies could enable students to generate an additional income and fast-track the process of becoming economically active. Upon graduation, students would be able to consider entrepreneurship as a career, either as a first choice, or as an alternative, especially if they have difficulty in finding employment.

The people-focused nature of the EDHE Programme extends to developing the capacity of academics and support professionals to deliver informed and relevant services in terms of entrepreneurship education. This would include equipping academics across disciplines to encourage an entrepreneurial mindset and culture, as well as subject-specific entrepreneurship education, delivered with confidence.

The EDHE Programme is positioned to make entrepreneurship education and training accessible for all students across disciplines. This is a much-needed intervention that would better equip students to successfully participate in the economy upon graduation, regardless of whether they are employed or not.

The EDHE Programme, through driving entrepreneurship development in academia, is intended to optimise existing entrepreneurship research and encourage contextually relevant new research. This would include drawing together existing research on the broader topic of entrepreneurship development, but also specifically on the topic of entrepreneurial universities. Entrepreneurship research would be made available to university stakeholders, students and other stakeholders through a centralised online repository of information.

The UCDP emphasises an increasing focus on curriculum development initiatives that examine new and alternative contents and pedagogies which are relevant to the South African context. In terms of driving the entrepreneurship development agenda through the curriculum, the EDHE Programme is aimed at embedding entrepreneurship in the curriculum, through flexible curriculum pathways, across disciplines. In the spirit of the UCDP, the intention is for entrepreneurship in the curriculum to be relevant to the local context in order to support the ability of graduates to participate meaningfully in society and in the world of work.

In essence, student development, staff development and curriculum development are interlinked in terms of the EDHE Programme. High quality entrepreneurship programmes would benefit both staff and students. Better equipped and skilled staff would contribute to student entrepreneurship and more relevant academic programmes and research. Similarly, as students expand their entrepreneurship skillsets, staff would be motivated to invest in their own development and academic programmes.

The EDHE Programme spans across institutional and regional boundaries. It is aimed at addressing entrepreneurship development needs at individual institutions, while drawing together regional resources and efforts to the benefit of stakeholders on a national level.

This is a large and complex endeavour that requires multiple focus areas and much time. The good news is that most universities are already taking ownership of the problem and implementing initiatives. Add to this the fact that universities have access to their own resources, and it is clear that the main role the EDHE Programme is to provide strategic focus, create enabling environments, collaboration, partnering and unlocking what is existing.`,
          
          goals: [
            'Student entrepreneurship: mobilising the national student and graduate resource to create successful enterprises that will ultimately lead to both wealth and job creation',
            'Entrepreneurship development in academia: support academics in instilling an entrepreneurial mindset within all students and graduates through the offering of relevant knowledge, transferral of practical skills and the application of business principles, not only to a specific discipline, but across disciplines',
            'Developing entrepreneurial universities: creating a conducive environment that will enable universities to adapt strategically and embark on projects whereby third-stream income can be generated through innovative business ideas'
          ],
          
          benefits: [
            'Develop entrepreneurial capacity of students, academics and leaders',
            'Enable students to generate additional income during their studies',
            'Fast-track the process of becoming economically active',
            'Consider entrepreneurship as a career option upon graduation',
            'Access to entrepreneurship education and training across disciplines',
            'Connect with a national network of entrepreneurship stakeholders'
          ],
          
          // ADDED: Student Indaba as a sub-program inside EDHE
          subPrograms: [
            {
              id: 'student-indaba',
              name: 'Student Indaba',
              description: 'Annual gathering for students to showcase innovative ideas',
              fullDetails: 'A platform for students to present their innovative projects and business ideas to a panel of judges, industry experts, and potential investors.',
              fullDescription: `The Student Indaba is a premier annual event organized by Entrepreneurship Development in Higher Education (EDHE) that brings together student entrepreneurs from universities across South Africa.

Key Features:
• Student entrepreneurs showcase their innovative business ideas
• Pitch competitions with cash prizes
• Networking opportunities with industry experts and potential investors
• Workshops and masterclasses on entrepreneurship skills
• Exhibition space for student businesses to display their products and services

The Indaba serves as a platform for students to gain exposure, receive feedback from experts, and connect with like-minded entrepreneurs from other institutions.`,
              benefits: [
                'Showcase your business idea to a national audience',
                'Network with student entrepreneurs from other universities',
                'Learn from successful entrepreneurs and industry experts',
                'Opportunity to win cash prizes and recognition',
                'Access to mentorship and funding opportunities'
              ],
              eligibility: [
                'Currently enrolled university students',
                'Open to all disciplines and faculties',
                'Must have a business idea or existing startup'
              ],
              contact: 'indaba@edhe.co.za',
              deadline: 'September 2025'
            }
          ],
          
          contactInfo: {
            website: 'https://edhe.co.za/',
            contact: 'https://edhe.co.za/contact/',
            social: {
              facebook: 'https://www.facebook.com/EDHEentrepreneurship',
              twitter: 'https://x.com/EDHEOffical',
              instagram: 'https://www.instagram.com/edheentrepreneurship/',
              linkedin: 'https://www.linkedin.com/company/entrepreneurship-development-in-higher-education-edhe/?viewAsMember=true',
              sweepLinkedin: 'https://www.linkedin.com/showcase/student-women-economic-empowerment-programme-sweep/?viewAsMember=true',
              youtube: 'https://www.youtube.com/@entrepreneurshipdevelopmen6394'
            }
          },
          
          contact: 'info@edhe.co.za'
        }
      ],
      // Add dropdown for student chapters under funding competitions
      hasDropdown: true,
      dropdownTitle: 'CFERI Student Chapters',
      dropdownIcon: '',
      dropdownColor: '#ff8c00'
    },
    {
      id: 'research-activities',
      title: 'Research Activities',
      icon: '',
      color: '#8727b0',
      description: 'Cutting-edge research in entrepreneurship and innovation',
      programs: [
        { 
          id: 'entrepreneurship-research',
          name: 'Research in Entrepreneurship Development', 
          description: 'An emerging hub for high-impact research in entrepreneurship, innovation, and inclusive economic development.',
          fullDetails: `The University of Mpumalanga Centre for Entrepreneurship Rapid Incubator (CFERI) is an emerging hub for high-impact research in entrepreneurship, innovation, and inclusive economic development. Within a short period, the Centre has demonstrated rapid growth in research output, with increasing publications, a strong pipeline of ongoing studies, and international recognition through conference participation and awards.\n\nCFERI’s research focuses on delivering practical, evidence-based insights to address key development challenges, including unemployment, small-business sustainability, and economic transformation. By integrating entrepreneurship with economic and innovation analysis, the Centre produces research that is both academically rigorous and directly relevant to policy and practice.`,
          benefits: ['Research grants', 'Publications', 'Conference presentations', 'Policy influence'],
          contact: 'research@umpcferi.ac.za'
        },
        { 
          id: 'consultancy',
          name: 'Research Consultancy', 
          description: 'Tailored research consultancy services for government, private sector organisations, and development partners.',
          fullDetails: `CFERI provides research consultancy services tailored to the needs of government, private sector organisations, and development partners. The Centre specialises in policy analysis, programme evaluation, and impact assessment across entrepreneurial ecosystems, SME development, and innovation-led growth.\n\nWith a strong interdisciplinary foundation, CFERI delivers data-driven, context-specific solutions that support strategic decision-making and measurable development outcomes.`,
          benefits: ['Expert advice', 'Custom solutions', 'Industry insights', 'Strategic planning'],
          contact: 'consult@umpcferi.ac.za'
        },
        { 
          id: 'Advocacy',
          name: 'Policy Advocacy', 
          description: 'Contributing to policy development through research-driven advocacy.',
          fullDetails: `CFERI actively contributes to policy development through research-driven advocacy. The Centre works with stakeholders to shape policies that strengthen entrepreneurial ecosystems, support emerging enterprises, and promote inclusive economic growth.\n\nIts policy engagement is grounded in empirical research and aligned with national and regional development priorities.`,
          benefits: ['Policy development', 'Stakeholder engagement', 'Inclusive growth', 'Ecosystem strengthening'],
          contact: 'research@umpcferi.ac.za'
        },
        { 
          id: 'publications',
          name: 'Research Publications', 
          description: 'Growing portfolio of peer-reviewed publications and conference outputs.',
          fullDetails: `CFERI has a growing portfolio of peer-reviewed publications and conference outputs that contribute to academic scholarship and inform policy discussions. The Centre’s work continues to gain visibility both locally and internationally, reinforcing its position as a credible research partner in entrepreneurship and development.`,
          benefits: ['Academic recognition', 'Knowledge sharing', 'Industry impact', 'Author opportunities'],
          contact: 'publications@umpcferi.ac.za'
        },
        {
          id: 'partner-cferi',
          name: 'Partner with CFERI',
          description: 'Collaboration opportunities with government institutions, industry partners, and development agencies.',
          fullDetails: `CFERI welcomes collaboration with government institutions, industry partners, development agencies, and academic institutions. Through research, consultancy, and policy engagement, the Centre offers a platform for generating knowledge, shaping policy, and driving sustainable economic impact.`,
          benefits: ['Generating knowledge', 'Shaping policy', 'Sustainable impact', 'Strategic collaboration'],
          contact: 'partner@umpcferi.ac.za'
        }
      ]
    }
  ];

  // Student chapters data (for dropdown)
  const studentChapters = [
    { 
      id: 'sweep',
      name: 'SWEEP', 
      image: '/images/sweep.png',
      description: 'Student Women Economic Empowerment Programme',
      fullDetails: `SWEEP is a sisterhood for economic participation aimed at promoting the economic empowerment of student women. It provides skills and opportunities interventions and seeks to address the barriers to entrepreneurship faced by student women, particularly in the context of gender-based violence. SWEEP envisions becoming a transformational empowerment community of women equipped for economic participation through entrepreneurial activity.

SWEEP aims to break the cycle of dependency and vulnerability by fostering entrepreneurship and economic empowerment in order to enable student women to build sustainable livelihoods and contribute to the economic growth and development of their communities. Through increased economic participation, student women can gain agency, make informed decisions, and exercise greater control over their lives. They can pursue education, career advancement, and personal aspirations, thereby challenging traditional gender roles and norms.

In the context of gender-based violence and unemployment in South Africa, the initiative strives to create a transformative impact on student women's lives by giving them access to opportunities and skills-development activities that enhance employability, professionalism, entrepreneurship, resilience and self-sustainability. The programme aims to do this by enhancing student women's academic education and plugging them into a professional 'sisterhood.'`,
      
      fullDescription: `In a world where gender equality and women's empowerment are increasingly recognised as crucial for social progress and sustainable development, it is imperative to focus on empowering young women to reach their full potential. The Student Women Economic Empowerment Programme (SWEEP) stands as a testament to this vision, aiming to uplift and support female students in their pursuit of economic independence, professional growth, and leadership.

SWEEP addresses the lack of representation of student women in business and entrepreneurship by providing skills and opportunities for economic participation. Unemployment is a significant issue, and many student women face the risk of joblessness even after graduating. Additionally, financial dependency often forces them to stay in abusive relationships. SWEEP aims to tackle these problems by offering practical skills and opportunities, supported by academic knowledge, to help student women participate in the economy through entrepreneurial activities and professional employability skills. SWEEP's primary goal is to increase the number of student women who are equipped for economic participation through entrepreneurship or employment opportunities. The programme supports them in creating a stable socio-economic environment by starting and growing their businesses or developing their employability skills. By recognizing the potential of student women to become entrepreneurs or employed professionals, SWEEP provides the necessary skills and resources to help them succeed. This empowerment boosts their confidence, enabling them to contribute to the economy and achieve financial independence.

The rationale for the SWEEP initiative is based on the understanding that student women who generate income are less vulnerable and have more options for personal and professional growth. By promoting economic participation, SWEEP aims to create a stable socio-economic environment for student women, enabling them to support themselves and their families without having to rely on an abusive partner or face economic hardships. Increased participation of student women equipped for economic participation through entrepreneurial activity will contribute to their overall economic empowerment, leading to enhanced self-esteem, financial independence, and improved quality of life.`,
      
      objectives: [
        'Expand Institutional Participation: Through the development of contextualised content, resources, and guidance, SWEEP strives to increase the establishment of new SWEEP chapters across institutions, creating a wider network of student women empowered through entrepreneurship and leadership opportunities.',
        'Increase Entrepreneurship Awareness: Increased awareness of entrepreneurship as a viable economic pathway for female university students and a greater understanding of gender equality and related challenges that hinder female student participation in economic sectors.',
        'Enhance entrepreneurship and resilience skills among student women: SWEEP endeavours to enhance the entrepreneurship skills of student women, enabling them to develop innovative business ideas, effectively manage their ventures, and navigate the challenges of starting and growing businesses. The programme aims to foster a strong entrepreneurial mindset and skill set among student women by providing training, mentorship, and networking opportunities. The programme also aims to enhance student women\'s mental and emotional resilience, enabling them to pursue opportunities confidently and navigate the challenges of starting and growing a business.',
        'Increase access to finance and business development services for student women: SWEEP recognises the importance of access to finance and business development services for student women\'s entrepreneurial endeavours. The Programme aims to facilitate increased access to financial resources, grants, loans, and business support services, enabling student women to start and expand their businesses. By reducing barriers to capital and providing guidance on business development, SWEEP seeks to enhance student women\'s entrepreneurial success.',
        'Increase participation of student women in a supportive community of women entrepreneurs: SWEEP strives to create a supportive community of student women entrepreneurs. By facilitating networking events, mentorship programmes, and knowledge sharing platforms, the programme aims to foster collaboration, peer learning, and mutual support among student women. This community will contribute to the growth, resilience, and success of student women in their entrepreneurial pursuits.',
        'Increase economic participation of student women: SWEEP aims to empower student women to actively engage in economic activities, whether through entrepreneurship, employment, or other forms of economic participation. By equipping them with the necessary skills, resources, and support, the Programme seeks to increase the number of student women who are economically active and contributing to the economy.',
        'Reduce dependability and vulnerability of student women: SWEEP acknowledges the connection between economic empowerment and reduced vulnerability to gender-based violence. By providing psychosocial support, education on gender-based violence prevention, and access to resources, the Programme aims to reduce the risk and impact of gender-based violence on student women\'s lives. This includes fostering a supportive environment that empowers student women to assert their rights and seek help when needed.'
      ],
      
      chapterObjectives: [
        'Enhance Entrepreneurship Skills and Knowledge: To provide female university students with access to mentorship, training, and capacity-building workshops that enhance their entrepreneurial, professional, resilience, and survival skills. Activities include: providing/facilitating training and capacity-building programmes that enhance entrepreneurial skills, financial literacy, leadership, and personal development; facilitating workshops on psychosocial support, addressing the challenges of gender-based violence and fostering mental and emotional resilience; facilitating a mentorship programme connecting student women with experienced professionals (partners) who provide one-on-one business guidance, industry insights, and leadership development.',
        'Increase Entrepreneurship Awareness: To enhance awareness of entrepreneurship and entrepreneurial activities as viable means of economic participation among female university students. Activities include conducting awareness-raising activities to promote entrepreneurship, promoting gender equality, challenging societal norms, and eliminating gender-based discrimination and bias in economic sectors.',
        'Promote Women\'s Participation in Entrepreneurship: To promote and support the participation of female university students in entrepreneurship-related activities. Activities include: Offering access to financial resources, grants, and scholarships specifically designed to support student women\'s entrepreneurial ventures and educational pursuits; integrating SWEEP participation into EDHE events such as the Student Entrepreneurship Week (SEW) and the EDHE Entrepreneurship Intervarsity; encouraging female students to compete, network, and showcase their entrepreneurial ideas.',
        'Foster a sense of community and support among and for student women: To grow the female university student support network, encouraging networking, collaboration, and the sharing of knowledge, resources, opportunities and expertise. Activities include: Showcase the platform/ website/ community; engage on/ contribute to the platform/ website/ community; facilitate networking events, conferences, dialogues, webinars and forums where student women can exchange ideas, collaborate on projects, and engage with successful entrepreneurs and industry leaders; explore and establish partnerships/ collaborations to support student women entrepreneurs through access to resources, mentorship, and employment/ entrepreneurship opportunities for student women.',
        'Expand Institutional Participation: To increase the number of SWEEP chapters and student participation across South African universities. Activities include: recruiting SWEEP chapter members and supporting and engaging with SWEEP chapters at other universities.'
      ],
      
      workshops: 'In our quest to develop and empower capacity building workshops remain a critical element in driving objectives of the EDHE strategy. The year 2024 saw several workshops including a three-day SWEEP workshop designed around three key themes that are not only aligned with the SWEEP vision and mission–but fundamental to competencies required from graduates in the world of work and/or (social) entrepreneurship. The selected methodology for the program design was based on cognitive and social theory principles in education. The student women were encouraged to be inspired by observing and listening to the speakers, discussing key points in their respective groups, applying the knowledge to the given task, and presenting their findings in plenary sessions.',
      
      constitution: `To the SWEEP Community, we are pleased to introduce the SWEEP Constitution Draft, a foundational document designed to guide each SWEEP Chapter in creating a constitution tailored to your specific university's society processes and procedures.

The SWEEP Constitution Draft serves as a flexible framework, offering guidelines and principles that chapters can adapt to their unique needs. It is not a one-size-fits-all document; rather, it is a resource intended to assist you in crafting a constitution that aligns with your university's culture, regulations, and the specific goals of your SWEEP Chapter.

This draft document outlines the essential elements to consider when creating your chapter's constitution. It covers areas such as the chapter's mission, objectives, leadership structure, membership requirements, and decision-making processes. It is our hope that by providing this framework, we can streamline the process of constitution drafting and help you focus on the core mission of empowering female students within your university.

Remember that the SWEEP Constitution Draft is a starting point and a source of inspiration. Feel free to adapt, modify, and expand upon the content to ensure that it best suits your chapter's unique needs and aspirations. We encourage you to engage with your chapter members, incorporate their ideas, and create a constitution that empowers you to realize your shared vision of promoting women's economic empowerment.

Thank you for your commitment to the SWEEP program, and we look forward to seeing the incredible impact your unique SWEEP Chapter will make on your campus and in the lives of female students.`,
      
      externalLink: 'https://edhe.co.za/sweep-2025/',
      
      benefits: [
        'Specialized business management training',
        'One-on-one mentorship with successful women leaders',
        'Access to women-focused funding opportunities',
        'Networking events and peer support groups',
        'Market linkages and exhibition opportunities',
        'Childcare support during program sessions'
      ],
      
      eligibility: [
        'Female university students',
        'Currently enrolled at UMP or partner institutions',
        'Commitment to personal and professional development',
        'Willingness to participate in workshops and mentorship',
        'Open to all faculties and academic levels'
      ],
      
      partners: ['Old Mutual', 'ABSA', 'Women in Business Association', 'SEDA', 'EDHE'],
      contact: 'sweep@umpcferi.ac.za',
      social: {
        tiktok: 'https://www.tiktok.com/@umpsweep.chapter'
      },
      applicationDeadline: 'Rolling applications',
      nextCohort: 'Ongoing'
    },
    { 
      id: 'cop',
      name: 'COP', 
      description: 'Student Community of Practice',
      fullDetails: 'A collaborative community where students share knowledge, best practices, and learn from each other\'s entrepreneurial journeys. The Community of Practice (COP) brings together students with shared interests in entrepreneurship to exchange ideas, collaborate on projects, and support each other\'s growth.',
      benefits: [
        'Peer learning and knowledge sharing',
        'Collaborative projects and initiatives',
        'Regular workshops and meetups',
        'Access to resources and templates',
        'Networking with like-minded students'
      ],
      eligibility: [
        'All UMP students interested in entrepreneurship',
        'Open to all faculties and academic levels',
        'Commitment to active participation'
      ],
      contact: 'cop@umpcferi.ac.za'
    },
    { 
      id: 'sabya',
      name: 'SABYA', 
      image: '/images/sabya.jpeg',
      description: 'South African BRICS Youth Association',
      fullDetails: `The South African BRICS Youth Association (SABYA) is a non-profit organisation founded in 2018, with the vision to be the leading voice of Youth within BRICS+ and Advocate for their rights and interests in the decision making processes.

The South African BRICS Youth Association (SABYA) is a non-profit organisation founded in 2018, with the vision to be the leading voice of Youth within BRICS+ and Advocate for their rights and interests in the decision making processes.`,
      
      fullDescription: `The South African BRICS Youth Association (SABYA) is committed to amplifying the voice of young people in decision-making spaces. The UMPCFERI SABYA Chapter is a dynamic platform for young scholars, researchers, innovators and future change-makers ready to make meaningful impact within BRICS+ and beyond.

This is more than just a chapter, it's a community of driven students connecting academic excellence with entrepreneurship, innovation and community development. If you're ready to grow your research profile, expand your network and contribute to real solutions that matter, this is your sign to get involved.`,
      
      whoShouldJoin: [
        'Honours, Master\'s & PhD students',
        'Final-year undergraduates with research interests',
        'Students in entrepreneurship, development, economics, agriculture, business & social innovation',
        'Students passionate about entrepreneurship, development, economics, agriculture, business & social innovation'
      ],
      
      whyJoin: [
        'Research mentorship & peer support',
        'Writing, methods & proposal clinics',
        'Writing, methodology & proposal development clinics',
        'Research-to-enterprise opportunities',
        'Conferences, publications & innovation projects',
        'Network with academics, entrepreneurs & industry',
        'Networking with academics, entrepreneurs & industry leaders'
      ],
      
      whatWeDo: [
        'Research seminars & workshops',
        'Research seminars & interactive workshops',
        'Collaborative research & publications',
        'Applied and community-engaged research',
        'Applied and community-engaged research initiatives'
      ],
      
      objectives: [
        'To be the leading voice of Youth within BRICS+',
        'To Advocate for youth rights and interests in decision making processes',
        'To connect academic work with entrepreneurship, innovation, and community development',
        'To provide research mentorship and peer support',
        'To create research-to-enterprise opportunities'
      ],
      
      benefits: [
        'Research mentorship & peer support',
        'Writing, methods & proposal clinics',
        'Research-to-enterprise opportunities',
        'Conferences, publications & innovation projects',
        'Network with academics, entrepreneurs & industry',
        'Writing, methodology & proposal development clinics',
        'Networking with academics, entrepreneurs & industry leaders'
      ],
      
      eligibility: [
        'Honours, Master\'s & PhD students',
        'Final-year undergraduates with research interests',
        'Students in entrepreneurship, development, economics, agriculture, business & social innovation',
        'Students passionate about entrepreneurship, development, economics, agriculture, business & social innovation'
      ],
      
      partners: ['BRICS+', 'UMPCFERI', 'SABYA National'],
      contact: 'sabya@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/umpcferi_sabya_chapter'
      },
      applicationDeadline: 'Rolling applications',
      nextCohort: 'Ongoing'
    },
    { 
      id: 'hult',
      name: 'HULT Prize', 
      image: '/images/hultprize.png',
      description: 'Global Student Entrepreneurship Competition',
      fullDetails: `UMP Hult Prize is an entrepreneurship competition housed at CFERI.

A PLATFORM FOR BUSINESS IDEAS`,
      
      fullDescription: `UMP Hult Prize is an entrepreneurship competition housed at CFERI.

A PLATFORM FOR BUSINESS IDEAS`,
      
      whatToExpect: [
        'An opportunity to turn your start up into a real business',
        'A community of entrepreneurs',
        'Networking opportunity',
        'Global exposure',
        'Business pitching skills',
        'Business funding'
      ],
      
      benefits: [
        'You have a chance to turn your idea into a real business, with guidance, support, and possible funding through the Hult Prize.',
        'You learn useful skills like leadership, teamwork, problem-solving, and how to pitch ideas confidently.',
        'You get to work on real problems in society and help create solutions that make a positive impact.',
        'You meet and connect with students, and entrepreneurs from around the world.',
        'Opportunity to win US$1 million in seed funding at the Global Finals'
      ],
      
      stages: [
        {
          name: 'STAGE 1: Campus Competition',
          description: 'Hosted at individual universities. Student teams pitch their startup ideas. One winning team per campus advances. Focus: problem clarity, impact, and business potential.'
        },
        {
          name: 'STAGE 2: National Competition',
          description: 'Campus winners compete at national or regional summits. More competitive, with expert judges and mentors. Top teams move forward to the global pathway.'
        },
        {
          name: 'STAGE 3: Digital Incubator',
          description: 'Teams that didn\'t win campus rounds can still apply online. Requires a strong pitch deck and traction. Selected teams join the next stage.'
        },
        {
          name: 'STAGE 4: Digital Accelerator',
          description: 'Around 20–25 top teams worldwide are selected. 6–8 weeks of: Mentorship, Business model refinement, Pitch coaching. Hosted in partnership with leading global institutions.'
        },
        {
          name: 'STAGE 5: Global Finals',
          description: 'Final teams pitch on a global stage. Judged by world-class entrepreneurs and investors. One team wins US $1 million in seed funding.'
        }
      ],
      
      minimumRequirements: [
        'Students must be UMP registered for the academic year 2026',
        'A startup one-pager (summary of your idea and value proposition)',
        'Each Start-up must have a one or two SDGs in focus',
        'Start-ups must include 2-4 members'
      ],
      
      contactInfo: {
        phone1: '076 405 5974',
        phone2: '063 433 8371',
        email: 'hult@umpcferi.ac.za',
        location: 'University of Mpumalanga, Mbombela Campus'
      },
      
      spotlight: 'Tsumbedzo Ramadi Madzivhandila',
      
      objectives: [
        'Engage students in social entrepreneurship',
        'Develop innovative solutions to global challenges',
        'Provide platform for students to showcase ideas',
        'Connect students with global entrepreneurship network',
        'Foster cross-disciplinary collaboration'
      ],
      
      eligibility: [
        'Students must be UMP registered for the academic year 2026',
        'Start-ups must include 2-4 members',
        'Each Start-up must have a one or two SDGs in focus',
        'A startup one-pager (summary of your idea and value proposition)'
      ],
      
      partners: ['HULT Prize Foundation', 'United Nations', 'Various corporate partners'],
      contact: 'hult@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/hultpump'
      },
      applicationDeadline: 'February 2025',
      nextCohort: 'March - May 2025'
    }
  ];

  // Partners list
  const partners = [
    { name: 'SABYA', logo: '🌍', description: 'South African BRICS Youth Association' },
    { name: 'COP', logo: '👥', description: 'Student Community of Practice' },
    { name: 'SWEEP', logo: '👭', description: 'Student Women Economic Empowerment Programme' },
    { name: 'HULT Prize', logo: '🏆', description: 'Global Student Entrepreneurship Competition' },
    { name: 'SEDA', logo: '📊', description: 'Small Enterprise Development Agency' },
    { name: 'EDHE', logo: '🎓', description: 'Entrepreneurship Development in Higher Education' }
  ];

  const openSectionProgramModal = (program) => {
    setSelectedSectionProgram(program);
    setShowSectionModal(true);
    document.body.style.overflow = 'hidden';
  };

  const openSubProgramModal = (subProgram) => {
    setSelectedSubProgram(subProgram);
    setShowSubProgramModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setShowSectionModal(false);
    setShowSubProgramModal(false);
    setSelectedProgram(null);
    setSelectedSectionProgram(null);
    setSelectedSubProgram(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-overlay"></div>
        <div className="programs-hero-content">
          <h1 className="programs-hero-title">Our Programs</h1>
          <p className="programs-hero-subtitle">
            Discover comprehensive programs designed to nurture entrepreneurs at every stage of their journey
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="programs-quick-nav">
        <div className="container">
          <div className="quick-nav-links">
            {programCategories.map(category => (
              <button 
                key={category.id}
                className="quick-nav-btn"
                onClick={() => scrollToSection(category.id)}
                style={{ '--hover-color': category.color }}
              >
                <span className="nav-icon">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Categories with Clickable Cards */}
      <div className="programs-container">
        {programCategories.map(category => (
          <section key={category.id} id={category.id} className="program-category-section">
            <div className="category-header">
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                {category.icon}
              </div>
              <div className="category-title-wrapper">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
            
            {/* Regular program cards */}
            <div className="category-programs-grid">
              {category.programs.map((program, index) => (
                <div 
                  key={program.id} 
                  className="category-program-card"
                  onClick={() => openSectionProgramModal(program)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="program-card-header" style={{ backgroundColor: category.color }}>
                    <span className="program-icon-small">{category.icon}</span>
                  </div>
                  <div className="program-card-body">
                    <h3>{program.name}</h3>
                    <p className="program-description">{program.description}</p>
                    <div className="program-card-footer">
                      <span className="learn-more-btn">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dropdown for Student Chapters (inside Funding Competitions) */}
            {category.hasDropdown && (
              <div className="dropdown-section">
                <button 
                  className={`dropdown-toggle-btn ${openDropdown === category.id ? 'active' : ''}`}
                  onClick={() => toggleDropdown(category.id)}
                  style={{ borderColor: category.dropdownColor }}
                >
                  <span>
                    <span className="dropdown-icon">{category.dropdownIcon}</span>
                    {category.dropdownTitle}
                  </span>
                  <i className={`fas fa-chevron-${openDropdown === category.id ? 'up' : 'down'}`}></i>
                </button>
                
                {openDropdown === category.id && (
                  <div className="dropdown-content">
                    {studentChapters.map((chapter, index) => (
                      <div 
                        key={chapter.id}
                        className="dropdown-item"
                        onClick={() => openSectionProgramModal(chapter)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="dropdown-item-icon" style={{ backgroundColor: category.dropdownColor }}>
                          {chapter.image ? (
                            <img src={chapter.image} alt={chapter.name} className="chapter-logo" />
                          ) : (
                            chapter.id === 'sweep' ? '👭' : chapter.id === 'cop' ? '👥' : chapter.id === 'sabya' ? '🌍' : '🏆'
                          )}
                        </div>
                        <div className="dropdown-item-content">
                          <h4>{chapter.name}</h4>
                          <p>{chapter.description}</p>
                        </div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Partners Section */}
        <section className="partners-section">
          <div className="section-header">
            <h2 className="section-title">Our Partners</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Collaborating with industry leaders to support student entrepreneurs</p>
          </div>
          
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Section Programs */}
      {showSectionModal && selectedSectionProgram && (
        <div className="program-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header" style={{ borderColor: '#ff8c00' }}>
              <div className="modal-icon" style={{ backgroundColor: '#ff8c00' }}>
                {selectedSectionProgram.image ? (
                  <img src={selectedSectionProgram.image} alt={selectedSectionProgram.name} className="modal-logo" />
                ) : (
                  selectedSectionProgram.id === 'sweep' ? '👭' : 
                  selectedSectionProgram.id === 'cop' ? '👥' : 
                  selectedSectionProgram.id === 'sabya' ? '🌍' : 
                  selectedSectionProgram.id === 'hult' ? '🏆' :
                  selectedSectionProgram.id === 'edhe-programme' ? '🎓' : '📋'
                )}
              </div>
              <div className="modal-title">
                <h2>{selectedSectionProgram.name}</h2>
                <p>{selectedSectionProgram.description}</p>
              </div>
            </div>

            <div className="modal-body">
              {/* Full Details */}
              <div className="modal-section">
                <h3>Program Details</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{selectedSectionProgram.fullDetails || selectedSectionProgram.description}</p>
              </div>

              {/* Full Description (if exists) */}
              {selectedSectionProgram.fullDescription && (
                <div className="modal-section">
                  <h3>About {selectedSectionProgram.name}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedSectionProgram.fullDescription}</p>
                </div>
              )}

              {/* Goals (for EDHE Programme) */}
              {selectedSectionProgram.goals && (
                <div className="modal-section">
                  <h3>Program Goals</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.goals.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ADDED: Sub-programs section (for Student Indaba inside EDHE) */}
              {selectedSectionProgram.subPrograms && selectedSectionProgram.subPrograms.length > 0 && (
                <div className="modal-section">
                  <h3>Related Programs</h3>
                  <div className="sub-programs-list">
                    {selectedSectionProgram.subPrograms.map((subProgram) => (
                      <div 
                        key={subProgram.id}
                        className="sub-program-item"
                        onClick={() => openSubProgramModal(subProgram)}
                      >
                        <div className="sub-program-icon">📅</div>
                        <div className="sub-program-content">
                          <h4>{subProgram.name}</h4>
                          <p>{subProgram.description}</p>
                          <span className="click-hint">Click to learn more <i className="fas fa-arrow-right"></i></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Info (for EDHE Programme) */}
              {selectedSectionProgram.contactInfo && (
                <div className="modal-section">
                  <h3>Contact Information</h3>
                  {selectedSectionProgram.contactInfo.website && (
                    <p><i className="fas fa-globe"></i> <a href={selectedSectionProgram.contactInfo.website} target="_blank" rel="noopener noreferrer" style={{ color: '#e31b23' }}>{selectedSectionProgram.contactInfo.website}</a></p>
                  )}
                  {selectedSectionProgram.contactInfo.contact && (
                    <p><i className="fas fa-envelope"></i> <a href={selectedSectionProgram.contactInfo.contact} target="_blank" rel="noopener noreferrer" style={{ color: '#e31b23' }}>Contact Page</a></p>
                  )}
                </div>
              )}

              {/* Social Media for EDHE Programme */}
              {selectedSectionProgram.contactInfo?.social && (
                <div className="modal-section">
                  <h3>Connect on Social Media</h3>
                  <div className="program-social-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedSectionProgram.contactInfo.social.facebook && (
                      <a href={selectedSectionProgram.contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link-prog" style={{ background: '#1877f2', color: 'white' }}>
                        <i className="fab fa-facebook-f"></i> Facebook
                      </a>
                    )}
                    {selectedSectionProgram.contactInfo.social.twitter && (
                      <a href={selectedSectionProgram.contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link-prog" style={{ background: '#1da1f2', color: 'white' }}>
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    )}
                    {selectedSectionProgram.contactInfo.social.instagram && (
                      <a href={selectedSectionProgram.contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link-prog" style={{ background: '#e4405f', color: 'white' }}>
                        <i className="fab fa-instagram"></i> Instagram
                      </a>
                    )}
                    {selectedSectionProgram.contactInfo.social.linkedin && (
                      <a href={selectedSectionProgram.contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-prog" style={{ background: '#0077b5', color: 'white' }}>
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                      </a>
                    )}
                    {selectedSectionProgram.contactInfo.social.youtube && (
                      <a href={selectedSectionProgram.contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="social-link-prog" style={{ background: '#ff0000', color: 'white' }}>
                        <i className="fab fa-youtube"></i> YouTube
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Who Should Join (for SABYA) */}
              {selectedSectionProgram.whoShouldJoin && (
                <div className="modal-section">
                  <h3>Who Should Join?</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.whoShouldJoin.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Join (for SABYA) */}
              {selectedSectionProgram.whyJoin && (
                <div className="modal-section">
                  <h3>Why Join?</h3>
                  <ul className="modal-list">
                    {[...new Set(selectedSectionProgram.whyJoin)].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What We Do (for SABYA) */}
              {selectedSectionProgram.whatWeDo && (
                <div className="modal-section">
                  <h3>What We Do</h3>
                  <ul className="modal-list">
                    {[...new Set(selectedSectionProgram.whatWeDo)].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Objectives (for SWEEP & SABYA) */}
              {selectedSectionProgram.objectives && (
                <div className="modal-section">
                  <h3>Key Objectives</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.objectives.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Chapter Objectives (for SWEEP) */}
              {selectedSectionProgram.chapterObjectives && (
                <div className="modal-section">
                  <h3>SWEEP University Chapters</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.chapterObjectives.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Workshops (for SWEEP) */}
              {selectedSectionProgram.workshops && (
                <div className="modal-section">
                  <h3>SWEEP Capacity Building Workshops</h3>
                  <p>{selectedSectionProgram.workshops}</p>
                </div>
              )}

              {/* Constitution (for SWEEP) */}
              {selectedSectionProgram.constitution && (
                <div className="modal-section">
                  <h3>The SWEEP Constitution</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedSectionProgram.constitution}</p>
                </div>
              )}

              {/* What to Expect (for HULT) */}
              {selectedSectionProgram.whatToExpect && (
                <div className="modal-section">
                  <h3>What to Expect</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.whatToExpect.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stages (for HULT) */}
              {selectedSectionProgram.stages && (
                <div className="modal-section">
                  <h3>Stages of Hult Prize</h3>
                  {selectedSectionProgram.stages.map((stage, index) => (
                    <div key={index} style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: '#e31b23', marginBottom: '0.5rem' }}>{stage.name}</h4>
                      <p>{stage.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Minimum Requirements (for HULT) */}
              {selectedSectionProgram.minimumRequirements && (
                <div className="modal-section">
                  <h3>Minimum Requirements</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.minimumRequirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Info (for HULT) */}
              {selectedSectionProgram.contactInfo && selectedSectionProgram.contactInfo.phone1 && (
                <div className="modal-section">
                  <h3>Contact Information</h3>
                  <p><i className="fas fa-phone"></i> {selectedSectionProgram.contactInfo.phone1}</p>
                  <p><i className="fas fa-phone"></i> {selectedSectionProgram.contactInfo.phone2}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {selectedSectionProgram.contactInfo.location}</p>
                </div>
              )}

              {/* Spotlight (for HULT) */}
              {selectedSectionProgram.spotlight && (
                <div className="modal-section">
                  <h3>Spotlight</h3>
                  <p><strong>{selectedSectionProgram.spotlight}</strong></p>
                </div>
              )}

              {/* Benefits */}
              {selectedSectionProgram.benefits && (
                <div className="modal-section">
                  <h3>Benefits</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Eligibility */}
              {selectedSectionProgram.eligibility && (
                <div className="modal-section">
                  <h3>Eligibility Criteria</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prizes (for EDHE Competition) */}
              {selectedSectionProgram.prizes && (
                <div className="modal-section">
                  <h3>Prizes</h3>
                  <ul className="modal-list">
                    {selectedSectionProgram.prizes.map((prize, index) => (
                      <li key={index}>{prize}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact and Deadline */}
              <div className="modal-details-grid">
                {selectedSectionProgram.contact && (
                  <div className="detail-item">
                    <i className="far fa-envelope"></i>
                    <div>
                      <strong>Contact</strong>
                      <p>{selectedSectionProgram.contact}</p>
                    </div>
                  </div>
                )}
                {selectedSectionProgram.deadline && (
                  <div className="detail-item">
                    <i className="far fa-calendar-alt"></i>
                    <div>
                      <strong>Deadline</strong>
                      <p>{selectedSectionProgram.deadline}</p>
                    </div>
                  </div>
                )}
                {selectedSectionProgram.applicationDeadline && (
                  <div className="detail-item">
                    <i className="far fa-calendar-alt"></i>
                    <div>
                      <strong>Deadline</strong>
                      <p>{selectedSectionProgram.applicationDeadline}</p>
                    </div>
                  </div>
                )}
                {selectedSectionProgram.nextCohort && (
                  <div className="detail-item">
                    <i className="far fa-clock"></i>
                    <div>
                      <strong>Next Cohort</strong>
                      <p>{selectedSectionProgram.nextCohort}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Media (for regular programs) */}
              {selectedSectionProgram.social && !selectedSectionProgram.contactInfo && (
                <div className="modal-section">
                  <h3>Connect on Social Media</h3>
                  <div className="program-social-links">
                    {selectedSectionProgram.social.instagram && (
                      <a 
                        href={selectedSectionProgram.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link-prog instagram"
                      >
                        <i className="fab fa-instagram"></i> Follow on Instagram
                      </a>
                    )}
                    {selectedSectionProgram.social.tiktok && (
                      <a 
                        href={selectedSectionProgram.social.tiktok} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link-prog tiktok"
                      >
                        <i className="fab fa-tiktok"></i> Follow on TikTok
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* External Link (for SWEEP) */}
              {selectedSectionProgram.externalLink && (
                <div className="modal-section">
                  <h3>Learn More</h3>
                  <a 
                    href={selectedSectionProgram.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link-btn"
                    style={{ backgroundColor: '#9c27b0' }}
                  >
                    Visit EDHE SWEEP Website <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              )}

              {/* Partners */}
              {selectedSectionProgram.partners && (
                <div className="modal-section">
                  <h3>Partners</h3>
                  <div className="partners-list">
                    {selectedSectionProgram.partners.map((partner, index) => (
                      <span key={index} className="partner-tag">{partner}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="modal-actions">
                <button className="btn btn-outline" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Sub Programs (Student Indaba) */}
      {showSubProgramModal && selectedSubProgram && (
        <div className="program-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header" style={{ borderColor: '#e31b23' }}>
              <div className="modal-icon" style={{ backgroundColor: '#e31b23' }}>
                📅
              </div>
              <div className="modal-title">
                <h2>{selectedSubProgram.name}</h2>
                <p>{selectedSubProgram.description}</p>
              </div>
            </div>

            <div className="modal-body">
              {/* Full Details */}
              <div className="modal-section">
                <h3>Program Details</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{selectedSubProgram.fullDetails}</p>
              </div>

              {/* Full Description */}
              {selectedSubProgram.fullDescription && (
                <div className="modal-section">
                  <h3>About {selectedSubProgram.name}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedSubProgram.fullDescription}</p>
                </div>
              )}

              {/* Benefits */}
              {selectedSubProgram.benefits && (
                <div className="modal-section">
                  <h3>Benefits</h3>
                  <ul className="modal-list">
                    {selectedSubProgram.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Eligibility */}
              {selectedSubProgram.eligibility && (
                <div className="modal-section">
                  <h3>Eligibility Criteria</h3>
                  <ul className="modal-list">
                    {selectedSubProgram.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact and Deadline */}
              <div className="modal-details-grid">
                {selectedSubProgram.contact && (
                  <div className="detail-item">
                    <i className="far fa-envelope"></i>
                    <div>
                      <strong>Contact</strong>
                      <p>{selectedSubProgram.contact}</p>
                    </div>
                  </div>
                )}
                {selectedSubProgram.deadline && (
                  <div className="detail-item">
                    <i className="far fa-calendar-alt"></i>
                    <div>
                      <strong>Deadline</strong>
                      <p>{selectedSubProgram.deadline}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="modal-actions">
                <button className="btn btn-outline" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;