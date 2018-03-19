const express = require('express');
const app = express();
const router = express.Router();
const multer  = require('multer');
const port = process.env.PORT || 3000;

var tender_complete = {};
/*	general structure of a listed tender
org_name = [tender1, tender2];
tender = {
	id: 'id',
	title: 'title',
	desc: 'desc',
	link: 'link',
	addr: 'addr',
	dead1: 'deadline1',
	dead2: 'deadline2',
}
*/

var tenders_recieved = [];
/*  array of all recieved submissions grouped by tender id;
{
	tender_id = [
		{user_id: hash}
	],
	tender_id = [
		{user_id: hash}
	]
}
*/

// app.use('/api', router);
const server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});

const storage_user = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/applications');
  },
  filename: function (req, file, cb) {
	cb(null, 'application' + Date.now() + '.pdf');
  }
});
const upload_user = multer({storage: storage_user});

const storage_tender = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/tenders');
  },
  filename: function (req, file, cb) {
	cb(null, Date.now() + '.pdf');
  }
});
const upload_tender = multer({storage: storage_tender});

app.use('/', router);

router.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<form action="http://localhost:3000/org/upload/tender" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="filetoupload"><br>');
	res.write('<input type="text" name="user_type" value="adia"><br>');
	res.write('<input type="submit">');
	res.write('</form>');
	return res.end();
});

router.get('/org/tenders', function(req, res) {
	const org_id = req.query.org_id;
	res.json(tender_complete[org_id]);
});

router.post('/org/upload/tender', upload_tender.single('filetoupload'), function(req, res) {
	console.log(req.file);
});



















// const p = new Promise((resolve, reject) => {
// 	resolve(2)
// })

// async function hello() {
// 	const q = await p;
// 	return q;
// }

// hello().then((v) => console.log(2))