import React, {Component} from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Freelancer_Democard from "./Freelancer_Democard";
import next_white from "../Files/right-arrow (white).png"
import JoinWork from "./Crazzio_Join_P5_work";
import { LanguagesList } from "./LanguagesList";



const JoinAbout = (props) =>{

    const [enteredcountry, setEnteredcountry] = useState("")
    const [enteredstate, setEnteredstate] = useState("")
    const [enteredcity, setEnteredcity] = useState("")
    const [selectedlang, setSelectedlang] = useState("")
    const [selectedlang_mode, setSelectedlang_mode] = useState("")
    const [selectedlang_speaking, setSelectedlang_speaking] = useState("")
    const [enteredDegree, setEnteredDegree] = useState("")
    const [enteredcollege, setEnteredcollege] = useState("")
    
    const onchangecountry = (event) =>{
        setEnteredcountry(event.target.value)
    }

    const onchangestate = (event) =>{
        setEnteredstate(event.target.value)
    }

    const onchangecity = (event) =>{
        setEnteredcity(event.target.value)
    }

    const onchangelang = (event) =>{
        setSelectedlang(event.target.value)
    }

    const onchangelang_mode = (event) =>{
        setSelectedlang_mode(event.target.value)
    }

    const onchangelang_speaking = (event) =>{
        setSelectedlang_speaking(event.target.value)
    }

    const onchangedegree = (event) =>{
        setEnteredDegree(event.target.value)
    }

    const onchangecollege = (event) =>{
        setEnteredcollege(event.target.value)
    }

    const infoListObject = {...props.infoObject, country:enteredcountry, state:enteredstate, city:enteredcity, college:enteredcollege, degree:enteredDegree, lang:selectedlang, lang_mode:selectedlang_mode, lang_speaking:selectedlang_speaking}

    const ForwardButton = () =>{
        if ((enteredcountry.length === 0) || (enteredcity.length === 0) ){
            document.getElementById("place_error").style.display = "block"
            document.getElementById("place_error").innerHTML = "Country and City cannot have 0 characters"
        }
        else if ((enteredDegree.length === 0) || (enteredcollege.length === 0)){
            document.getElementById("education_error").style.display = "block"
            document.getElementById("education_error").innerHTML = "Degree and College name cannot have 0 characters"
        }
        /*else if ((selectedlang.length === 0) || (selectedlang_mode.length === 0) || (selectedlang_speaking.length === 0)){
            document.getElementById("title_input").style.backgroundColor = "rgb(252, 165, 165)"
            document.getElementById("title_error").style.display = "block"
            document.getElementById("title_error").innerHTML = "Title cannot have 0 characters"
        }*/
        else{
            document.getElementById("Join_About").style.display = "none"
            document.getElementById("JoinWork").style.display = "block"
            console.log(infoListObject)
        }
    }


    
    const Languages = LanguagesList.map((lang) =>
        <option className="text-lg font-medium text-gray-700 bg-gray-100" key={LanguagesList.indexOf(lang)} >{lang}</option>
    )

    const NoOflangs = ["Language 1", "Language 2", "Language 3"]
    

    const LangList = NoOflangs.map((language) =>
        <div className="space-y-5 lg:space-y-0 md:space-x-8 lg:flex">
            
            <p className="mt-3 text-lg font-medium text-gray-800">{language}</p>
            
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0">
                <select onChange={onchangelang} id="lang1" name="lang1" className="w-full h-12 p-2 text-lg font-normal bg-gray-100 rounded-md outline-none sm:w-auto max-w-max focus:rounded-b-none">
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Choose a language</option>
                    {/*Languages list*/}
                    {Languages}
                </select>

                {/*native language or non native*/}
                <select onChange={onchangelang_mode} id="lang1" name="lang1" className="w-full h-12 p-2 text-lg font-normal bg-gray-100 rounded-md outline-none max-w-max focus:rounded-b-none">
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Native Language</option>                                                                        
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Non-native Language</option>                                                                        
                </select>

                {/*Eloquent or */}
                <select onChange={onchangelang_speaking} id="lang1" name="lang1" className="w-full h-12 p-2 text-lg font-normal bg-gray-100 rounded-md outline-none sm:w-auto max-w-max focus:rounded-b-none">
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Choose Level of speaking/writing</option>
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >No proficiency</option>
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Elementary proficiency</option>                                                                        
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Limited working proficiency.</option>                                                                        
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Professional working proficiency</option>                                                                        
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Full professional proficiency</option>                                                                        
                    <option className="text-sm font-medium text-gray-700 bg-gray-100 sm:text-lg" >Native / bilingual proficiency</option>                                                                                                                                           
                </select>
            </div>
        </div>
     )

    return(
        <div>
            <div id="Join_About" className="h-screen py-6 overflow-scroll bg-gradient-to-b from-transparent to-gray-800 md:py-0 xl:py-8 no-scrollbar">
                
                <div id="topWebName" class="my-10">
                    <p class="z-50 mx-auto font-serif text-6xl font-bold text-center lg:text-left text-gray-900 uppercase max-w-max "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-xl lowercase md:text-3xl xl:text-2xl crazzio_com_hover">.com</span></p>
                </div>

                <div  className="p-5 mx-2 my-16 space-y-3 bg-white rounded-lg shadow-2xl md:mx-6 lg:p-10 lg:mx-10 xl:w-120 xl:mx-auto">
                    {/*Next Button*/}
                    <div onClick = {ForwardButton} className="hidden float-right p-2 bg-gray-900 rounded-full shadow-lg cursor-pointer md:block w-14 h-14 sm:w-16 sm:h-16 hover:bg-gray-800">
                        <img src={next_white} className="h-10 w-10 ml-1.5 mt-1" />
                    </div>
                    
                    {/*Headings and Inputs*/}
                    <div className="space-y-8 sm:space-y-16">
                        <div className="space-y-3">
                            <p className="hidden text-3xl font-semibold text-gray-900 sm:block ">Tell us something about yourself</p>
                            <p className="text-3xl font-semibold text-gray-900 sm:hidden ">About yourself</p>
                        </div>
                        {/*Specialisation */}
                        <div className="flex flex-col my-6 space-y-4">
                            <label for="specialization" className="text-lg font-semibold text-gray-800 sm:text-2xl">Where do you live ?</label>
                            <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
                                <input onChange={onchangecountry} placeholder="Select your country" className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none " />
                                <input onChange={onchangestate} placeholder="Select your state" className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none " />
                                <input onChange={onchangecity} placeholder="Select your city" className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none " />
                            </div>
                            <p id = "place_error" class="hidden text-sm  text-red-500 transition-all duration-300"></p>
                        </div>

                        {/*Languages*/}
                        <div className="flex flex-col my-6 space-y-4">
                            <div className="">
                                <p for="specialization" className="text-lg font-semibold text-gray-800 sm:text-2xl">Languages</p>
                                {/*Add language button*/}
                                <div className="flex float-right px-2 py-0 space-x-2 bg-gray-200 cursor-pointer hover:bg-gray-300 max-w-max -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>
                            {/*Language Dropdown*/}
                            <div className="p-3 space-y-4 bg-gray-300 ">
                                {LangList}
                            </div>
                        </div>

                        {/*Degree*/}
                        <div className="flex flex-col my-6 space-y-4" >
                            <div className="">
                                <p  className="text-lg font-semibold text-gray-800 sm:text-2xl">Education</p>
                                {/*Add Education button*/}
                                <div className="flex float-right px-2 py-0 space-x-2 bg-gray-200 cursor-pointer hover:bg-gray-300 max-w-max -mt-7">
                                    <p className="font-extrabold text-gray-800 text-3xl -mt-1.5 ">+</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5 xl:space-x-8 xl:space-y-0 xl:flex-row ">
                                <input onChange={onchangedegree} placeholder="What Degree/s do you have?" className="flex-shrink-0 h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none " />
                                <input onChange={onchangecollege} placeholder="Name of school, college or university" className="h-12 p-2 text-lg font-normal placeholder-gray-500 bg-gray-100 border-b-2 border-gray-200 rounded-md outline-none lg:w-full " />
                            </div>
                            <p id = "education_error" class="hidden text-sm  text-red-500 transition-all duration-300"></p>
                        </div>
                    </div>
                    

                    <div onClick = {ForwardButton} className="p-2 mx-auto bg-gray-900 rounded-full shadow-lg cursor-pointer md:hidden w-14 h-14 hover:bg-gray-800">
                        <img src={next_white} className="w-10 h-10 mt-.5 ml-1" />
                    </div>

                    {/*Demo Card*/}
                    <div className="hidden py-2 md:block">
                        <Freelancer_Democard country = {enteredcountry} city = {enteredcity} /*Time = {Date()}*/ lang = {selectedlang} lang_mode = {selectedlang_mode} lang_speaking = {selectedlang_speaking} degree = {enteredDegree} Fname = {infoListObject.Fname} Lname = {infoListObject.Lname} username = {infoListObject.username} title = {infoListObject.title} />
                    </div>
                </div>
            </div>

            {/*Next Page for about*/}
            <div id="JoinWork" className="hidden">
                <JoinWork />
            </div>
        </div>
    )
}

export default JoinAbout