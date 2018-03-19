pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Tenderwize.sol";

contract TestTenderwize {

	Tenderwize tender = Tenderwize(DeployedAddresses.Tenderwize());


	//Checks the function mapClient
	function testMapClient() public {

		bytes hash = "somerandomhash";
		bytes GSTID = "GST1234121HJDHGV3"; //submit GSTID here
		
		bool correctness = tender.mapClient(GSTID, hash);
		
		bool actual = true;

		Assert.equal(correctness, actual, "mapClient didn't work! FUCCCKKKK NO!");
	}

	function testMatchFileHash() public {

		bytes GSTID = "GST1234121HJDHGV3";
		bytes hash = "somerandomhash";
		bytes givenHash = "somerandomhash";
		
		bool correctness = tender.matchFileHash(GSTID, hash, givenHash);
		
		bool actual = true;

		Assert.equal(correctness, actual, "matchFileHash didn't work! FUCCCKKKK NO!");
	}
}








}
