const express = require('express');
const app = express();
const router = express.Router();
const multer  = require('multer');
const port = process.env.PORT || 3000;

var tender_complete = {
	'isro':[
		{
			id: '1',
			title: 'Rockets',
			desc: '5 Merlin rockets for GSLV 42',
			link: 'link',
			addr: '0x000000000000000000000',
			dead1: 'deadline1',
			dead2: 'deadline2',
		},
		{
			id: '2',
			title: 'GPU',
			desc: 'Tesla K80 for great performance in scientific calculation',
			link: 'link',
			addr: '0x000000000000000000000',
			dead1: 'deadline1',
			dead2: 'deadline2',
		},
	],
	'rajasthan':[
		{
			id: '3',
			title: 'Vaccination',
			desc: 'Vaccination equipment supply',
			link: 'link',
			addr: '0x000000000000000000000',
			dead1: 'deadline1',
			dead2: 'deadline2',
		},
		{
			id: '4',
			title: 'GPU',
			desc: 'Tesla K80 for great performance in scientific calculation',
			link: 'link',
			addr: '0x000000000000000000000',
			dead1: 'deadline1',
			dead2: 'deadline2',
		},
	],
};
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

router.post('/new_tender', function(req, res) {
	var dt = new Date();

	var tender = {
		id: req.body.title,
		title: req.body.title,
		desc: req.body.desc,
		link: req.body.link,
		addr: null,
		date: dt.toDateString(),
		dead1: req.body.dead1,
		dead2: req.body.dead2
	}

	tender_complete[req.body.org] = tender;
});

router.get('/get_tenders', function(req, res){
	var id = req.query.id;
	var org = req.query.org;

	if(!org && !id) {
		return false;
	}

	if(org) {
		for (var i = tender_complete[org].length - 1; i >= 0; i--) {
			if (tender_complete[org][i]['id'] == id)
				return res.json(tender_complete[org][i]);
		}
	}
	else {
		var keys = Object.keys(tender_complete);
		console.log(keys);
		for (var i = keys.length - 1; i >= 0; i--) {
			
			for (var j = tender_complete[keys[i]].length - 1; j >= 0; j--) {
				if (tender_complete[keys[i]][j]['id'] == id)
					return res.json(tender_complete[keys[i]][j]);
			}
		}
		console.log(tender_complete[keys[i]][j]);
	}
	return res.end('false');
});

router.get('/org/tenders', function(req, res) {
	const org_id = req.query.org_id;
	res.json({org_id: tender_complete[org_id]});
});

router.post('/org/upload/tender', upload_tender.single('filetoupload'), function(req, res) {
	var path = req.file.path;
	var name = req.file.filename;
	res.json({'path': path, 'name': name});
});

router.post('/org/upload/user', upload_user.single('filetoupload'), function(req, res) {
	var path = req.file.path;
	var name = req.file.filename;
	res.json({'path': path, 'name': name});
});

