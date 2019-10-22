import {posts} from './_posts.js';
// import {db} from "../../fb";

// let cons = [];

// (async () => {
//     console.log('aasaa', await posts);
// 	cons = await posts;
// })();

// posts.then(data =>{
// 	console.log(data)
// });
import {db} from "../../fb.js";
import "firebase/firestore"

export async function get(req, res) {

    //1111111111111111111111111111
    let flist = await db.collection('blog').get();
    let posts = [];
    flist.forEach(async (doc)=>{
        await posts.push(doc.data());
        // await console.log(doc.data())
    });
    posts.forEach(post => {
        post.html = post.html.replace(/^\t{3}/gm, '');
    });
    //11111111111111111111111111111

    let posti = await posts;
    // console.log('log', await posti)
    const contents = JSON.stringify(posti.map(post => {
        return {
            title: post.title,
            slug: post.slug,
            date: post.date
        };
    }));
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}