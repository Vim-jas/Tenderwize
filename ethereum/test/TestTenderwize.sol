pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Tenderwize.sol";

contract TestTenderwize {

	Tenderwize tender = Tenderwize(DeployedAddresses.Tenderwize());


	//Checks the function mapClient
	function testMapClient() public {

		bytes memory hash = "somerandomhash";
		bytes memory GSTID = "GST1234121HJDHGV3"; //submit GSTID here
		tender.mapClient(GSTID, hash);
		bool correctness = tender.mapClient(GSTID, hash);
		
		bool actual = false;

		Assert.equal(correctness, actual, "mapClient didn't work! FUCCCKKKK NO!");
	}

	function testMatchFileHash() public {

		bytes memory GSTID = "GST1234121HJDHGV3";
		bytes memory hash = "somerandomhash";
		bytes memory givenHash = "somerandomhash";
		
		bool correctness = tender.matchFileHash(GSTID, hash, givenHash);
		
		bool actual = true;

		Assert.equal(correctness, actual, "matchFileHash didn't work! FUCCCKKKK NO!");
	}
}
