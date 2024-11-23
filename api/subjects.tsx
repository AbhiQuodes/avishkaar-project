export type Subject = "Mathematics" | "Physics" | "Chemistry" | "Biology" | "Programming Fundamentals" | "Database Management" | "Web Development" | "Data Structures";


interface Tool {
  name: string;
  url: string;
}

interface SubjectContent {
  title: string;
  url: string;
}

interface SubjectTools {
  tools: Tool[];
  subjectContent: SubjectContent[];
}

export const courses = [
  { name: "BSc", value: "bsc" },
  { name: "BCA", value: "bca" },
  { name: "Bsc Computer Science", value: "bcs" },
];

export const subjects = {
  bsc: ["Mathematics", "Physics", "Chemistry", "Biology"],
  bca: [
    "Programming Fundamentals",
    "Database Management",
    "Web Development",
    "Data Structures",
  ],
  bcs: [
    "Electronics",
    "Programming Fundamentals",
    "Database Management",
    "Web Development",
    "Data Structures",
  ],
};

export const subjectTools : Record<string, SubjectTools> = {
  Mathematics: {
    tools: [
      { name: "Calculator", url: "" },
      { name: "Graph Plotter", url: "" },
      { name: "Formula Sheet", url: "" },
    ],
    subjectContent: [
    ],
  },
  Physics: {
    tools: [
      { name: "Unit Converter", url: "" },
      { name: "Physics Simulator", url: "" },
      { name: "Equation Solver", url: "" },
    ],
    subjectContent: [
    ],
  },
  Chemistry: {
    tools: [
      { name: "Periodic Table", url: "" },
      { name: "Molecular Viewer", url: "" },
      { name: "Chemical Equation Balancer", url: "" },
    ],
    subjectContent: [
    ],
  },
  Biology: {
    tools: [
      { name: "Cell Diagram", url: "" },
      { name: "Genetic Code Translator", url: "" },
      { name: "Species Identifier", url: "" },
    ],
    subjectContent: [
  
    ],
  },
  "Programming Fundamentals": {
    tools: [
      { name: "Code Editor", url: "" },
      { name: "Debugger", url: "" },
      { name: "Algorithm Visualizer", url: "" },
    ],
    subjectContent: [
 
    ],
  },
  "Database Management": {
    tools: [
      { name: "SQL Query Tool", url: "" },
      { name: "ER Diagram Creator", url: "" },
      { name: "Database Designer", url: "" },
    ],
    subjectContent: [

    ],
  },
  "Web Development": {
    tools: [
      { name: "HTML/CSS Playground", url: "" },
      { name: "JavaScript Console", url: "" },
      { name: "Responsive Design Tester", url: "" },
    ],
    subjectContent: [
    ],
  },
  "Data Structures": {
    tools: [
      { name: "Data Structure Visualizer", url: "" },
      { name: "Big O Calculator", url: "" },
      { name: "Sorting Algorithm Animator", url: "" },
    ],
    subjectContent: [
  
    ],
  },
  Electronics: {
    tools: [
      {
        name: "Digital Code Converter",
        url: "https://abhiquodes.github.io/Code-Converter/",
      },
      { name: "Circuit Builder", url: "https://dcaclab.com/en/lab" },
      { name: "Sorting Algorithm Animator", url: "" },
    ],
    subjectContent: [
      { title: "S.Y.B.Sc Computer Science Electronics Paper 1 Syllabus", url: "https://www.youtube.com/watch?v=Nkw_vIJVqss&feature=youtu.be" },
      { title: "UNIT- 1 Basics of Microcontroller & Intel 8051 Architecture SYBSC Computer Science", url: "https://youtu.be/mH_QqRwEmQE" },
      { title: "Chapter 1 Computer Science Basics of Microcontroller & Intel 8051 architecture part 2", url: "https://youtu.be/yGrcAuM72Zo" },
      { title: "UNIT-2: Programming model of 8051 Addressing Modes", url: "https://youtu.be/TuMTXd1s49o" },
      { title: "Unit 2 8051 instruction set part 2", url: "https://youtu.be/xVFblZynEjM" },
      { title: "Unit 2 DA instruction 8051 Decimal Adjustment Accumulator after Addition", url: "https://youtu.be/5OKkEip1TkY" },
      { title: "Unit 3 part 1 TMOD", url: "https://youtu.be/7HtGexxaIKg" },
      { title: "Unit 3 part 2 TCON", url: "https://youtu.be/ZE0MXvYpYMg" },
      { title: "Unit 3 Part 3 Timer modes programming for time delay using mode 1", url: "https://youtu.be/XRiF6YHO7IA" },
      { title: "Unit 3 Part 4 Timer modes programming for time delay using mode 2", url: "https://youtu.be/uD9l-OnQn5Y" },
      { title: "Unit 3 Part 5 PCON", url: "https://youtu.be/vtE-H6EEFFo" },
      { title: "Unit 3 Part 6 Interrupt enable register and interrupt priority register (IE, IP)", url: "https://youtu.be/ZXb1NNncB3w" },
      { title: "Unit 4 Square waveform Waveform generation using DAC Interface to 8051 Microcontroller", url: "https://youtu.be/Hd752P_hY6o" },
      { title: "Unit 4 Sawtooth waveform-Waveform generation using DAC Interface to 8051 Microcontroller", url: "https://youtu.be/LeWfAiR74is" },
      { title: "Unit 4 Triangular waveform -Waveform generation using DAC", url: "https://youtu.be/MEc7a6HIW48" },
      { title: "Unit 4 Stepper Motor using 8051", url: "https://youtu.be/uK1uDQ_Oijs" },
      { title: "Unit 4 LCD using 8051 Microcontroller", url: "https://youtu.be/3W3j7zIEedM" },
    ],
  },
};
