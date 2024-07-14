import { Heading } from "@chakra-ui/react"
import fem from './female.jpeg'

export default function Teachers(){
    return(
        <div>
            <Heading className="mb-5">Our Talented Teaching Staff</Heading>
            <div >
                <div className="flex justify-center px-10">

                    <div className="w-1/2">
                        <div className="flex mb-3 border-2 border-gray-300 p-2">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Bhavana Pillai</div>
                                <div>14+ years of experience</div>
                                <div>Specialization in Web development</div>
                                <div>Faculty Co-ordinator</div>
                            </div>
                        </div>
                        <div className="flex mb-3 border-2 border-gray-300 p-2">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Jacob Dzusa</div>
                                <div>10+ years of experience</div>
                                <div>Specialization in Data Science</div>
                                <div>Student Co-ordinator</div>
                            </div>
                        </div>
                        <div className="flex border-2 mb-3 border-gray-300 p-2 ">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Kang Tae Jun</div>
                                <div>9+ years of experience</div>
                                <div>Specialization in Foreign Languages</div>
                                <div>Language Club Lead</div>
                            </div>
                        </div>
                        </div>

                        <div className="ml-10 w-1/2">
                        <div className="flex border-2 mb-3 border-gray-300 p-2 ">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Siddhart Sahir</div>
                                <div>7+ years of experience</div>
                                <div>Specialization in Mathematics</div>
                                <div>Mathematics Club Lead</div>
                            </div>
                        </div>
                        <div className="flex border-2 mb-3 border-gray-300 p-2 ">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Aisha Malhotra</div>
                                <div>5+ years of experience</div>
                                <div>Specialization in Chemistry</div>
                                <div>Parents Co-ordinator</div>
                            </div>
                        </div>

                        <div className="flex border-2 border-gray-300 p-2 ">
                            <div><img src={fem} height={100} width={100}/></div>
                            <div className="ml-4 text-start text-2xl">
                                <div className="font-bold">Prof. Harshada Patel</div>
                                <div>4+ years of experience</div>
                                <div>Specialization in Sports</div>
                                <div>Sports Co-ordinator</div>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    )
}