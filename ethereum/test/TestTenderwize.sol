pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Tenderwize.sol";

contract TestTenderwize {

	Tenderwize tender = Tenderwize(DeployedAddresses.Tenderwize());


	//Checks the function mapClient
	function testMapClient() public {

		string memory GSTID 		= "GST1234121HJDHGV3"; //submit GSTID here
		string memory hashTender = "hashOfTheTender";
		string memory hash 		= "somerandomhash";
		tender.mapClient(hashTender, GSTID, hash);
		string memory hashTender1 = "ashOfTheTender";
		bool correctness = tender.mapClient(hashTender1, GSTID, hash);
		bool actual = true;

		Assert.equal(correctness, actual, "mapClient didn't work! FUCCCKKKK NO!");
	}
	

	//Checks the function matchFileHash 
	function testMatchFileHash() public {


		string memory GSTID 		= "GST1234121HJDHGV3";
		string memory hashTender = "hashOfTheTender";
		string memory givenHash 	= "omerandomhash";
		
		bool correctness = tender.matchFileHash(hashTender, GSTID, givenHash);
		bool actual = false;

		Assert.equal(correctness, actual, "matchFileHash didn't work! FUCCCKKKK NO!");
	}
}
