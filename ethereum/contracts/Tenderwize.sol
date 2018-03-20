pragma solidity ^0.4.17;

contract Tenderwize {
	
	struct Tender
    {
    	bytes hashOfTender;
    	uint count;
		bytes [50] GSTIDArr;
		bytes [50] hashArr;
    }

	uint cnt;

	Tender[50] public arrTender;

	function Tenderwize () public {
		cnt = 0;
		for (uint i = 0; i < 50; i++) {
			arrTender[i].count = 0;
		}
	}

	//Maps the Tender Application's hash with his/her GSTID for the given Tender.
	function mapClient(bytes hashTender, bytes GSTID, bytes hash) public returns (uint) {
		if (!check(hashTender, GSTID)) {
			return 101;
		}
		
		uint c = arrTender[cnt].count;
		
		arrTender[cnt].GSTIDArr[c] = GSTID;
		arrTender[cnt].hashArr[c] = hash;
		arrTender[cnt].hashOfTender = hashTender;
		arrTender[cnt].count += 1;
		
		if (c == 0) {
			cnt += 1;
		}

		return cnt;
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
	function matchFileHash (bytes hashTender, bytes GSTID, bytes givenHash) public view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(arrTender[i].hashOfTender) == keccak256(hashTender)) {
				
				for (uint j = 0; j < arrTender[i].count; j++) {
					
					if (keccak256(arrTender[i].GSTIDArr[j]) == keccak256(GSTID)) {
						
						if (keccak256(arrTender[i].hashArr[j]) == keccak256(givenHash)) {
							return true;
						}
						
						else {
							return false;
						}
					}
				}
			}
		}
		return false;
	}
}