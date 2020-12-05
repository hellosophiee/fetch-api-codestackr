// TODO: Fetching data from demo.json file
// fetch('demo.json')
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((json) => console.log(json));

// TODO: Fetching random images from Unsplash
// fetch('https://unsplash.it/600/400')
//     .then((res) => res.blob())
//     .then((blob) => {
//         let img = document.createElement('img');
//         img.src = URL.createObjectURL(blob);
//         document.querySelector('body').appendChild(img);
//     });

// TODO: Fetching posts from jsonplaceholder
const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData().catch((err) => console.error(err));

async function getData() {
    const postStream = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    const posts = await postStream.json();
    let i = 0;

    // console.log(posts);
    // throw 'Get Data Error';

    posts.forEach((post) => {
        i++;
        if (i < 10) {
            const title = post.title;
            const body = post.body;

            fetch('https://unsplash.it/300/200')
                .then((res) => res.blob())
                .then((blob) => {
                    const newPost = document.importNode(
                        postTemplate.content,
                        true
                    );
                    const postTitle = newPost.querySelector('.post__title');
                    const postBody = newPost.querySelector('.post__body');
                    const postImg = newPost.querySelector('.post__img');

                    // throw 'Image Fetch Error';

                    postImg.src = URL.createObjectURL(blob);
                    postTitle.innerText = title;
                    postBody.innerText = body;

                    postSection.appendChild(newPost);
                })
                .catch((err) => console.error(err));
        }
    });
}

// TODO: Saving posts
// const newPost = {
//     title: 'New Post Title',
//     body: 'Awesome post paragraph',
//     userId: 1,
// };

// const createNewPost = (post) => {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: new Headers({
//             'Content-Type': 'application/json',
//         }),
//     };
//     return fetch('https://jsonplaceholder.typicode.com/posts', options)
//         .then((res) => res.json())
//         .then((posts) => console.log(posts))
//         .catch((err) => console.error(err));
// };
// createNewPost(newPost);
