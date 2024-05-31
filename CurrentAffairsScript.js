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
        question:"What is the theme of the 2023 International Day of Yoga celebrated in India?",
        options:["Yoga for Health","Yoga for Peace","Yoga for Wellness","Yoga for Humanity"],
        answer:"Yoga for Humanity",
        Explanation:"The theme for the 2023 International Day of Yoga was 'Yoga for Humanity,' highlighting the role of yoga in promoting global peace and well-being."
    },
    {
        question:"The 'One Nation, One Ration Card' scheme was launched to benefit which section of society?",
        options:["Farmers","Migrant workers","Students","Senior citizens"],
        answer:"Migrant workers",
        Explanation:"The 'One Nation, One Ration Card' scheme allows migrant workers to access their food ration from anywhere in India."
    },
    {
        question:"The National Education Policy (NEP) 2020 aims to achieve which of the following by 2030?",
        options:["100% Gross Enrollment Ratio (GER) in school education","50% Gross Enrollment Ratio (GER) in higher education","100% literacy rate","50% literacy rate"],
        answer:"50% Gross Enrollment Ratio (GER) in higher education",
        Explanation:"The NEP 2020 aims to achieve a 50% GER in higher education by 2030."
    },
    {
        question:"What is the name of the mission launched by the Indian government to promote electric vehicles?",
        options:["FAME India","Green India","EV India","E-Mobility India"],
        answer:"FAME India",
        Explanation:"The Faster Adoption and Manufacturing of Hybrid and Electric Vehicles (FAME) India scheme promotes electric vehicles."
    },
    {
        question:"Which Indian airport was declared the best airport in the 2022 Skytrax World Airport Awards?",
        options:["Indira Gandhi International Airport, Delhi","Chhatrapati Shivaji Maharaj International Airport, Mumbai","Kempegowda International Airport, Bengaluru","Rajiv Gandhi International Airport, Hyderabad"],
        answer:"Indira Gandhi International Airport, Delhi",
        Explanation:"Indira Gandhi International Airport in Delhi was declared the best Indian airport in the Skytrax World Airport Awards 2022."
    },
    {
        question:"Who is the first Indian woman to win a silver medal in boxing at the Olympics?",
        options:["Mary Kom","P. V. Sindhu","Lovlina Borgohain","Sakshi Malik"],
        answer:"Lovlina Borgohain",
        Explanation:"Lovlina Borgohain won a silver medal in boxing at the Tokyo 2020 Olympics."
    },
    {
        question:"Which Indian state is the largest producer of solar energy as of 2024?",
        options:["Rajasthan","Gujarat","Tamil Nadu","Karnataka"],
        answer:"Rajasthan",
        Explanation:"Rajasthan is the largest producer of solar energy in India, leveraging its vast desert areas for solar farms."
    },
    {
        question:"Who is the current Defence Minister of India (as of 2024)?",
        options:["Rajnath Singh","Nirmala Sitharaman","Amit Shah","Piyush Goyal"],
        answer:"Rajnath Singh",
        Explanation:"Rajnath Singh has been serving as the Defence Minister of India since May 2019."
    },
    ]


function SubmitQuestion(){
    document.getElementById('QuestionSubmit').disabled=true;
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
    document.getElementById('QuestionSubmit').disabled=false;
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
