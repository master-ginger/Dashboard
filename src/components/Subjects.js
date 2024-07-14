import { extendTheme, Heading } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"

export default function Subjects(){
    
    return(
        <div>
            <Heading>Subject Progress</Heading>
            <div className=" border-2 border-gray-300 mx-96 my-8 ">
                <div className="flex justify-around mt-10">
                    <div className="text-2xl font-semibold">English</div>
                    <div className=" ml-10 mt-3 w-1/4"><Progress value={80} colorScheme="pink"/></div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="text-2xl font-semibold">Maths</div>
                    <div className=" ml-10 mt-3 w-1/4 "><Progress value={95} colorScheme="blue"/></div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="text-2xl font-semibold">Science</div>
                    <div className=" ml-10 mt-3 w-1/4 "><Progress value={76} colorScheme="green"/></div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="text-2xl font-semibold">History</div>
                    <div className=" ml-10 mt-3 w-1/4 "><Progress value={55} colorScheme="red"/></div>
                </div>
                <div className="flex justify-around mt-10 mb-10">
                    <div className="text-2xl font-semibold">Computer</div>
                    <div className=" ml-10 mt-3 w-1/4 "><Progress value={98} colorScheme="purple"/></div>
                </div>
            </div>
            <br/>
        </div>
    )
}