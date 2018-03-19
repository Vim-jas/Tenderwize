App = {
  
  //Initialized as null
  web3Provider: null,
  contracts: {},

  	//Need to write this one :P
  	init: function{

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

		// Use our contract to retrieve and mark the adopted pets
		//return App.markAdopted();

		//need to add a call to desired func 
		});
		return App.bindEvents();
 	},

	//Binds the event of click of the button with appropriate function.
	bindEvents: function() {
		$(document).on('click', '.btn-adopt', App.submitHashOfFile);
	},

	//Submits the hash of the tender application in the smart contract
	submitHashOfFile: function{



	},


};

$(function() {
  $(window).load(function() {
    App.init();
  });
});