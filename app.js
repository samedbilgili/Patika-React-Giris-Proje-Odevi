import axios from 'axios';

const getData = async(user_id) => {

    const { data: userInfo } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: userPosts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    userInfo.posts = userPosts;

    return userInfo;

};

export default getData;