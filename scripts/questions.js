// Storing the data:
const questions = [{
    question: "Which government agency oversees public secondary education in Lagos State?",
    optionA: "Lagos State Universal Basic Education Board (SUBEB)",
    optionB: "Lagos State Teaching Service Commission (TESCOM)",
    optionC: "Lagos State Ministry of Education",
    optionD: "West African Examination Council (WAEC)"
  }, 
  {
    question: "The Lagos State education policy is aligned with which national educational framework?",
    optionA: "Universal Basic Education (UBE) Act",
    optionB: "National Policy on Education (NPE)",
    optionC: "Child Rights Act",
    optionD: "Lagos State Education Reform Plan"
  }, 
  {
    question: "In Lagos State, the official duration of secondary education is how many years?",
    optionA: "4 years",
    optionB: "5 years",
    optionC: "6 years",
    optionD: "3 years"
  }, 
  {
    question: "Which of the following is a key responsibility of a Principal under Lagos State education regulations?",
    optionA: "Conducting external examinations",
    optionB: "Supervising teachers and curriculum delivery",
    optionC: "Collecting school fees from parents",
    optionD: "Appointing teaching staff"
  }, 
    {
    question: "The Lagos State Ministry of Education requires schools to conduct how many academic terms per year?",
    optionA: "4 terms",
    optionB: "2 terms",
    optionC: "3 terms",
    optionD: "5 terms"
  },
  {
    question: "What leadership style is most effective in promoting teacher collaboration in Lagos State schools?",
    optionA: "Autocratic",
    optionB: "Laissez-faire",
    optionC: "Transformational",
    optionD: "Transactional"
  },
  {
    question: "In Lagos State public schools, who is responsible for managing the disbursement of school funds?",
    optionA: "The Principal",
    optionB: "The School Board",
    optionC: "The Parent-Teacher Association",
    optionD: "The Lagos State Ministry of Finance"
  },
  {
    question: "What is the primary purpose of the Lagos State School Improvement Grant?",
    optionA: "Teacher salary payments",
    optionB: "School infrastructure development",
    optionC: "Student scholarships",
    optionD: "Extracurricular activities"
  },
  {
    question: "The Lagos State Child Protection Policy emphasizes which right of the child in education?",
    optionA: "Right to free textbooks",
    optionB: "Right to quality and inclusive education",
    optionC: "Right to early employment",
    optionD: "Right to refuse school rules"
  },
  {
    question: "Which law mandates the provision of free and compulsory basic education in Lagos State?",
    optionA: "Education Reform Act",
    optionB: "Universal Basic Education Act",
    optionC: "Lagos State Teaching Act",
    optionD: "Nigerian Constitution"
  },
  {
    question: "The Lagos State secondary school curriculum is designed to align with which examination body’s standards?",
    optionA: "NECO",
    optionB: "JAMB",
    optionC: "WAEC",
    optionD: "GCE"
  },
  {
    question: "Which subject is compulsory for all students under the Lagos State secondary education curriculum?",
    optionA: "Music",
    optionB: "Civic Education",
    optionC: "French",
    optionD: "Technical Drawing"
  },
  {
    question: "A Principal in Lagos State must report cases of child abuse to which authority?",
    optionA: "The Local Government Chairman",
    optionB: "The State Ministry of Education",
    optionC: "The Nigeria Police and Child Protection Services",
    optionD: "The School Board"
  },
  {
    question: "What is the primary function of the Lagos State Health Education Policy in schools?",
    optionA: "Conducting sports competitions",
    optionB: "Ensuring a safe and healthy learning environment",
    optionC: "Managing school fees",
    optionD: "Approving staff promotions"
  },
  {
    question: "The Lagos State Education Partnership Policy encourages collaboration between schools and _____",
    optionA: "Foreign investors",
    optionB: "Private sector organizations",
    optionC: "Political parties",
    optionD: "International NGOs"
  },
  {
    question: "What is the role of the School-Based Management Committee (SBMC) in Lagos schools?",
    optionA: "Exam administration",
    optionB: "Teacher recruitment",
    optionC: "School governance and community involvement",
    optionD: "Policy drafting"
  },
  {
    question: "The Lagos State Government’s Eko Excel program focuses on:",
    optionA: "Increasing school fees",
    optionB: "Teacher digital training and classroom technology",
    optionC: "Providing free transportation",
    optionD: "Reducing school hours"
  },
  {
    question: "Which of the following is the most effective way for a school principal to communicate with staff?",
    optionA: "Verbal instructions only",
    optionB: "Regular meetings, emails, and memos",
    optionC: "Occasional text messages",
    optionD: "Word-of-mouth through senior teachers"
  },
  {
    question: "In a school setting, which type of communication ensures clarity and reduces misunderstandings?",
    optionA: "Informal communication",
    optionB: "Grapevine communication",
    optionC: "Written communication",
    optionD: "Non-verbal communication"
  },
  {
    question: "The best way to address conflict among teachers is to:",
    optionA: "Ignore the issue and hope it resolves itself",
    optionB: "Mediate between the parties and encourage open dialogue",
    optionC: "Take strict disciplinary action immediately",
    optionD: "Involve external authorities immediately"
  },
  {
    question: "Active listening is crucial in school administration because it helps:",
    optionA: "Reduce school expenses",
    optionB: "Improve staff morale and problem-solving",
    optionC: "Avoid communication altogether",
    optionD: "Make decisions without staff input"
  },
  {
    question: "According to the Lagos State Teaching Service Commission, a principal should primarily focus on:",
    optionA: "Budgeting and financial audits",
    optionB: "Teaching a subject full-time",
    optionC: "Leadership, supervision, and school development",
    optionD: "Government policy-making"
  },
  {
    question: "Which of these is a core responsibility of a principal in Lagos State schools?",
    optionA: "Determining curriculum content independently",
    optionB: "Implementing government educational policies",
    optionC: "Reducing teacher salaries",
    optionD: "Eliminating student assessments"
  },
  {
    question: "What is the recommended student-teacher ratio in Lagos State public schools?",
    optionA: "1:10",
    optionB: "1:30",
    optionC: "1:50",
    optionD: "1:100"
  },
  {
    question: "The Lagos State Education Quality Assurance (LSEQA) focuses on:",
    optionA: "Recruitment of school principals",
    optionB: "Monitoring and improving teaching and learning standards",
    optionC: "Financial audits of schools",
    optionD: "Sports development only"
  },
  {
    question: "A principal's role in school management includes:",
    optionA: "Dictating teaching methods to teachers",
    optionB: "Coordinating and supervising all school activities",
    optionC: "Avoiding student discipline matters",
    optionD: "Ignoring school-community relationships"
  },
  {
    question: "A school principal in Lagos State must ensure compliance with:",
    optionA: "Personal opinions on education",
    optionB: "Lagos State Ministry of Education policies",
    optionC: "Any foreign educational policy",
    optionD: "Only the Parent-Teacher Association's decisions"
  },
  {
    question: "Conflict resolution in a school setting should be handled through:",
    optionA: "Violence and threats",
    optionB: "Dialogue and mediation",
    optionC: "Termination of employment immediately",
    optionD: "Public shaming"
  },
  {
    question: "Effective delegation by a principal means:",
    optionA: "Assigning tasks without follow-up",
    optionB: "Micromanaging every detail",
    optionC: "Giving tasks to staff with clear expectations and monitoring progress",
    optionD: "Doing everything alone"
  },
  {
    question: "The capital of Lagos State is:",
    optionA: "Ikeja",
    optionB: "Victoria Island",
    optionC: "Lekki",
    optionD: "Ikorodu"
  },
  {
    question: "Who is the current Governor of Lagos State?",
    optionA: "Babajide Sanwo-Olu",
    optionB: "Akinwunmi Ambode",
    optionC: "Bola Ahmed Tinubu",
    optionD: "Babatunde Fashola"
  },
  {
    question: "The official agency responsible for education in Lagos State is:",
    optionA: "NUC",
    optionB: "WAEC",
    optionC: "Lagos State Ministry of Education",
    optionD: "JAMB"
  },
  {
    question: "The financial guidelines for Lagos State public schools are issued by:",
    optionA: "Lagos State Ministry of Finance",
    optionB: "Parent-Teacher Association",
    optionC: "Federal Ministry of Education",
    optionD: "International donors"
  },
    {
    question: "Which of the following is an important financial duty of a principal?",
    optionA: "Manipulating school accounts",
    optionB: "Ensuring proper budget implementation",
    optionC: "Ignoring financial records",
    optionD: "Spending without documentation"
  },
  {
    question: "In Lagos State schools, financial accountability is achieved through:",
    optionA: "Proper record-keeping and audits",
    optionB: "Verbal agreements only",
    optionC: "Destroying financial records after use",
    optionD: "Unapproved expenditure"
  },
  {
    question: "Which word does not belong in the group?",
    optionA: "Chalk",
    optionB: "Marker",
    optionC: "Whiteboard",
    optionD: "Eraser"
  },
  {
    question: "If all teachers are educators, and some educators are researchers, then which of the following is true?",
    optionA: "All researchers are teachers",
    optionB: "Some teachers may be researchers",
    optionC: "No researchers are teachers",
    optionD: "All educators are teachers"
  },
  {
    question: "If a school has 500 students and 20% fail an exam, how many students passed?",
    optionA: "100",
    optionB: "200",
    optionC: "400",
    optionD: "500"
  },
  {
    question: "Find the odd one out:",
    optionA: "School",
    optionB: "Principal",
    optionC: "Teacher",
    optionD: "Hospital"
  },
  {
    question: "The Lagos State Public Service Rules guide:",
    optionA: "Only politicians",
    optionB: "All civil servants, including teachers",
    optionC: "Only the private sector",
    optionD: "The Federal Government alone"
  },
  {
    question: "In Lagos State, a principal is expected to retire at what age?",
    optionA: "55",
    optionB: "60",
    optionC: "65",
    optionD: "70"
  },
  {
    question: "The penalty for financial misconduct in Lagos State schools is:",
    optionA: "Promotion",
    optionB: "Disciplinary action or dismissal",
    optionC: "Automatic transfer",
    optionD: "No consequence"
  },
  {
    question: "What is the recommended disciplinary action for absenteeism in Lagos State public schools?",
    optionA: "Immediate dismissal",
    optionB: "Written warning and possible further action",
    optionC: "Promotion",
    optionD: "No action taken"
  },
  {
    question: "The Lagos State Education Policy aims to:",
    optionA: "Promote inclusive and quality education",
    optionB: "Favor only private schools",
    optionC: "Discourage teacher training",
    optionD: "Remove student assessments"
  },
  {
    question: "The Lagos State Universal Basic Education Board (LSUBEB) is responsible for:",
    optionA: "Primary education development",
    optionB: "Private university funding",
    optionC: "Postgraduate scholarships",
    optionD: "International exchange programs"
  },
  {
    question: "Which of the following is the most effective communication channel for delivering urgent information to teachers in a Lagos State school?",
    optionA: "Email",
    optionB: "Memo",
    optionC: "Staff meeting",
    optionD: "WhatsApp group"
  },
  {
    question: "Active listening in school leadership involves:",
    optionA: "Interrupting to clarify points",
    optionB: "Giving immediate feedback",
    optionC: "Focusing fully on the speaker and responding thoughtfully",
    optionD: "Sharing your own opinions frequently"
  },
  {
    question: "When addressing a conflict between teachers, a principal should first:",
    optionA: "Take sides based on personal experience",
    optionB: "Listen to both parties impartially",
    optionC: "Report the matter to the Ministry of Education",
    optionD: "Implement disciplinary action immediately"
  },
  {
    question: "In a school setting, downward communication refers to:",
    optionA: "Feedback from staff to the principal",
    optionB: "Information from higher authority to subordinates",
    optionC: "Peer-to-peer communication",
    optionD: "Interaction between parents and the principal"
  },
  {
    question: "The best way to ensure clear communication in a multicultural school is to:",
    optionA: "Use technical language",
    optionB: "Rely on non-verbal cues",
    optionC: "Use simple, inclusive, and precise language",
    optionD: "Communicate only in English"
  },
  {
    question: "The Lagos State Education Policy emphasizes:",
    optionA: "Teaching only core science subjects",
    optionB: "Promoting inclusive and equitable quality education",
    optionC: "Limiting access to public education",
    optionD: "Favoring private institutions over public schools"
  },
  {
    question: "A principal's primary responsibility in curriculum implementation is to:",
    optionA: "Delegate all responsibilities to the vice-principal",
    optionB: "Ensure adherence to the national curriculum guidelines",
    optionC: "Allow teachers to decide on the curriculum independently",
    optionD: "Focus only on external examination subjects"
  },
  {
    question: "Which of these is a core ethical responsibility of a Lagos State school principal?",
    optionA: "Favoring certain staff in promotions",
    optionB: "Upholding transparency and fairness",
    optionC: "Prioritizing personal opinions over policies",
    optionD: "Delaying action on staff welfare issues"
  },
  {
    question: "Effective instructional leadership involves:",
    optionA: "Supervising all extracurricular activities personally",
    optionB: "Monitoring lesson delivery and student outcomes",
    optionC: "Allowing total teacher autonomy",
    optionD: "Limiting communication with parents"
  },
  {
    question: "The Lagos State Quality Assurance Agency is responsible for:",
    optionA: "Licensing private schools only",
    optionB: "Managing school finances",
    optionC: "Conducting independent assessments of schools",
    optionD: "Organizing extracurricular events"
  },
  {
    question: "Effective time management for a principal involves:",
    optionA: "Responding to issues as they arise randomly",
    optionB: "Prioritizing tasks and delegating where necessary",
    optionC: "Focusing only on administrative duties",
    optionD: "Allowing others to dictate your schedule"
  },
  {
    question: "What is the most effective way to motivate school staff?",
    optionA: "Increasing workload without consultation",
    optionB: "Offering regular feedback and recognition",
    optionC: "Providing strict supervision",
    optionD: "Limiting professional development opportunities"
  },
  {
    question: "A key principle of strategic planning in schools is:",
    optionA: "Ignoring stakeholders’ opinions",
    optionB: "Aligning plans with state education goals",
    optionC: "Acting without consultation",
    optionD: "Focusing only on short-term outcomes"
  },
  {
    question: "The primary objective of school management is to:",
    optionA: "Maximize student population",
    optionB: "Ensure efficient administration and learning outcomes",
    optionC: "Maintain rigid discipline",
    optionD: "Focus on revenue generation"
  },
  {
    question: "Decision-making in school management should be:",
    optionA: "Arbitrary and fast",
    optionB: "Data-driven and participatory",
    optionC: "Based on intuition alone",
    optionD: "Exclusive to the principal"
  },
  {
    question: "Lagos State was created in:",
    optionA: "1960",
    optionB: "1967",
    optionC: "1976",
    optionD: "1991"
  },
  {
    question: "The official language of Lagos State is:",
    optionA: "Yoruba",
    optionB: "English",
    optionC: "Hausa",
    optionD: "Pidgin"
  },
    {
    question: "Who is responsible for education policy formulation in Lagos State?",
    optionA: "National Assembly",
    optionB: "State Ministry of Education",
    optionC: "Local Government Council",
    optionD: "Federal Government"
  },
  {
    question: "Lagos State’s education agenda focuses on:",
    optionA: "Privatizing public schools",
    optionB: "Ignoring digital learning",
    optionC: "Promoting inclusive and accessible education",
    optionD: "Reducing educational funding"
  },
  {
    question: "The Lagos State Financial Management Law emphasizes:",
    optionA: "Unauthorized spending",
    optionB: "Transparent accounting and reporting",
    optionC: "Hoarding financial records",
    optionD: "Excluding audits"
  },
  {
    question: "The main objective of budgeting in schools is to:",
    optionA: "Limit staff allowances",
    optionB: "Allocate resources efficiently",
    optionC: "Promote financial secrecy",
    optionD: "Avoid fiscal responsibility"
  },
  {
    question: "Unauthorized expenditure by a principal is:",
    optionA: "Allowed if urgent",
    optionB: "A breach of financial regulations",
    optionC: "Encouraged for flexibility",
    optionD: "Routine practice"
  },
  {
    question: "If all Lagos schools are inspected annually and Ikeja High School is a Lagos school, then:",
    optionA: "Ikeja High School is never inspected",
    optionB: "Ikeja High School is inspected annually",
    optionC: "Ikeja High School inspects others",
    optionD: "No inspections are done"
  },
  {
    question: "Identify the odd one out:",
    optionA: "Principal",
    optionB: "Teacher",
    optionC: "Student",
    optionD: "School"
  },
  {
    question: "Which word is synonymous with 'Accountability'?",
    optionA: "Responsibility",
    optionB: "Ignorance",
    optionC: "Deception",
    optionD: "Arbitrary"
  },
  {
    question: "The Lagos State Public Service Rules guide:",
    optionA: "Only political appointees",
    optionB: "Civil servants’ conduct and ethics",
    optionC: "Private sector operations",
    optionD: "Informal sectors"
  },
  {
    question: "Breach of the Public Service Rules may lead to:",
    optionA: "Promotion",
    optionB: "Disciplinary action",
    optionC: "Automatic retirement",
    optionD: "Salary increase"
  },
  {
    question: "The Lagos State Education Policy priorities:",
    optionA: "Exclusion of rural areas",
    optionB: "Equal education access for all",
    optionC: "Limiting school autonomy",
    optionD: "Reducing technology use"
  },
  {
    question: "Lagos State’s 'THEMES' agenda in education focuses on:",
    optionA: "Infrastructure only",
    optionB: "Holistic educational transformation",
    optionC: "Restricting innovation",
    optionD: "Reducing teacher training"
  },
  {
    question: "What is the most effective channel for official communication in Lagos State public schools?",
    optionA: "Verbal instructions",
    optionB: "Social media platforms",
    optionC: "Written memos and circulars",
    optionD: "Parent-teacher conferences"
  },
  {
    question: "In conflict resolution between staff, the Vice Principal should first:",
    optionA: "Take sides with the senior staff",
    optionB: "Listen to both parties objectively",
    optionC: "Refer the matter to the Ministry of Education",
    optionD: "Punish both parties equally"
  },
  {
    question: "Which of the following is an essential skill for effective communication?",
    optionA: "Assertiveness",
    optionB: "Aggressiveness",
    optionC: "Intimidation",
    optionD: "Ambiguity"
  },
  {
    question: "Active listening involves:",
    optionA: "Interrupting to correct mistakes",
    optionB: "Multitasking while listening",
    optionC: "Paying full attention and providing feedback",
    optionD: "Repeating everything you hear"
  },
  {
    question: "According to Lagos State’s Teachers’ Code of Conduct, a Vice Principal must:",
    optionA: "Delegate all duties to subordinates",
    optionB: "Maintain a high standard of integrity and discipline",
    optionC: "Focus only on academic matters",
    optionD: "Ignore community concerns"
  },
  {
    question: "Continuous assessment in Lagos State schools aims to:",
    optionA: "Grade students based on a single examination",
    optionB: "Monitor students’ progress throughout the term",
    optionC: "Promote students without evaluation",
    optionD: "Measure only theoretical knowledge"
  },
  {
    question: "Professional development for teachers is:",
    optionA: "Optional in Lagos State public schools",
    optionB: "A legal requirement for career progression",
    optionC: "Only necessary for new teachers",
    optionD: "Unrelated to student outcomes"
  },
  {
    question: "What is the primary duty of a Vice Principal?",
    optionA: "Approving financial budgets",
    optionB: "Overseeing school operations and academic programs",
    optionC: "Representing staff in union matters",
    optionD: "Managing community projects"
  },
  {
    question: "Effective school management requires:",
    optionA: "Favoring high-performing students",
    optionB: "Collaboration with staff, students, and parents",
    optionC: "Punishing late-coming staff publicly",
    optionD: "Rigidly enforcing all rules without feedback"
  },
  {
    question: "A good performance evaluation system should be:",
    optionA: "Biased towards experienced staff",
    optionB: "Subjective and verbal",
    optionC: "Objective and evidence-based",
    optionD: "Conducted every five years"
  },
  {
    question: "What is a key element of successful delegation?",
    optionA: "Avoiding follow-up",
    optionB: "Assigning tasks without explanation",
    optionC: "Clarifying expectations and responsibilities",
    optionD: "Micromanaging every task"
  },
  {
    question: "In Lagos State schools, decision-making should be:",
    optionA: "Autocratic and final",
    optionB: "Based on consensus and school policy",
    optionC: "Limited to senior staff input",
    optionD: "Delayed for lengthy discussions"
  },
  {
    question: "Who is the Governor of Lagos State (2025)?",
    optionA: "Babajide Sanwo-Olu",
    optionB: "Maureen Chika",
    optionC: "Dr. Mrs. Hamzat",
    optionD: "Hon. Segun Idris"
  },
  {
    question: "Lagos State was created in:",
    optionA: "1960",
    optionB: "1963",
    optionC: "1967",
    optionD: "1976"
  },
  {
    question: "Which landmark is considered a major tourist attraction in Lagos?",
    optionA: "Zuma Rock",
    optionB: "Obudu Cattle Ranch",
    optionC: "Tafawa Balewa Square",
    optionD: "Ogbunike Caves"
  },
  {
    question: "The official language of Lagos State is:",
    optionA: "Yoruba",
    optionB: "English",
    optionC: "Hausa",
    optionD: "Igbo"
  },
  {
    question: "Who is responsible for budget approval in Lagos public schools?",
    optionA: "School Management Committee",
    optionB: "Ministry of Education",
    optionC: "State House of Assembly",
    optionD: "Vice Principal"
  },
  {
    question: "The Lagos State Financial Regulations guide:",
    optionA: "Student discipline",
    optionB: "Staff recruitment",
    optionC: "Revenue collection and expenditure",
    optionD: "Academic curriculum"
  },
  {
    question: "Unauthorized expenditure in public schools is:",
    optionA: "Allowed during emergencies",
    optionB: "A breach of financial regulations",
    optionC: "Encouraged for innovation",
    optionD: "Controlled by the Vice Principal"
  },
  {
    question: "School funds must be audited:",
    optionA: "Biennially",
    optionB: "Annually",
    optionC: "Every five years",
    optionD: "Only on request"
  },
  {
    question: "If all teachers are professionals, and some professionals are counselors, we can conclude:",
    optionA: "All counselors are teachers",
    optionB: "Some teachers may be counselors",
    optionC: "No teacher is a counselor",
    optionD: "All professionals are teachers"
  },
  {
    question: "Which number completes the sequence? 2, 6, 12, 20, __",
    optionA: "28",
    optionB: "30",
    optionC: "32",
    optionD: "34"
  },
  {
    question: "Identify the odd one out:",
    optionA: "Book",
    optionB: "Pen",
    optionC: "Paper",
    optionD: "Hammer"
  },
  {
    question: "If “TEACHER” is coded as “UFBDIFS,” how is “SCHOOL” coded?",
    optionA: "TIDPNM",
    optionB: "TIDQNN",
    optionC: "TIDPNN",
    optionD: "TJDPNM"
  },
  {
    question: "The Lagos State Public Service Rule governs:",
    optionA: "Private organizations",
    optionB: "Civil servants’ conduct and duties",
    optionC: "Community projects",
    optionD: "Student behavior"
  },
  {
    question: "Breach of Public Service Rules results in:",
    optionA: "Promotion",
    optionB: "Commendation",
    optionC: "Disciplinary action",
    optionD: "Financial reward"
  },
  {
    question: "According to PSR, public officers must retire at age:",
    optionA: "55 years",
    optionB: "60 years or after 35 years of service",
    optionC: "65 years",
    optionD: "70 years"
  },
  {
    question: "Lagos State’s Education Policy focuses on:",
    optionA: "Only academic performance",
    optionB: "Inclusive and quality education",
    optionC: "Urban development",
    optionD: "Sports and recreation"
  },
  {
    question: "The Lagos State Government promotes free education at:",
    optionA: "Primary and secondary levels",
    optionB: "University level only",
    optionC: "Private institutions",
    optionD: "Vocational schools"
  },
  {
    question: "What policy ensures access to education for all Lagos citizens?",
    optionA: "The Land Use Act",
    optionB: "Lagos State Education Reform Policy",
    optionC: "National Health Act",
    optionD: "Public Procurement Law"
  }
];

