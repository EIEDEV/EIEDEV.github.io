const quest=document.querySelector<HTMLParagraphElement>("#questions")
const ansa=document.querySelector<HTMLDivElement>("#answer-buttons")
const nest=document.querySelector<HTMLButtonElement>("#next")
const home=document.querySelector<HTMLAnchorElement>("#home")

interface obj{
    question: string,
    options: string[],
    answer: string
}

const allList:obj[]=[
    
    {question: "Which chemical is almost always used to alter mud pH level while drilling?",
    options: ["Emulsified Oil", "Lime", "Bentonite", "Chloride"],
    answer: "Lime"},
    {question: "Overpressure is caused by:",
    options: ["Increased input flow due to upstream flow-control device failure", 
    "Decreased output flow due to blockage", "Heating of closed systems"],
    answer: "Decreased output flow due to blockage"},
    {question: "Leak caused by",
    options: ["Corrosion", "Erosion", "Mechanical falure due to temperature change, overpressure and underpressure, and extenal impact force"],
    answer: "Mechanical falure due to temperature change, overpressure and underpressure, and extenal impact force"},
    {question: "Liqud overflow caused by:",
    options: ["Increased input flow due to upstream flow-control device failure", "Decreased output flow due to blockage in the liquid discharge"],
    answer: "Increased input flow due to upstream flow-control device failure"},
    {question: "Excess temperature caused by:",
    options: ["Overfuelinf of burner", "External fire", "Spark Emmission"],
    answer: "Overfuelinf of burner"},
    {question: "Underpressure caused by:",
    options: ["Outlet flow-control device (e.g choke) failure", "Inlet blockage", "Cooling of closed system"],
    answer: "Outlet flow-control device (e.g choke) failure"},
    {question: "Gas blow-by caused by:",
    options: ["Increased input flow due to upstream flow-control device failure", "Decreased output flow due to blockage"],
    answer: "Decreased output flow due to blockage"},
    //Drilling
    {question: "What is the fundamental units of stoke and what does it measure",
    options: [ "lb./bbl and alkalinity", "length2/time and Kinetic viscosity"],
    answer: "length2/time and Kinetic viscosity"},
    {question: "What invention was Rueben Baker famous for inventing that was run at the bottom of a casing string",
    options: [ "Casing shoe", "Drill bit"],
    answer: "Casing shoe"},
    {question: "What problem plagues bits in some formations where too much weight on bit is applied?",
    options: [ "Bit drop", "Bit balling"],
    answer: "Bit balling"},
    {question: "Drilling line does not tend to wear uniformely over its length.The most severe kind of wear occurs at which two kinds of points?",
    options: [ "Pick up points on shivs and lap points on drum of draw works", "Pick up points on shivs and expand points on drum of draw works"],
    answer: "Pick up points on shivs and lap points on drum of draw works"},
    {question: "This class of cement, according to API, is intended for use at 10000 to 14000 feet at high temperatures and pressures.",
    options: [ "Class F", "Class J"],
    answer: "Class J"},
    {question: "A blend of lubricating grease that is applied to threads of a pipe in order to make the joint leak proof and pressure tight.",
    options: [ "Pipe dope", "Grease oil"],
    answer: "Pipe dope"},
    {question: "Identify two types of fixed cutter drilling bits.",
    options: [ "PGC (Polycrystalline Gold Compact) and Natural Gold", "PDC (Polycrystalline Diamond Compact) and Natural diamond"],
    answer: "PDC (Polycrystalline Diamond Compact) and Natural diamond"},
    {question: "What is the standard length of drill pipe?",
    options: ["30 feet", "40 feet"],
    answer: "30 feet"},
    {question: "An uncontrolled discharge of formation fluid out of the wellbore",
    options: ["Kick", "Blow-out"],
    answer: "Blow-out"},
    {question: "Who invented the first roller cutter bit in 1909 that dramatically improved rotary drilling?",
    options: ["Howard Hughes,Sr", "Howard Hughes,Jr"],
    answer: "Howard Hughes,Sr"},
    {question: "This is the act of pulling the drill string out of hole or putting it in the hole.",
    options: ["Surging", "Tripping", "Swabbing"],
    answer: "Tripping"},
    {question: "This person is considered the father of the petroleum industry and lived from 1819 to 1880",
    options: ["Colonel Edwin Drake", "Howard Hughes,Jr"],
    answer: "Colonel Edwin Drake"},
    {question: "Name the special tool used by the rig crew to prevent the drill bit from turning.",
    options: ["Casing shoe", "Bit breaker"],
    answer: "Bit breaker"},
    {question: "According to API, what class of cement is for use in depths to 6000 feet under normal conditions?",
    options: [ "Class F", "Class A"],
    answer: "Class A"},
    {question: "This device is suspended from a hook so that its rotary mechanism is free to travel up and down the derrick.",
    options: [ "Top Drive", "Casing"],
    answer: "Top Drive"},
    {question: "This term is used to describe the pressure required to induce cracks in a rock at a given depth.",
    options: [ "Hydrostatic Gradient", "Fracture Gradient"],
    answer: "Fracture Gradient"},
    {question: "In drilling, this is the term used to describe the height of a fluid column.",
    options: [ "Hydrostatic Gradient", "Hydrostatic head"],
    answer: "Hydrostatic head"},
    {question: "A well shut-in slightly above the producing formation by use of special downhole tools containing a valve that can be preprogrammed or controlled from the surface.",
    options: [  "Bottom hole shut-in", "Liner casing shut-in"],
    answer: "Bottom hole shut-in"},
//reservoir
]

