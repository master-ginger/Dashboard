import { Card,CardBody,Text,Heading, CircularProgress,CircularProgressLabel} from "@chakra-ui/react";
import { MdOutlineComputer,MdOutlineAccessTime } from "react-icons/md";
import { IoIosBook } from "react-icons/io";   
import { PiNotepad,PiUser } from "react-icons/pi";
import Board,{moveCard} from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import './style.css';
import Chart1 from "./Chart";
import Calendar from 'react-calendar';
import { IoSchoolSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";  
import { FaTwitter } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import Subjects from "./Subjects";
import Teachers from "./Teachers";

function Home(){
  const board = {
    columns: [
      {
        id: 1,
        title: "Pending",
        backgroundColor: "#fff",
        cards: [
          {
            id: 1,
            title: "Electrical Assignment",
            description: "Complete all 5 assignments"
          },
          {
            id: 2,
            title: "Project webflow",
            description: "Create webflow for the kanban project"
          },
        ]
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 3,
            title: "Preparing for test",
            description: "Completed 50%"
          }
        ]
      },
      {
        id: 3,
        title: "Completed",
        cards: [
          {
            id: 4,
            title: "Design and Analysis",
            description: "Revise chapter and attempt test"
          }
        ]
      } 
    ]
  };

  const items = [];
    return (
        <div className="">
          <div className="mb-10">
            <nav class=" w-full  px-4 py-2   bg-white  shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
  <div class="container flex items-center justify-between  mx-auto text-blue-gray-900">
    
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li
          class="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
            <a href="#"
      class="mr-4 block text-black cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
      EduPortal
    </a>    
    
        </li>
      </ul>
    </div>
    <div className='flex text-xl'>
      <div className='mx-20'><a href='#'>Home</a></div>
      <div ><a href="#task">Tasks</a></div>
      <div className='mx-20'><a href="#prog">Progress</a></div>
      <div><a href="#faculty">Faculty</a></div>
    </div>
    <div class="flex items-center gap-x-1">
      <button
        class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button">
        <span>Log In</span>
      </button>
      <button
        class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button">
        <span>Sign in</span>
      </button>
    </div>
    
  </div>
</nav> 

        </div>
            <div className="text-start mx-32"><Heading>Hello, Bhavana!!</Heading></div><br/>
            <div className="flex justify-center">
                <Card className="mr-10" color="white" backgroundColor="black">
                    <div className="flex">
                    <CardBody>
                        <Text>All Courses</Text>
                        <Heading>04/06</Heading>
                    </CardBody>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/176/296/non_2x/simple-education-logo-design-template-book-icon-emblem-for-courses-classes-and-schools-illustration-online-education-business-company-library-book-store-university-and-learning-concept-free-vector.jpg" alt="img" className=" h-36"/>
                    </div>
                    </div>
                    
                    
                </Card>
                <Card className="" color="white" backgroundColor="black">
                    <div className="flex">
                    <CardBody>
                        <Text>All Courses</Text>
                        <Heading>04/06</Heading>
                    </CardBody>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/176/296/non_2x/simple-education-logo-design-template-book-icon-emblem-for-courses-classes-and-schools-illustration-online-education-business-company-library-book-store-university-and-learning-concept-free-vector.jpg" alt="img" className=" h-36"/>
                    </div>
                    </div> 
                </Card>
                <Card className="mx-10" color="white" backgroundColor="black">
                    <div className="flex">
                    <CardBody >
                        <Text>All Courses</Text>
                        <Heading>04/06</Heading>
                    </CardBody>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/176/296/non_2x/simple-education-logo-design-template-book-icon-emblem-for-courses-classes-and-schools-illustration-online-education-business-company-library-book-store-university-and-learning-concept-free-vector.jpg" alt="img" className=" h-36"/>
                    </div>
                    </div>
                </Card>
                <Card className="" color="white" backgroundColor="black">
                    <div className="flex">
                    <CardBody >
                        <Text>All Courses</Text>
                        <Heading>04/06</Heading>
                    </CardBody>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/176/296/non_2x/simple-education-logo-design-template-book-icon-emblem-for-courses-classes-and-schools-illustration-online-education-business-company-library-book-store-university-and-learning-concept-free-vector.jpg" alt="img" className=" h-36"/>
                    </div>
                    </div>
                </Card>
            </div>
        <br/><br/>
            <div className="flex justify-center">
                <div className="w-3/5 mr-10">
                    <Card>
                       <CardBody> <Heading>Todays Lessons</Heading><br/>
                       <div className="flex justify-between">
                        <div className="w-1/3"><CircularProgress value={80} size={120}><CircularProgressLabel>80%</CircularProgressLabel></CircularProgress></div>
                        <div className="flex justify-around w-2/3">
                            <div>
                                <div className="flex"><MdOutlineComputer size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Class</div><div className="text-lg font-semibold">Electrical</div></div></div></div>
                                <div className="flex"><IoIosBook size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Lessons</div><div className="text-lg font-semibold">5 Lessons</div></div></div></div>
                                <div className="flex"><MdOutlineAccessTime size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Time</div><div className="text-lg font-semibold">12 hours</div></div></div></div>
                            </div>
                            <div>
                                <div className="flex"><PiNotepad size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Assignments</div><div className="text-lg font-semibold">5 Assignments</div></div></div></div>
                                <div className="flex"><PiUser size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Professor</div><div className="text-lg font-semibold">Bhavana Pillai</div></div></div></div>
                                <div className="flex"><MdOutlineAccessTime size="1.4rem"/><div ><div className="text-start mx-2"><div className=" text-gray-600" >Chapters Completed</div><div className="text-lg font-semibold">4/5</div></div></div></div>
                            </div>
                        </div>
                       </div>
                       </CardBody>
                    </Card><br/><br/>

                    <div id="task">
                    <Heading>
                      Task Board
                    </Heading>
                    <Board
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        onCardNew={console.log}
      /></div>
                </div>
                <div className="w-1/5">
                <Card className="p-2 react-calendar">
                  <Heading className="mb-1">Calendar</Heading>
                  <Calendar />
                </Card>
      <Card className="mt-3">
      <div className="text-3xl font-bold mb-5">Upcoming events</div>
<ol class="relative border-s border-gray-200 dark:border-gray-700 h-64 overflow-y-scroll">                  
    <li class="mb-10 ">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">24 June</time>
        <h3 class="text-lg font-semibold text-gray-900 ">Megatron</h3>

    </li>
    <li class="mb-10">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-800">28 June</time>
        <h3 class="text-lg font-semibold text-gray-900 ">Ranangan</h3>
    </li>
    <li class="mb-10">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-800">4 July</time>
        <h3 class="text-lg font-semibold text-gray-900 ">Industrial Visit</h3>
    </li>
    <li class="">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-800">7 July</time>
        <h3 class=" text-lg font-semibold text-gray-900 ">Udaan</h3>
    </li>
</ol>


      </Card>
    </div>
    
    </div>
    <br/><br/><br/>
    
    <div id="prog"><Chart1 /></div>
    <div className=" mt-10">
      <div><Subjects/></div>
      <div id="faculty"><Teachers/></div><br/>
    </div>

    <div className="bg-gray-500 flex justify-around py-10">
        <div>
          <div className="flex">
            <div className="text-6xl"><IoSchoolSharp/></div>
            <div className="text-4xl mt-3 ml-3">EduPortal</div>
          </div>
          <div>
            <div className="text-xl ml-2 mt-2">Phone no: +91 9834732345</div>
            <div className="text-xl ml-2 mt-2 text-start">Location: Pimpri, Pune</div>

          </div>
        </div>
        <div className=" font-serif text-4xl mt-10 font-bold">
          Where Excellence meets innovation
        </div>
    </div>
            </div>
       
    )
}

export default Home;