const question = [
    {
        'qua': 'Which of the following is the markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a'
    },
    {
        'qua': 'What year was JavaScript launched?',
        'a': '1995',
        'b': '1996',
        'c': '1997',
        'd': '1998',
        'correct': 'b'
    },
    {
        'qua': 'Frontend language for using styling?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'b'
    },
    {
        'qua': 'What is the capital of France?',
        'a': 'London',
        'b': 'Paris',
        'c': 'Berlin',
        'd': 'Madrid',
        'correct': 'b'
    },
    {
        'qua': 'What is 2 + 2?',
        'a': '3',
        'b': '4',
        'c': '5',
        'd': '6',
        'correct': 'b'
    },
    {
        'qua': 'Which programming language is used for building web applications?',
        'a': 'Java',
        'b': 'Python',
        'c': 'Ruby',
        'd': 'JavaScript',
        'correct': 'd'
    },
    {
        'qua': 'What does CSS stand for?',
        'a': 'Cascading Style Sheets',
        'b': 'Computer Style Sheets',
        'c': 'Creative Style Sheets',
        'd': 'Cascading Style Script',
        'correct': 'a'
    },
    {
        'qua': 'Which of the following is not a programming language?',
        'a': 'Java',
        'b': 'CSS',
        'c': 'Python',
        'd': 'C++',
        'correct': 'b'
    },
    {
        'qua': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hyperlinks and Text Markup Language',
        'c': 'Home Tool Markup Language',
        'd': 'Hyper Tool Markup Language',
        'correct': 'a'
    },
    {
        'qua': 'Which of the following is a relational database management system?',
        'a': 'MongoDB',
        'b': 'MySQL',
        'c': 'Redis',
        'd': 'SQLite',
        'correct': 'b'
    },
    {
        'qua': 'Which company developed the JavaScript programming language?',
        'a': 'Google',
        'b': 'Microsoft',
        'c': 'Netscape',
        'd': 'Mozilla',
        'correct': 'c'
    },
    {
        'qua': 'What does API stand for?',
        'a': 'Application Programming Interface',
        'b': 'Automated Program Interaction',
        'c': 'Automated Programming Interface',
        'd': 'Application Program Integration',
        'correct': 'a'
    },
    {
        'qua': 'What does IDE stand for?',
        'a': 'Integrated Development Environment',
        'b': 'Interactive Development Environment',
        'c': 'Integrated Design Environment',
        'd': 'Interactive Design Environment',
        'correct': 'a'
    },
    {
        'qua': 'What does MVC stand for in web development?',
        'a': 'Model View Control',
        'b': 'Model View Component',
        'c': 'Model View Controller',
        'd': 'Model View Code',
        'correct': 'c'
    },
    {
        'qua': 'What does SQL stand for?',
        'a': 'Structured Query Language',
        'b': 'Sequential Query Language',
        'c': 'Simple Query Language',
        'd': 'Standard Query Language',
        'correct': 'a'
    },
    {
        'qua': 'What is the output of 2 * 3?',
        'a': '5',
        'b': '6',
        'c': '9',
        'd': '12',
        'correct': 'b'
    },
    {
        'qua': 'Which programming language is often used for scientific computing and data analysis?',
        'a': 'Java',
        'b': 'C++',
        'c': 'Python',
        'd': 'JavaScript',
        'correct': 'c'
    },
    {
        'qua': 'What does JSON stand for?',
        'a': 'JavaScript Object Notation',
        'b': 'JavaScript Object Network',
        'c': 'JavaScript Object Namespace',
        'd': 'JavaScript Open Network',
        'correct': 'a'
    },
    {
        'qua': 'What is the result of 10 modulo 3?',
        'a': '0',
        'b': '1',
        'c': '2',
        'd': '3',
        'correct': 'c'
    }
];


let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    quesBox.innerText = `${index + 1}) ${data.qua}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    if (index < total) {
        loadQuestion();
    } else {
        endQuiz();
    }
};

const getAnswer = () => {
    let selectedOption;
    optionInputs.forEach(input => {
        if (input.checked) {
            selectedOption = input.value;
             
        }
    });
    return selectedOption;
};

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });
};

const endQuiz = () => {
    const box = document.getElementById("box");
    box.innerHTML = `
        <div style="text-align: center;">
            <h3>Thank you for playing the game!</h3>
            <h2>${right} / ${total} are correct</h2>
        </div>
    `;
};


// Initial call
loadQuestion();