// Generating the HTML:
let questionSectionHTML = '';

questions.forEach((question, questionNumber) => {
  questionSectionHTML += `
    <form class="ques${questionNumber + 1}">
      <div class="question">
        <p>${questionNumber + 1}.</p>

        <p>${question.question}</p>
      </div>
    
      <div class="options">
        <div class="option">
          <input
            id="ques${questionNumber + 1}-optionA"
            type="radio"
            name="ques${questionNumber + 1}"
          >
          
          <label for="ques${questionNumber + 1}-optionA">
            ${question.optionA}
          </label>
        </div>
      
        <div class="option">
          <input
            id="ques${questionNumber + 1}-optionB"
            type="radio"
            name="ques${questionNumber + 1}"
          >

          <label for="ques${questionNumber + 1}-optionB">
            ${question.optionB}
          </label>
        </div>
      
        <div class="option">
          <input
            id="ques${questionNumber + 1}-optionC"
            type="radio" 
            name="ques${questionNumber + 1}"
          >

          <label for="ques${questionNumber + 1}-optionC">
            ${question.optionC}
          </label>
        </div>
      
        <div class="option">
          <input
            id="ques${questionNumber + 1}-optionD"
            type="radio" 
            name="ques${questionNumber + 1}"
          >

          <label for="ques${questionNumber + 1}-optionD">
            ${question.optionD}
          </label>
        </div>
      </div>
    </form>
  `;
});

// Displaying the HTML on the webpage:
document.querySelector('.js-question-section').innerHTML = questionSectionHTML;