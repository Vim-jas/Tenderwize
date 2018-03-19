pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Tenderwize.sol";

contract TestTenderwize {

	Tenderwize tender = Adoption(DeployedAddresses.Adoption());


	//Checks the function mapClient
	function testMapClient() public {

		bytes hash = "somerandomhash";
		bytes GSTID = ""; //submit GSTID here
		bool correctness = tender.mapClient(GSTID, hash);
		bool actual = 1;

		Assert.equal(correctness, actual, "mapClient works fine! Hell Yes!");
	}

	function testMatchFileHash() public {

		bytes GSTID = "";
		bytes hash = "";
		bytes givenHash = "";
		bool correctness = tender.matchFileHash(GSTID, hash, givenHash);
		bool actual = 1;

		Assert.equal(correctness, actual, "matchFileHash works fine! Hell Yes!");
	}


}








}
