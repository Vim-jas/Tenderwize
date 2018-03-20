pragma solidity ^0.4.17;

contract Tenderwize {
	
	address [16] public adopters;
	
	 struct Tender
     {
     	bytes hashOfTender;
     	uint count;
	 	bytes [50] GSTIDArr;
	 	bytes [50] hashArr;
     }

	 uint public cnt;

	 //address[16] public adopters;

	 Tender[50] public arrTender;

	function Tenderwize () public {
		cnt = 0;
		for (uint i = 0; i < 50; i++) {
			arrTender[i].count = 0;
		}
	}

	//Maps the Tender Application's hash with his/her GSTID for the given Tender.
	function mapClient (bytes hashTender, bytes GSTID, bytes hash) public returns (uint) {
	
		if (!check(hashTender, GSTID)) {
			return 0;
		}
		
		uint c = arrTender[cnt].count;
		
		arrTender[cnt].GSTIDArr[c] = GSTID;
		arrTender[cnt].hashArr[c] = hash;
		arrTender[cnt].hashOfTender = hashTender;
		arrTender[cnt].count += 1;
		
		if (c == 0) {
			cnt += 1;
		}

		return 1;
	}

	//Checks whether the application of a certain user for a specific tender already exists or not
	function check (bytes hashTender, bytes GSTID) private view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(arrTender[i].hashOfTender) == keccak256(hashTender)) {
				for (uint j = 0; j < arrTender[i].count; j++) {
					if (keccak256(arrTender[i].GSTIDArr[j]) == keccak256(GSTID)) {
						return false;
					}
				}
			}
		}
		return true;
	}
	//Matches the hash of the file submiited with the stored hashes.
	function matchFileHash (bytes hashTender, bytes GSTID, bytes givenHash) public view returns (uint) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(arrTender[i].hashOfTender) == keccak256(hashTender)) {
				
				for (uint j = 0; j < arrTender[i].count; j++) {
					
					if (keccak256(arrTender[i].GSTIDArr[j]) == keccak256(GSTID)) {
						
						if (keccak256(arrTender[i].hashArr[j]) == keccak256(givenHash)) {
							return 1;
						}
						
						else {
							return 0;
						}
					}
				}
			}
		}
		return 0;
	}

	function getHashOfTender (bytes32 hashTender, bytes32 GSTID, bytes32 GSTID1, uint temp) public view returns(uint) {
		
		uint temp1  = temp + 10;
		if (keccak256(GSTID) == keccak256(GSTID1)) {
			return temp1;
		}
		return 0;
	}	
}