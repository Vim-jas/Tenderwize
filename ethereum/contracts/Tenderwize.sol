pragma solidity ^0.4.17;

contract Tenderwize {
	
	struct Tender
    {
    	string hashOfTender;
    	uint count;
		string [50] GSTIDArr;
		string [50] hashArr;
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
	function mapClient(string hashTender, string GSTID, string hash) public returns (bool) {
		if (!check(hashTender, GSTID)) {
			return false;
		}
		
		uint c = arrTender[cnt].count;
		
		arrTender[cnt].GSTIDArr[c] = GSTID;
		arrTender[cnt].hashArr[c] = hash;
		arrTender[cnt].hashOfTender = hashTender;
		arrTender[cnt].count += 1;
		
		if (c == 0) {
			cnt += 1;
		}

		return true;
	}


	//Checks whether the application of a certain user for a specific tender already exists or not
	function check (string hashTender, string GSTID) private view returns (bool) {
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
	function matchFileHash (string hashTender, string GSTID, string givenHash) public view returns (bool) {
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

	// function getGSTID () public view returns(string[50]) {
	// 	return arrTender[cnt].GSTIDArr;
	// }

	// function getHashArr () public view returns(string[50]) {
	// 	return arrTender[cnt].hashArr;
	// }

	// function getHashOfTender () public constant returns(string) {
	// 	return string(cnt);
	// }	
}