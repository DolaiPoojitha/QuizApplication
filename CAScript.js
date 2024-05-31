let currentQuestionIndex=0;
let score=0;

const Data=[
    {
        answer: "Kerala",
        Explanation:"Kerala topped the NITI Aayog's Health Index 2022 for its strong healthcare infrastructure and services."
    },
    {
        question:"Which Indian player won the gold medal in badminton at the 2023 BWF World Championships?",
        options:["P.V. Sindhu","Kidambi Srikanth","Lakshya Sen","Saina Nehwal"],
        answer:"Lakshya Sen",
        Explanation:"Lakshya Sen won the gold medal in badminton at the 2023 BWF World Championships, making a significant mark in Indian badminton."
    },
    {
        question:"Which Indian city ranked highest in the Ease of Living Index 20203?",
        options:["Pune","Bangalore","Hyderabad","Chennai"],
        answer:"Bangalore",
        Explanation:"Bangalore topped the Ease of Living Index 2023, reflecting it's quality of life and infrastructure."
    },
    {
        question:"Who is the current Governor of the Reserve Bank of India(as of May 2024)?",
        options:["Raghuram Rajan","Urjit Patel","Shaktikanta Das","Viral Acharya"],
        answer:"Shaktikanta Das",
        Explanation:"Shaktikanta Das has been serving as the Governor of the  Reserve Bank of India since December 2018."
    },
    {
        question:"Which state launched the 'Mission Basundhara' initiative for land record digitization?",
        options:["Assam","WestBengal","Odisha","Kerala"],
        answer:"Assam",
        Explanation:"Assam launched the 'Mission Basundhara' initiative to digitize land records and make them accessible online."

    },
    {
        question:"Which state was declared India's first 'Har Ghar Jal' certified state under the Jal Heevan Mission? ",
        options:["Goa","Harayana","Himachal Pradesh","Sikkim"],
        answer:"Goa",
        Explanation:"Goa was declared India's first 'Har Ghar Jal' certified state, ensuring that every rural household has access to safe drinking water."
        
    },
    {
        question:"Who became the new Chief of Defence Staff(CDS) of India in 2022?",
        options:["Bipin Rawat","Manoj Mukund Naravane","Anil Chauhan","Hari Kumar"],
        answer:"Anil Chauhan",
        Explanation:"General Anil Chauhan was appointed as the Chief of Defence Staff(CDS) of India in september 2022."
        
    },

    {
        question:"",
        options:["","","",""],
        answer:"",
        Explanation:
        
    }

    ]


function SubmitQuestion(){
    // Get all radio buttons with the name 'color'
    let radios = document.getElementsByName('ques');
    let selectedValue = '';
    
    // Loop through the radio buttons to find the checked one
    for (let radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }
    //validating user given answer
    let ans=Data[currentQuestionIndex].answer;
    if(selectedValue==ans)
    {       
        score++;
        document.getElementById('validateanswer').classList.remove('disabled');
        document.getElementById('validateanswer').innerHTML = '<p><strong>You Are Correct &#x2705; </strong></p>';
    }
    else{
        document.getElementById('validateanswer').classList.remove('disabled');
        document.getElementById('validateanswer').innerHTML = '<p><strong>You Are Wrong &#10060;</strong></p>';
    }
    document.getElementById('displayanswer').classList.remove('disabled');
    document.getElementById('Explanation').classList.remove('disabled');
    //displaying crct answer
    document.getElementById('displayanswer').innerHTML=`<p><strong>CorrectAnswer:</strong> ${ans}</p>`;
    let exp=Data[currentQuestionIndex].Explanation;
    //displaying explanation
    document.getElementById('Explanation').innerHTML=`<p><strong>Explanation:</strong>${exp}</p>`;
    document.getElementById('nextButton').disabled=false;
}
function nextQuestion()
{
    document.getElementById('nextButton').disabled=true;
    document.getElementById('validateanswer').className="disabled";
    document.getElementById('displayanswer').className="disabled";
    document.getElementById('Explanation').className="disabled";
    currentQuestionIndex++;
    if(currentQuestionIndex < Data.length)
    {
        let QuestionNo= currentQuestionIndex+1
        document.getElementById('QuestionNumber').textContent=`Question ${QuestionNo} of 15`;
        document.getElementById('Question').textContent=Data[currentQuestionIndex].question;
        let radios = document.getElementsByName('ques');
        let optionscontent=document.getElementsByTagName('label');
        for (let i=0;i<4;i++)
            {
                radios[i].value=Data[currentQuestionIndex].options[i];   
                optionscontent[i].textContent=Data[currentQuestionIndex].options[i];             
            }
        
    }
    else
    {
        console.log(score)
    }
}
