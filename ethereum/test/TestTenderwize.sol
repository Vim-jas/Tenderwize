pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Tenderwize.sol";

contract TestTenderwize {

	Tenderwize tender = Tenderwize(DeployedAddresses.Tenderwize());


	//Checks the function mapClient
	function testMapClient() public {

		bytes memory GSTID 		= "GST1234121HJDHGV3"; //submit GSTID here
		bytes memory hashTender = "hashOfTheTender";
		bytes memory hash 		= "somerandomhash";
		tender.mapClient(hashTender, GSTID, hash);
		bytes memory hashTender1 = "ashOfTheTender";
		bool correctness = tender.mapClient(hashTender1, GSTID, hash);
		bool actual = true;

		Assert.equal(correctness, actual, "mapClient didn't work! FUCCCKKKK NO!");
	}
	

	//Checks the function matchFileHash 
	function testMatchFileHash() public {


		bytes memory GSTID 		= "GST1234121HJDHGV3";
		bytes memory hashTender = "hashOfTheTender";
		bytes memory givenHash 	= "omerandomhash";
		
		bool correctness = tender.matchFileHash(hashTender, GSTID, givenHash);
		bool actual = false;

		Assert.equal(correctness, actual, "matchFileHash didn't work! FUCCCKKKK NO!");
	}
}