const ques: obj[]=[
]

 

let x=0
let y=0

function startQuez(){
    x=0
    y=0
    if (home !== null){
        home.style.display= "none"
    }
    ques.length=0
    selectRandomQuestions(10)
    showQuest()
    if (nest !== null){
    nest.textContent="Next"
    }
}

function showQuest(){
    if (quest !== null){
            const showIndex= ques[x]
            const quesNo= x + 1
            quest.textContent= quesNo + ". " + showIndex.question
        }
    if (ansa !== null){
        ansa.innerHTML=""
        const showIndex= ques[x]
        showIndex.options.forEach(option => {
            const opt= document.createElement("button")
            opt.classList.add("answer")
            opt.textContent=option
            ansa.appendChild(opt)
            opt.addEventListener("click", () => checkAnswe(option, showIndex.answer, opt))
        })
    }
}

function selectRandomQuestions(count:number){
     const allCopy=[...allList]
     ques.length=0
     for (let i=0; i < count; i++){
     const RandomIndex= Math.floor(Math.random()*allCopy.length)
 // allcopy returns a list of the random index chossen, that is why we had to put [0]
 //random index is the index to be removed
 // 1 is the number of times they should remove it, if it is 2 the next {}
 //assuming the initial position of random index will also be removed    
     ques.push(allCopy.splice(RandomIndex, 1)[0])
 }
}

function  checkAnswe(a:string, b:string, c:HTMLButtonElement){
    if (a ===b){
        c.classList.add("correct")
        y++
    }
    else{
        c.classList.add("incorrect")
    }

    const optList=ansa?.querySelectorAll("button")
    optList?.forEach(button => {
//        button.disabled=true
        button.classList.add("disabled")
    })
}

function showResult(){
    if (quest !== null){
    quest.textContent = `You scored ${y} out of ${ques.length}! `
    }
    if (ansa !== null){
    ansa.innerHTML=" "
    }
     if (nest !== null){
    nest.textContent="Play again"
    }
    if (home !== null){
        home.style.display= "flex"
    }
}

function handleNextButtonClick(){
    x++;
    if (x < ques.length){
        showQuest()
    }
    else{
        showResult()
    }
}

function startOver(){
    if (x < ques.length){
        handleNextButtonClick()
    }
    else{
        startQuez()
    }
}

nest?.addEventListener("click", startOver)

startQuez()