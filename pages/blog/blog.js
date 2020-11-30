const dataBlog = [
    {
        photo: '../../img/blog/blog1.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog2.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog3.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog4.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog5.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog6.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog7.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog8.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog9.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    },
    {
        photo: '../../img/blog/blog10.png',
        title: 'CHECK OUT OUR NEW FASHION DESIGN',
        text: 'The article focuses on the lack of taste in todays fashion industry. We will analyze how this started, the state it is in now and how can we fix it...',
        hashtag: 'NIKE',
        date: '28. November 2020'
    }
];

function generateBlog(data) {
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        const div11 = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const img = document.createElement('img');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');
        const a4 = document.createElement('a');
        const text1 = document.createTextNode(data[i].label);
        const text2 = document.createTextNode(data[i].brand);
        const text3 = document.createTextNode(data[i].name);
        const text4 = document.createTextNode(data[i].price);
        const textPrice = document.createTextNode(',00 €');
        div.setAttribute('class', 'productBox');
        div11.setAttribute('class', 'productInfoContainer');
        div1.setAttribute('class', 'productInfo1');
        div2.setAttribute('class', 'productInfo2');
        div3.setAttribute('class', 'productInfo3');
        div4.setAttribute('class', 'productInfo4');
        a1.appendChild(text1);
        a2.appendChild(text2);
        a3.appendChild(text3);
        a4.appendChild(text4);
        a4.appendChild(textPrice);
        img.src = data[i].photo;
        img.setAttribute('class', 'productPhoto');
        div1.appendChild(a1);
        div2.appendChild(a2);
        div3.appendChild(a3);
        div4.appendChild(a4);
        div11.appendChild(div1);
        div11.appendChild(div2);
        div11.appendChild(div3);
        div11.appendChild(div4);
        div.appendChild(img);
        div.appendChild(div11);
        document.querySelector('.newProductsList').appendChild(div);
    }
}
generateNew(dataBlog);