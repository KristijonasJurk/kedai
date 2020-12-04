const dataBlog = [
    {
        photo: '../../img/blog/blog1.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28 November 2020'
    },
    {
        photo: '../../img/blog/blog2.png',
        title: 'EVERYTHING YOU NEED TO KNOW ABOUT THE LATEST ASICS',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'FASHION',
        date: '20 November 2020'
    },
    {
        photo: '../../img/blog/blog3.png',
        title: 'MEET OUR NEW STUDIO JANITOR BRANDON ROY',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'STYLE',
        date: '9 November 2020'
    },
    {
        photo: '../../img/blog/blog4.png',
        title: 'LACOSTE IS BACK ON TRACK, READ ALL ABOUT IT',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'LACOSTE',
        date: '2 November 2020'
    },
    {
        photo: '../../img/blog/blog5.png',
        title: 'OUR NEW ALL-WHITE COLLECTION IS BRINGING IT HOT',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'COMMUNITY',
        date: '29 September 2020'
    },
    {
        photo: '../../img/blog/blog6.png',
        title: 'THESE CHINESE REEBOOKS WILL LEAVE YOU SPEECHLESS',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'STYLE',
        date: '20 September 2020'
    },
    {
        photo: '../../img/blog/blog7.png',
        title: 'OLD-SCHOOL SNEEKERS ARE 23% MORE LIKELY TO GET YOU HIRED',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'SNEAKERS',
        date: '3 September 2020'
    },
    {
        photo: '../../img/blog/blog8.png',
        title: 'OUR WAREHOUSE IS RUNNING OUT OF SPACE (GIVEAWAY)',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'TRENDS',
        date: '12 June 2020'
    },
    {
        photo: '../../img/blog/blog9.png',
        title: 'SUBWAY STORIES: THESE BEST FRIENDS MEET IN THE SUBWAY',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'STREETS',
        date: '21 May 2020'
    }
    // {
    //     photo: '../../img/blog/blog10.png',
    //     title: 'ASICS ARE DROPING SOME SHOES THIS WEEKEND',
    //     text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
    //     hashtag: 'FASHION',
    //     date: '5 May 2020'
    // }
];

function generateBlog(data) {
    for (let i = 0; i < data.length; i++) {
        //create all elements
        const divBox = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        const divFooter = document.createElement('div');
        const h4 = document.createElement('h4');
        const divSocials = document.createElement('div');
        const i1 = document.createElement('i');
        const i2 = document.createElement('i');
        const i3 = document.createElement('i');
        //create text nodes
        const h3Text = document.createTextNode(data[i].title);
        const hashtag = document.createTextNode(data[i].hashtag);
        const pText = document.createTextNode(data[i].text);
        const h4Text = document.createTextNode(data[i].date);
        img.src = data[i].photo;
        const hashtagSymbol = document.createTextNode('#');
        //add classes
        divBox.setAttribute('class', 'blogBox');
        divFooter.setAttribute('class', 'blogBoxFooter');
        i1.setAttribute('class', 'fa fa-clock-o');
        i2.setAttribute('class', 'fa fa-twitter twitterSymbol');
        i3.setAttribute('class', 'fa fa-facebook-square facebookSymbol');
        // append to first level 
        divBox.appendChild(img);
        divBox.appendChild(h3);
        divBox.appendChild(p);
        divBox.appendChild(divFooter);
        // append to second level
        p.appendChild(strong);
        h4.appendChild(i1);
        divSocials.appendChild(i2);
        divSocials.appendChild(i3);
        // append text nodes
        divFooter.appendChild(h4);
        divFooter.appendChild(divSocials);
        h3.appendChild(h3Text);
        strong.appendChild(hashtagSymbol);
        strong.appendChild(hashtag);
        p.appendChild(strong);
        p.appendChild(pText);
        h4.appendChild(h4Text);
        // append to html file
        document.querySelector('.blogList').appendChild(divBox);
    }
}
generateBlog(dataBlog);

const boxes = document.querySelectorAll('.blogBox');
const facebook = document.querySelectorAll('.facebookSymbol');
const twitter = document.querySelectorAll('.twitterSymbol');
const img = document.querySelectorAll('.blogBox img');
const p = document.querySelectorAll('.blogBox p');

boxes.forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        box.style.boxShadow = '0px 0px 5px 0px rgb(220, 220, 220)';
        for (let i = 0; i <= dataBlog.length; i++) {
            if (box === boxes[i]) {
                twitter[i].style.color = 'black';
                facebook[i].style.color = 'black';
                img[i].style.transform = 'scale(1.05) translateY(-7px)';
                p[i].style.borderBottom = '1px solid rgb(220, 220, 220)';
            }
        }
    })
    box.addEventListener('mouseleave', function () {
        box.style.boxShadow = '0px 0px 0px 0px rgb(220, 220, 220)';
        for (let i = 0; i <= dataBlog.length; i++) {
            if (box === boxes[i]) {
                twitter[i].style.color = 'transparent';
                facebook[i].style.color = 'transparent';
                img[i].style.transform = 'scale(1) translateY(0px)';
                p[i].style.borderBottom = '2px solid black';
            }
        }
    })
})



// function renderText(data) {
//     const largeText = 200;
//     for (let i = 0; i <= data.length; i++) {
//         if (data[i].text.length > largeText) {
//             let shortText = '';
//             for (let j = 0; j <= largeText; j++) {
//                 shortText += data[i].text[j];
//             }
//         }
//     }
//     return shortText
// }
// renderText(dataBlog)