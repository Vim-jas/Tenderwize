pragma solidity ^0.4.17;

contract Tenderwize {
	
	struct Tender
    {
    	bytes hashOfTender;
    	uint count;
		bytes [100] GSTIDArr;
		bytes [100] hashArr;
    }

	uint cnt;

	Tender[50] public arrTender;

	function Tenderwize () public {
		cnt = 0;
		for (uint i = 0; i < 50; i++) {
			arrTender[i].count = 0;
		}
	}

	function mapClient(bytes hashTender, bytes GSTID, bytes hash) public returns (bool) {
		if (!check(hashTender, GSTID)) {
			return false;
		}
		
		uint c = arrTender[cnt].count;
		
		arrTender[cnt].GSTIDArr[c] = GSTID;
		arrTender[cnt].hashArr[c] = hash;
		arrTender[cnt].count += 1;
		
		if (c == 0) {
			cnt += 1;
		}

		return true;
	}

	function check (bytes hashTender, bytes GSTID) private view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(arrTender[i].hashOfTender) == keccak256(hashTender)) {
				for (uint j = 0; j < 100; j++) {
					if (keccak256(arrTender[i].GSTIDArr[j]) == keccak256(GSTID)) {
						return false;
					}
				}
			}
		}
		return true;
	}

	function matchFileHash (bytes hashTender, bytes GSTID, bytes givenHash) public view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(arrTender[i].hashOfTender) == keccak256(hashTender)) {
				for (uint j = 0; j < 100; j++) {
					if (keccak256(arrTender[i].GSTIDArr[j]) == keccak256(GSTID)) {
						if (keccak256(arrTender[i].hashArr[j]) == keccak256(givenHash)) {
							return true;
						}else {
							return false;
						}
					}
				}
			}
		}
		return false;
	}
}