App = {
  
  //Initialized as null
  web3Provider: null,
  contracts: {},

	//Need to write this one :P
	init: function() {
		return App.initWeb3();
	},

  //Gives a web3 instance 
  initWeb3: function() {
  // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
    // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

	//Initializes the contract
	initContract: function() {
		$.getJSON('Tenderwize.json', function(data) {
    	// Get the necessary contract artifact file and instantiate it with truffle-contract
    	var TenderwizeArtifact = data;
    	App.contracts.Tenderwize = TruffleContract(TenderwizeArtifact);

    	// Set the provider for our contract
    	App.contracts.Tenderwize.setProvider(App.web3Provider);
    		//Initialize UI
		});
		return App.bindEvents();
 	},

	//Binds the event of click of the button with appropriate function.
	bindEvents: function() {
		//find events;
    $(document).on('click', '#submitTender', App.handleTenderReq);
    $(document).on('click', '#submitHashOfFile', App.handleTenderHashCheck);
    $(document).on('change', '#input-file', App.getClientSideHash);
	},


  //Generates hash of file on the client side
  getClientSideHash: function(event){

    var hash;    
    var input = event.target;        
    var reader = new FileReader();

    reader.onload = function() {
      var data = reader.result;
      hash = web3.sha3(data);
      console.log(hash);
      var t = document.getElementById("fileHash");         
      t.value = hash;
    }

    reader.readAsText(input.files[0]);

  },


  //Matches the hash of the uploaded file with the stored hashes
	handleTenderHashCheck: function(event) {
    event.preventDefault();

    var hashval =  $('#fileHash').val();
    var tenderval =  $('#tenderHash').val();
    var GST =  $('#GST').val();
    var curFileHash = $('#curFileHash').val();

    console.log(hashval);
    console.log(tenderval);
    console.log(GST);
    console.log(curFileHash);

    var tenderInstance;

      web3.eth.getAccounts(function(error, accounts) {
          if (error) {
            console.log(error);
          }
          var account = accounts[0];
        App.contracts.Tenderwize.deployed().then(function(instance) {
           tenderInstance = instance;
           //console.log(tenderInstance);
           return tenderInstance.matchFileHash(tenderval, GST, curFileHash, {from :account});
        }).then(function(result) {
           console.log(result.toNumber());
           console.log("success");
        }).catch(function(err) {
           console.log("Shit happened");
           console.log(err.message);
        });
      });

    },


    //Submits the hash of the tender application in the smart contract
    handleTenderReq :function (event) {
    event.preventDefault();
    
    var hashval =  $('#fileHash').val();
    var tenderval =  $('#tenderHash').val();
    var GST =  $('#GST').val();
    var curFileHash = $('#curFileHash').val();

    var tenderInstance;

     web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }

        var account = accounts[0];

        App.contracts.Tenderwize.deployed().then(function(instance) {
           tenderInstance = instance;
           return tenderInstance.mapClient(tenderval, GST, hashval, {from: account});
        }).then(function(result) {
           console.log(result);
           return ;
        }).catch(function(err) {
           console.log(err.message);
        });

      });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});