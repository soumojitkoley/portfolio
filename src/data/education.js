import aotLogo from '../assets/edu/aot.jpeg'
import rkvmLogo from '../assets/edu/rkvm.png'
import oopLogo from '../assets/stack/oop.png'
import dsaLogo from '../assets/stack/dsa.png'
import networkLogo from '../assets/stack/network.png'
import webLogo from '../assets/stack/web.png'
import cLogo from '../assets/stack/c.png'
import cppLogo from '../assets/stack/cpp.svg'
import sqlLogo from '../assets/stack/mysql.svg'
import dbmsLogo from '../assets/stack/dbms.png'
import terminalLogo from '../assets/stack/terminal.png'

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