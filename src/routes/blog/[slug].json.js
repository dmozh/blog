// import {posts} from './_posts.js';
import {db} from "../../fb.js";
import "firebase/firestore"

const lookup = new Map();

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	// console.log('log1', await posts);

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
	posti.forEach(async post => {
    	// await console.log(post)
        await lookup.set(post.slug, JSON.stringify(post));
    });

	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
