import aotLogo from '../assets/edu/aot.jpeg'
import rkvmLogo from '../assets/edu/rkvm.png'
import oopLogo from '../assets/edu/oop.png'
import dsaLogo from '../assets/edu/dsa.png'
import networkLogo from '../assets/edu/network.png'
import webLogo from '../assets/edu/web.png'
import cLogo from '../assets/edu/c.png'
import cppLogo from '../assets/edu/cpp.svg'
import sqlLogo from '../assets/edu/mysql.svg'
import dbmsLogo from '../assets/edu/dbms.png'
import terminalLogo from '../assets/edu/terminal.png'

const data = [
  {
    name: "Academy of Technology",
    course: "B.Tech, Electronics & Communication Engineering(ECE)",
    score: "8.47",
    year: "Aug 2020 – July 2024",
    src: aotLogo,
    subjects: [
      {
        name: "OOPS",
        src: oopLogo
      },
      {
        name: "DSA",
        src: dsaLogo
      },
      {
        name: "Network",
        src: networkLogo
      },
      {
        name: "Web Tech",
        src: webLogo
      },
      {
        name: "MySQL",
        src: sqlLogo
      },
    ]
  }
,
  {
    name: "RKVM Barrackpore",
    course: "PCM with Computer Science",
    score: "82.4%",
    year: "Apr 2019 – Mar 2020",
    src: rkvmLogo,
    subjects: [
      {
        name: "C",
        src: cLogo
      },
      {
        name: "C++",
        src: cppLogo
      },
      {
        name: "DBMS",
        src: dbmsLogo
      },
      {
        name: "Terminal",
        src: terminalLogo
      }
    ]
  }
]

export default data